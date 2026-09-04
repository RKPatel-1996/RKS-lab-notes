import React, { useRef, useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { DesktopReaderRail } from '../ui/DesktopReaderRail';
import { AppContextType } from '../../lib/types';
import { useReaderPreferences } from '../../hooks/useReaderPreferences';
import rkLogo from '../../content/images/rk_logo.svg';

interface AppShellProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const AppShell: React.FC<AppShellProps> = ({ isDarkMode, toggleTheme }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [fontSizeIdx, setFontSizeIdx] = useState(2);

  const {
    isLeftRailExpanded,
    isDesktopRailExpanded,
    setIsLeftRailExpanded,
    setIsDesktopRailExpanded,
  } = useReaderPreferences();

  // Check if we are currently viewing an article to adjust layout and show reader rail
  const isArticlePage = location.pathname.startsWith('/articles/');

  // PASS 7D.6 & PASS 7F Invariant 9: Reliable Desktop Outside-Click Rail Collapse
  // Scoped exclusively to article routes so Home/Media/About sidebar behaves normally.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!isArticlePage) return;

    const handlePointerDown = (event: PointerEvent) => {
      // Desktop only (>= 768px)
      if (window.innerWidth < 768) return;

      const target = event.target as Node | null;
      if (!target) return;

      const leftRailEl = document.getElementById('desktop-navigation-rail');
      const rightRailEl = document.getElementById('desktop-reader-rail');
      const leftToggleEl = document.querySelector('[data-rail="left-toggle"]');
      const rightToggleEl = document.querySelector('[data-rail="right-toggle"]');

      // 1. If Left Rail is expanded, collapse if click is outside Left Rail and outside its toggle
      if (isLeftRailExpanded && leftRailEl) {
        const isInsideLeft = leftRailEl.contains(target);
        const isLeftToggle = leftToggleEl ? leftToggleEl.contains(target) : false;
        if (!isInsideLeft && !isLeftToggle) {
          setIsLeftRailExpanded(false);
        }
      }

      // 2. If Right Reader Rail is expanded, collapse if click is outside Right Rail and outside its toggle
      if (isDesktopRailExpanded && rightRailEl) {
        const isInsideRight = rightRailEl.contains(target);
        const isRightToggle = rightToggleEl ? rightToggleEl.contains(target) : false;
        if (!isInsideRight && !isRightToggle) {
          setIsDesktopRailExpanded(false);
        }
      }
    };

    // Capture phase (true) ensures the listener intercepts the pointer event reliably
    // We NEVER call preventDefault or stopPropagation, ensuring normal link navigation and text selection work
    document.addEventListener('pointerdown', handlePointerDown, true);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown, true);
    };
  }, [isArticlePage, isLeftRailExpanded, isDesktopRailExpanded, setIsLeftRailExpanded, setIsDesktopRailExpanded]);

  return (
    <div className={`h-screen w-screen flex flex-col md:flex-row overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-paper text-ink'}`}>
      
      {/* =======================
          GLOBAL BACKGROUND FX
         ======================= */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: isDarkMode
            ? `radial-gradient(#ffffff 1px, transparent 1px)`
            : `radial-gradient(#666 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      ></div>

      {/* =======================
          MOBILE HEADER (Title Only)
          Hidden on Article Pages to reduce distraction
         ======================= */}
      <header className={`md:hidden flex items-center justify-between p-4 border-b-2 border-ink dark:border-white bg-paper dark:bg-black z-30 relative shrink-0 ${isArticlePage ? 'hidden' : 'flex'}`}>
        <div className="flex items-center gap-2">
            <img src={rkLogo} alt="Logo" className="w-8 h-8 object-contain dark:invert" />
            <h1 className="font-serif font-bold text-lg uppercase tracking-wider dark:text-white">Lab_Note</h1>
        </div>
      </header>

      {/* =======================
          LAYOUT STRUCTURE
         ======================= */}
      
      {/* Left Sidebar (Desktop Dock on md+, Tray on mobile) */}
      <Sidebar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme}
        fontSizeIdx={fontSizeIdx}
        setFontSizeIdx={setFontSizeIdx}
      />

      {/* Main Content Area (Scrollable Center Stage) */}
      <main className="flex-1 relative overflow-hidden z-10 flex flex-col h-full min-w-0">
        {/* 
            This div is the PRIMARY scroll container for the app. 
            Pages rendered inside Outlet must NOT have their own overflow-y-auto or fixed heights 
            that trap scrolling.
        */}
        <div 
            ref={contentRef}
            className={`flex-1 overflow-y-auto bg-transparent font-serif text-base touch-auto ${isArticlePage ? 'pb-0' : 'pb-24 md:pb-0'}`}
        >
           <Outlet context={{ fontSizeIdx, setFontSizeIdx } satisfies AppContextType} />
        </div>
      </main>

      {/* Right Desktop Reader Rail (Desktop only, visible on article pages) */}
      {isArticlePage && <DesktopReaderRail />}
      
    </div>
  );
};