import React, { useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { AppContextType } from '../../lib/types';
import rkLogo from '../../content/images/rk_logo.svg';

interface AppShellProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const AppShell: React.FC<AppShellProps> = ({ isDarkMode, toggleTheme }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [fontSizeIdx, setFontSizeIdx] = useState(2);

  // Check if we are currently viewing an article to adjust mobile layout
  const isArticlePage = location.pathname.startsWith('/articles/');

  return (
    <div className={`h-screen w-screen flex flex-col lg:flex-row overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-paper text-ink'}`}>

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
      <header className={`lg:hidden flex items-center justify-between p-4 border-b-2 border-ink dark:border-white bg-paper dark:bg-black z-30 relative shrink-0 ${isArticlePage ? 'hidden' : 'flex'}`}>
        <div className="flex items-center gap-2">
            <img src={rkLogo} alt="Logo" className="w-8 h-8 object-contain dark:invert" />
            <h1 className="font-serif font-bold text-lg uppercase tracking-wider dark:text-white">Lab_Note</h1>
        </div>
      </header>

      {/* =======================
          LAYOUT STRUCTURE
         ======================= */}

      {/* Sidebar (Responsive: Collapsible Dock on Desktop, Tray on Mobile) */}
      <Sidebar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        fontSizeIdx={fontSizeIdx}
        setFontSizeIdx={setFontSizeIdx}
      />

      {/* Main Content Area (Scrollable) */}
      <main className="flex-1 relative overflow-hidden z-10 flex flex-col h-full">
        {/*
            This div is the PRIMARY scroll container for the app.
            Pages rendered inside Outlet must NOT have their own overflow-y-auto or fixed heights
            that trap scrolling.
        */}
        <div
            ref={contentRef}
            className="flex-1 overflow-y-auto bg-transparent font-serif text-base touch-auto pb-24 lg:pb-0" // Add padding-bottom for mobile to clear the dock
        >
           <Outlet context={{ fontSizeIdx, setFontSizeIdx } satisfies AppContextType} />
        </div>
      </main>

    </div>
  );
};