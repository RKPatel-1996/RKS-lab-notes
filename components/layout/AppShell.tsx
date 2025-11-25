import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { FlaskConical } from 'lucide-react';

interface AppShellProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const AppShell: React.FC<AppShellProps> = ({ isDarkMode, toggleTheme }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScrollUp = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ top: -300, behavior: 'smooth' });
    }
  };

  const handleScrollDown = () => {
    if (contentRef.current) {
      contentRef.current.scrollBy({ top: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className={`h-screen w-screen flex flex-col lg:flex-row overflow-hidden transition-colors duration-300 ${isDarkMode ? 'bg-crt-bg text-crt-green' : 'bg-paper text-ink'}`}>
      
      {/* =======================
          GLOBAL BACKGROUND FX
         ======================= */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: isDarkMode
            ? `linear-gradient(0deg, transparent 24%, #00ff00 25%, #00ff00 26%, transparent 27%, transparent 74%, #00ff00 75%, #00ff00 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #00ff00 25%, #00ff00 26%, transparent 27%, transparent 74%, #00ff00 75%, #00ff00 76%, transparent 77%, transparent)`
            : `radial-gradient(#666 1px, transparent 1px)`,
          backgroundSize: isDarkMode ? '4px 4px' : '20px 20px'
        }}
      ></div>

      {isDarkMode && (
        <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
      )}

      {/* =======================
          MOBILE HEADER (Title Only)
         ======================= */}
      <header className="lg:hidden flex items-center justify-between p-4 border-b-2 border-ink dark:border-crt-green bg-paper dark:bg-black z-30 relative shrink-0">
        <div className="flex items-center gap-2">
            <FlaskConical className="dark:text-crt-green" size={20} />
            <h1 className="font-serif font-bold text-lg uppercase tracking-wider dark:text-crt-green">Lab_Note</h1>
        </div>
      </header>

      {/* =======================
          LAYOUT STRUCTURE
         ======================= */}
      
      {/* Sidebar (Responsive: Drawer on Desktop, Buttons on Mobile) */}
      <Sidebar 
        isDarkMode={isDarkMode} 
        toggleTheme={toggleTheme}
        onScrollUp={handleScrollUp}
        onScrollDown={handleScrollDown}
      />

      {/* Main Content Area (Scrollable) */}
      <main className="flex-1 relative overflow-hidden z-10 flex flex-col h-full">
        {/* 
            This div is the PRIMARY scroll container for the app. 
            Pages rendered inside Outlet must NOT have their own overflow-y-auto or fixed heights 
            that trap scrolling, otherwise the global scroll buttons in Sidebar will not work.
        */}
        <div 
            ref={contentRef}
            className="flex-1 overflow-y-auto bg-transparent font-serif text-base touch-auto"
        >
           <Outlet />
        </div>
      </main>
      
    </div>
  );
};