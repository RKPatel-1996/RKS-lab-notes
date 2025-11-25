import React from 'react';
import { NavLink } from 'react-router-dom';
import { FlaskConical, LayoutGrid, MonitorPlay, UserSquare, Sun, Moon, FileText, Cpu, ChevronUp, ChevronDown } from 'lucide-react';

interface SidebarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  onScrollUp: () => void;
  onScrollDown: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isDarkMode, toggleTheme, onScrollUp, onScrollDown }) => {
  
  // Desktop Nav Class
  const getDesktopNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return `flex items-center gap-4 px-4 py-3 mx-2 rounded border-2 transition-all justify-start
      ${isActive
        ? 'bg-ink text-paper border-ink dark:bg-crt-green dark:text-black dark:border-crt-green shadow-retro'
        : 'border-transparent hover:border-gray-400 dark:text-crt-green dark:hover:border-crt-green'}`;
  };

  // Mobile Nav Class
  const getMobileBtnClass = (isActive: boolean) => {
    return `flex flex-col items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-out backdrop-blur-sm shadow-lg
      ${isActive
        ? 'bg-black/90 text-white scale-105 z-50 dark:bg-crt-green/90 dark:text-black font-bold border border-white/20'
        : 'bg-white/20 text-black/80 scale-90 border border-white/10 dark:bg-black/40 dark:text-crt-green/50 hover:bg-white/40'}`;
  };

  // Scroll Button Class (Special case)
  const scrollBtnClass = `flex flex-col items-center justify-center w-10 h-10 rounded-full transition-all duration-200 backdrop-blur-sm shadow-md bg-white/40 text-black border border-white/20 hover:bg-white/60 active:scale-95 dark:bg-black/60 dark:text-crt-green dark:border-crt-green/30`;

  return (
    <>
      {/* =================================
          DESKTOP SIDEBAR (Existing)
         ================================= */}
      <nav className="hidden lg:flex w-64 border-r-2 border-ink dark:border-crt-green bg-gray-100 dark:bg-black flex-col justify-between transition-all duration-300 z-20 h-full relative">
        {/* Logo Area */}
        <div className="p-4 border-b-2 border-ink dark:border-crt-green">
          <div className="border-4 border-ink dark:border-crt-green p-2 text-center bg-paper dark:bg-black">
            <FlaskConical className="mx-auto mb-2 dark:text-crt-green" size={24} />
            <h1 className="block font-serif font-bold text-lg uppercase tracking-wider dark:text-crt-green">Lab_Note</h1>
          </div>
        </div>

        {/* Nav Items */}
        <div className="flex-1 py-8 flex flex-col gap-2 overflow-y-auto">
          <NavLink to="/" className={getDesktopNavLinkClass} title="Library">
            <LayoutGrid size={20} />
            <span className="block font-mono text-sm font-bold">LIBRARY</span>
          </NavLink>

          <NavLink to="/articles/standard" className={getDesktopNavLinkClass} title="Demo: Standard">
            <FileText size={20} />
            <span className="block font-mono text-sm font-bold">DEMO_STD</span>
          </NavLink>

          <NavLink to="/articles/interactive" className={getDesktopNavLinkClass} title="Demo: Interactive">
            <Cpu size={20} />
            <span className="block font-mono text-sm font-bold">DEMO_INT</span>
          </NavLink>

          <div className="h-px bg-gray-300 dark:bg-crt-dim mx-4 my-2"></div>

          <NavLink to="/media" className={getDesktopNavLinkClass} title="Media Logs">
            <MonitorPlay size={20} />
            <span className="block font-mono text-sm font-bold">MEDIA_LOGS</span>
          </NavLink>
          
          <NavLink to="/about" className={getDesktopNavLinkClass} title="Personnel File">
            <UserSquare size={20} />
            <span className="block font-mono text-sm font-bold">PERSONNEL</span>
          </NavLink>
        </div>

        {/* Theme Toggle & Footer */}
        <div className="p-4 border-t-2 border-ink dark:border-crt-green bg-paper dark:bg-black">
          <button
            onClick={toggleTheme}
            className="w-full flex items-center justify-start gap-4 p-2 font-mono text-xs border border-pencil dark:border-crt-green hover:bg-gray-200 dark:hover:bg-crt-dim dark:text-crt-green transition-colors"
          >
            {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            <span className="block">{isDarkMode ? 'DAY_SHIFT' : 'FLUORESCENCE'}</span>
          </button>
          <div className="block mt-4 font-mono text-[10px] text-center text-pencil dark:text-crt-green/50">
            v.3.0.0-router<br />ReactOS_Shell
          </div>
        </div>
      </nav>

      {/* =================================
          MOBILE BUTTON STRIP (New)
         ================================= */}
      <div className="lg:hidden fixed right-2 bottom-2 z-50 flex flex-col gap-0.5 pointer-events-none">
        {/* Container with pointer-events-auto allows clicks on buttons but lets clicks pass through gaps */}
        <div className="pointer-events-auto flex flex-col gap-1 p-1">
          
          {/* Scroll Up */}
          <button onClick={onScrollUp} className={scrollBtnClass} aria-label="Scroll Up">
            <ChevronUp size={22} />
          </button>

          {/* Spacer/Divider */}
          <div className="h-1"></div>

          {/* Library */}
          <NavLink to="/" className={({ isActive }) => getMobileBtnClass(isActive)} aria-label="Library">
            <LayoutGrid size={18} />
          </NavLink>

          {/* Demo Std */}
          <NavLink to="/articles/standard" className={({ isActive }) => getMobileBtnClass(isActive)} aria-label="Standard Demo">
            <FileText size={18} />
          </NavLink>

          {/* Demo Int */}
          <NavLink to="/articles/interactive" className={({ isActive }) => getMobileBtnClass(isActive)} aria-label="Interactive Demo">
            <Cpu size={18} />
          </NavLink>

           {/* Media */}
           <NavLink to="/media" className={({ isActive }) => getMobileBtnClass(isActive)} aria-label="Media Logs">
            <MonitorPlay size={18} />
          </NavLink>

          {/* Personnel */}
          <NavLink to="/about" className={({ isActive }) => getMobileBtnClass(isActive)} aria-label="Personnel">
            <UserSquare size={18} />
          </NavLink>

          {/* Spacer/Divider */}
          <div className="h-1"></div>

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className={scrollBtnClass} aria-label="Toggle Theme">
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Spacer/Divider */}
          <div className="h-1"></div>

           {/* Scroll Down */}
           <button onClick={onScrollDown} className={scrollBtnClass} aria-label="Scroll Down">
            <ChevronDown size={22} />
          </button>

        </div>
      </div>
    </>
  );
};