import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutGrid, MonitorPlay, UserSquare, Sun, Moon, 
  ChevronUp, ChevronDown,
  Printer, Minus, Plus
} from 'lucide-react';
import { FONT_SIZES } from '../../lib/constants';

interface SidebarMobileProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  fontSizeIdx: number;
  setFontSizeIdx: (idx: number) => void;
  isOpen: boolean;
  toggleOpen: () => void;
  setIsOpen: (isOpen: boolean) => void;
  isArticlePage: boolean;
}

export const SidebarMobile: React.FC<SidebarMobileProps> = ({
  isDarkMode, toggleTheme, fontSizeIdx, setFontSizeIdx, isOpen, toggleOpen, setIsOpen, isArticlePage
}) => {
  // On article pages, navigation is handled by in-flow Back and reader controls are at bottom-right.
  // Avoid rendering the bottom-center dock button on article pages to eliminate scattered controls.
  if (isArticlePage) {
    return null;
  }
  
  const getMobileBtnClass = (isActive: boolean) => {
    return `flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ease-out backdrop-blur-md shadow-lg border-2
      ${isActive
        ? 'bg-ink text-white border-ink dark:bg-white dark:text-black dark:border-white scale-110 -translate-y-2'
        : 'bg-white/80 text-ink/80 border-transparent dark:bg-black/60 dark:text-white dark:border-white/30 hover:scale-105'}`;
  };

  const MobileControlBtnClass = "flex items-center justify-center w-10 h-10 rounded-lg bg-white/90 dark:bg-black/90 border border-gray-300 dark:border-white/50 text-ink dark:text-white shadow-sm active:scale-95 disabled:opacity-50";

  return (
    <div className="lg:hidden fixed bottom-6 left-0 w-full z-50 pointer-events-none flex flex-col items-center justify-end px-4">
        
        {/* The Tray (Icons) */}
        <div 
          className={`flex flex-col items-center p-3 mb-3 rounded-2xl bg-white/30 dark:bg-black/80 border border-white/40 dark:border-white/40 backdrop-blur-xl shadow-2xl transition-all duration-300 origin-bottom
            ${isOpen 
              ? 'opacity-100 scale-100 translate-y-0 visible pointer-events-auto' 
              : 'opacity-0 scale-90 translate-y-10 invisible pointer-events-none'}`}
        >
          {/* Section: Article Controls (Only visible on Article Pages) */}
          {isArticlePage && (
            <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-400/30 dark:border-white/30 w-full justify-center">
               <button 
                  onClick={() => setFontSizeIdx(Math.max(0, fontSizeIdx - 1))}
                  disabled={fontSizeIdx === 0}
                  className={MobileControlBtnClass}
               >
                 <Minus size={16} />
               </button>
               
               <span className="font-mono text-xs font-bold min-w-[30px] text-center dark:text-white">
                 A{fontSizeIdx + 1}
               </span>

               <button 
                  onClick={() => setFontSizeIdx(Math.min(FONT_SIZES.length - 1, fontSizeIdx + 1))}
                  disabled={fontSizeIdx === FONT_SIZES.length - 1}
                  className={MobileControlBtnClass}
               >
                 <Plus size={16} />
               </button>

               <div className="w-px h-6 bg-gray-400/50 dark:bg-white/50 mx-1"></div>

               <button className={MobileControlBtnClass} onClick={() => window.print()}>
                 <Printer size={16} />
               </button>
            </div>
          )}

          {/* Section: Main Navigation */}
          <div className="flex items-end gap-3">
            <NavLink to="/" className={({ isActive }) => getMobileBtnClass(isActive)} onClick={() => setIsOpen(false)}>
              <LayoutGrid size={20} />
            </NavLink>

            <NavLink to="/media" className={({ isActive }) => getMobileBtnClass(isActive)} onClick={() => setIsOpen(false)}>
              <MonitorPlay size={20} />
            </NavLink>

            <NavLink to="/about" className={({ isActive }) => getMobileBtnClass(isActive)} onClick={() => setIsOpen(false)}>
              <UserSquare size={20} />
            </NavLink>

            <div className="w-px h-8 bg-ink/20 dark:bg-white/20 mx-1"></div>

            <button 
              onClick={() => { toggleTheme(); setIsOpen(false); }} 
              className="flex items-center justify-center w-12 h-12 rounded-xl bg-ink text-paper dark:bg-gray-800 dark:text-white hover:scale-105 transition-transform"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* The Pull Button (Always Visible) */}
        <button 
          onClick={toggleOpen}
          className={`pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-md shadow-lg border-2 transition-all duration-300 active:scale-90
            ${isOpen 
              ? 'bg-red-500 text-white border-red-600 rotate-180' 
              : 'bg-ink/90 text-white border-white/20 dark:bg-white/90 dark:text-black dark:border-white animate-bounce'}`}
          aria-label={isOpen ? "Close Dock" : "Open Dock"}
        >
          {isOpen ? <ChevronDown size={24} /> : <ChevronUp size={24} />}
        </button>
        
      </div>
  );
};