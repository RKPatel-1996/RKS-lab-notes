import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutGrid, MonitorPlay, UserSquare, Sun, Moon, 
  ChevronLeft, ChevronRight, Printer, Minus, Plus
} from 'lucide-react';
import { useReaderPreferences } from '../../hooks/useReaderPreferences';
import rkLogo from '../../content/images/rk_logo.svg';

interface SidebarDesktopProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  fontSizeIdx: number;
  setFontSizeIdx: (idx: number) => void;
  isCollapsed: boolean;
  toggleCollapse: () => void;
  isArticlePage: boolean;
}

export const SidebarDesktop: React.FC<SidebarDesktopProps> = ({ 
  isDarkMode, toggleTheme, fontSizeIdx: _fontSizeIdx, setFontSizeIdx: _setFontSizeIdx, isCollapsed, toggleCollapse, isArticlePage 
}) => {
  const {
    effectiveTypography,
    increaseFontSize,
    decreaseFontSize,
    canIncreaseFontSize,
    canDecreaseFontSize,
    isFocusMode,
  } = useReaderPreferences();

  // Effective collapse status matches isCollapsed directly
  const effectiveCollapsed = isCollapsed;

  const getDesktopNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return `flex items-center gap-4 px-3 py-3 mx-2 rounded border-2 transition-all overflow-hidden whitespace-nowrap
      ${isActive
        ? 'bg-ink text-paper border-ink dark:bg-white dark:text-black dark:border-white shadow-retro'
        : 'border-transparent hover:border-gray-400 dark:text-white dark:hover:border-white'}
      ${effectiveCollapsed ? 'justify-center' : 'justify-start'}`;
  };

  const getDesktopControlClass = (disabled: boolean = false) => {
    return `flex items-center gap-4 px-3 py-3 mx-2 rounded border-2 transition-all overflow-hidden whitespace-nowrap bg-white dark:bg-black/50
      ${disabled ? 'opacity-25 cursor-not-allowed border-transparent' : 'border-gray-200 dark:border-gray-700 hover:border-ink dark:hover:border-white cursor-pointer active:scale-95'}
      ${effectiveCollapsed ? 'justify-center' : 'justify-start'}`;
  };

  return (
    <nav 
      id="desktop-navigation-rail"
      role="navigation"
      aria-label="Application Navigation Rail"
      onClick={() => {
        if (effectiveCollapsed) {
          toggleCollapse();
        }
      }}
      className={`hidden md:flex border-r-2 bg-gray-100 dark:bg-black flex-col justify-between transition-all duration-300 ease-in-out z-20 h-full relative shrink-0 select-none
        ${effectiveCollapsed ? 'w-16 cursor-pointer' : 'w-64 cursor-default'}
        ${
          isArticlePage && isFocusMode && !isCollapsed
            ? 'opacity-100 border-ink dark:border-white'
            : isArticlePage && isFocusMode
            ? 'opacity-40 hover:opacity-100 focus-within:opacity-100 border-gray-300 dark:border-gray-800 hover:border-ink dark:hover:border-white'
            : 'opacity-100 border-ink dark:border-white'
        }`}
    >
      {/* Toggle Button */}
      <button 
        type="button"
        data-rail="left-toggle"
        onClick={(e) => {
          e.stopPropagation();
          toggleCollapse();
        }}
        aria-label={effectiveCollapsed ? "Expand navigation rail" : "Collapse navigation rail"}
        title={effectiveCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        className="absolute -right-3 top-20 w-6 h-6 bg-paper dark:bg-black border-2 border-ink dark:border-white rounded-full flex items-center justify-center text-ink dark:text-white hover:scale-110 transition-transform z-30 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white cursor-pointer"
      >
        {effectiveCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* Logo Area */}
      <div 
        className="p-4 border-b-2 border-ink dark:border-white shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`border-4 border-ink dark:border-white transition-all duration-300 bg-paper dark:bg-black flex items-center justify-center overflow-hidden
          ${effectiveCollapsed ? 'p-1 w-10 h-10 mx-auto rounded-full' : 'p-2 w-full h-auto rounded-none'}`}>
          <img 
            src={rkLogo} 
            alt="Lab Logo" 
            className={`object-contain dark:invert transition-all duration-300 ${effectiveCollapsed ? 'w-8 h-8' : 'w-8 h-8'}`} 
          />
          <h1 className={`font-serif font-bold text-lg uppercase tracking-wider dark:text-white ml-2 transition-opacity duration-200
            ${effectiveCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100 block'}`}>
            Lab_Note
          </h1>
        </div>
      </div>

      {/* Nav Items */}
      <div className="flex-1 py-4 flex flex-col gap-2 overflow-y-auto overflow-x-hidden">
        
        {/* Article Specific Controls (Repurposed to unified Reader Preferences state) */}
        {isArticlePage && (
          <div className="mb-4 pb-4 border-b border-gray-300 dark:border-gray-700 mx-2 space-y-2">
            <div className={`font-mono text-[10px] uppercase text-pencil dark:text-gray-400 mb-2 transition-opacity flex items-center justify-between ${effectiveCollapsed ? 'text-center justify-center' : 'px-3'}`}>
              <span>{effectiveCollapsed ? 'TOOL' : 'READER TOOLS'}</span>
              {!effectiveCollapsed && (
                <span className="text-[9px] font-bold px-1 bg-gray-200 dark:bg-gray-800 text-ink dark:text-white">
                  {effectiveTypography.fontSize}PX
                </span>
              )}
            </div>
            
            {/* Increase Font Size (A+) */}
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                increaseFontSize();
              }}
              disabled={!canIncreaseFontSize}
              className={getDesktopControlClass(!canIncreaseFontSize)}
              title="Increase Font Size (A+)"
              aria-label="Increase reader font size (A+)"
            >
              <Plus size={20} className="shrink-0 dark:text-white" />
              <span className={`block font-mono text-xs font-bold dark:text-white transition-opacity duration-200 ${effectiveCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                A+ SIZE
              </span>
            </button>

            {/* Decrease Font Size (A-) */}
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                decreaseFontSize();
              }}
              disabled={!canDecreaseFontSize}
              className={getDesktopControlClass(!canDecreaseFontSize)}
              title="Decrease Font Size (A-)"
              aria-label="Decrease reader font size (A-)"
            >
              <Minus size={20} className="shrink-0 dark:text-white" />
              <span className={`block font-mono text-xs font-bold dark:text-white transition-opacity duration-200 ${effectiveCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                A- SIZE
              </span>
            </button>

            {/* Print Job */}
            <button 
              type="button"
              className={getDesktopControlClass()} 
              onClick={(e) => {
                e.stopPropagation();
                window.print();
              }} 
              title="Print manuscript"
              aria-label="Print manuscript"
            >
              <Printer size={20} className="shrink-0 dark:text-white" />
              <span className={`block font-mono text-xs font-bold dark:text-white transition-opacity duration-200 ${effectiveCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                PRINT_JOB
              </span>
            </button>
          </div>
        )}

        <NavLink 
          to="/" 
          className={getDesktopNavLinkClass} 
          title="Library"
          onClick={(e) => e.stopPropagation()}
        >
          <LayoutGrid size={24} className="shrink-0" />
          <span className={`block font-mono text-sm font-bold transition-opacity duration-200 ${effectiveCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
            LIBRARY
          </span>
        </NavLink>

        <div className="h-px bg-gray-300 dark:bg-gray-800 mx-4 my-2 shrink-0"></div>

        <NavLink 
          to="/media" 
          className={getDesktopNavLinkClass} 
          title="Media Logs"
          onClick={(e) => e.stopPropagation()}
        >
          <MonitorPlay size={24} className="shrink-0" />
          <span className={`block font-mono text-sm font-bold transition-opacity duration-200 ${effectiveCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
            MEDIA_LOGS
          </span>
        </NavLink>
        
        <NavLink 
          to="/about" 
          className={getDesktopNavLinkClass} 
          title="Personnel File"
          onClick={(e) => e.stopPropagation()}
        >
          <UserSquare size={24} className="shrink-0" />
          <span className={`block font-mono text-sm font-bold transition-opacity duration-200 ${effectiveCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
            PERSONNEL
          </span>
        </NavLink>
      </div>

      {/* Theme Toggle & Footer */}
      <div 
        className="p-2 border-t-2 border-ink dark:border-white bg-paper dark:bg-black shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            toggleTheme();
          }}
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          className={`w-full flex items-center p-2 font-mono text-xs border border-pencil dark:border-white hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white
            ${effectiveCollapsed ? 'justify-center' : 'justify-start gap-4'}`}
          title={isDarkMode ? "LIGHT_MODE" : "DARK_MODE"}
        >
          {isDarkMode ? <Sun size={18} className="shrink-0" /> : <Moon size={18} className="shrink-0" />}
          <span className={`transition-opacity duration-200 font-bold whitespace-nowrap overflow-hidden
            ${effectiveCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100 block'}`}>
            {isDarkMode ? "LIGHT MODE" : "DARK MODE"}
          </span>
        </button>
        
        <div className={`mt-2 font-mono text-[9px] text-center text-pencil dark:text-gray-500 transition-opacity duration-200 ${effectiveCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>
          v.3.1.0-dock
        </div>
      </div>
    </nav>
  );
};