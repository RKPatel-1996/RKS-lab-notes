import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutGrid, MonitorPlay, UserSquare, Sun, Moon,
  ChevronLeft, ChevronRight, Printer, Minus, Plus
} from 'lucide-react';
import { FONT_SIZES } from '../../lib/constants';
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
  isDarkMode, toggleTheme, fontSizeIdx, setFontSizeIdx, isCollapsed, toggleCollapse, isArticlePage
}) => {

  const getDesktopNavLinkClass = ({ isActive }: { isActive: boolean }) => {
    return `flex items-center gap-4 px-3 py-3 mx-2 rounded border-2 transition-all overflow-hidden whitespace-nowrap
      ${isActive
        ? 'bg-ink text-paper border-ink dark:bg-white dark:text-black dark:border-white shadow-retro'
        : 'border-transparent hover:border-gray-400 dark:text-white dark:hover:border-white'}
      ${isCollapsed ? 'justify-center' : 'justify-start'}`;
  };

  const getDesktopControlClass = (disabled: boolean = false) => {
    return `flex items-center gap-4 px-3 py-3 mx-2 rounded border-2 transition-all overflow-hidden whitespace-nowrap bg-white dark:bg-black/50
      ${disabled ? 'opacity-50 cursor-not-allowed border-transparent' : 'border-gray-200 dark:border-gray-700 hover:border-ink dark:hover:border-white cursor-pointer'}
      ${isCollapsed ? 'justify-center' : 'justify-start'}`;
  };

  return (
    <nav
        className={`hidden lg:flex border-r-2 border-ink dark:border-white bg-gray-100 dark:bg-black flex-col justify-between transition-all duration-300 ease-in-out z-20 h-full relative
          ${isCollapsed ? 'w-20' : 'w-64'}`}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleCollapse}
          className="absolute -right-3 top-20 w-6 h-6 bg-paper dark:bg-black border-2 border-ink dark:border-white rounded-full flex items-center justify-center text-ink dark:text-white hover:scale-110 transition-transform z-30"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        {/* Logo Area */}
        <div className="p-4 border-b-2 border-ink dark:border-white shrink-0">
          <div className={`border-4 border-ink dark:border-white transition-all duration-300 bg-paper dark:bg-black flex items-center justify-center overflow-hidden
            ${isCollapsed ? 'p-1 w-10 h-10 mx-auto rounded-full' : 'p-2 w-full h-auto rounded-none'}`}>
            <img
              src={rkLogo}
              alt="Lab Logo"
              className={`object-contain dark:invert transition-all duration-300 ${isCollapsed ? 'w-8 h-8' : 'w-8 h-8'}`}
            />
            <h1 className={`font-serif font-bold text-lg uppercase tracking-wider dark:text-white ml-2 transition-opacity duration-200
              ${isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100 block'}`}>
              Lab_Note
            </h1>
          </div>
        </div>

        {/* Nav Items */}
        <div className="flex-1 py-4 flex flex-col gap-2 overflow-y-auto overflow-x-hidden">

          {/* Article Specific Controls */}
          {isArticlePage && (
            <div className="mb-4 pb-4 border-b border-gray-300 dark:border-gray-700 mx-2 space-y-2">
              <div className={`font-mono text-[10px] uppercase text-pencil dark:text-gray-500 mb-2 transition-opacity ${isCollapsed ? 'text-center' : 'px-3'}`}>
                {isCollapsed ? 'Tool' : 'Reader Tools'}
              </div>

              <button
                onClick={() => setFontSizeIdx(Math.min(FONT_SIZES.length - 1, fontSizeIdx + 1))}
                disabled={fontSizeIdx === FONT_SIZES.length - 1}
                className={getDesktopControlClass(fontSizeIdx === FONT_SIZES.length - 1)}
                title="Increase Font"
              >
                <Plus size={20} className="shrink-0 dark:text-white" />
                <span className={`block font-mono text-xs font-bold dark:text-white transition-opacity duration-200 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                  ZOOM_IN
                </span>
              </button>

              <button
                onClick={() => setFontSizeIdx(Math.max(0, fontSizeIdx - 1))}
                disabled={fontSizeIdx === 0}
                className={getDesktopControlClass(fontSizeIdx === 0)}
                title="Decrease Font"
              >
                <Minus size={20} className="shrink-0 dark:text-white" />
                <span className={`block font-mono text-xs font-bold dark:text-white transition-opacity duration-200 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                  ZOOM_OUT
                </span>
              </button>

              <button className={getDesktopControlClass()} onClick={() => window.print()} title="Print">
                <Printer size={20} className="shrink-0 dark:text-white" />
                <span className={`block font-mono text-xs font-bold dark:text-white transition-opacity duration-200 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
                  PRINT_JOB
                </span>
              </button>
            </div>
          )}

          <NavLink to="/" className={getDesktopNavLinkClass} title="Library">
            <LayoutGrid size={24} className="shrink-0" />
            <span className={`block font-mono text-sm font-bold transition-opacity duration-200 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
              LIBRARY
            </span>
          </NavLink>

          <div className="h-px bg-gray-300 dark:bg-gray-800 mx-4 my-2 shrink-0"></div>

          <NavLink to="/media" className={getDesktopNavLinkClass} title="Media Logs">
            <MonitorPlay size={24} className="shrink-0" />
            <span className={`block font-mono text-sm font-bold transition-opacity duration-200 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
              MEDIA_LOGS
            </span>
          </NavLink>

          <NavLink to="/about" className={getDesktopNavLinkClass} title="Personnel File">
            <UserSquare size={24} className="shrink-0" />
            <span className={`block font-mono text-sm font-bold transition-opacity duration-200 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100'}`}>
              PERSONNEL
            </span>
          </NavLink>
        </div>

        {/* Theme Toggle & Footer */}
        <div className="p-2 border-t-2 border-ink dark:border-white bg-paper dark:bg-black shrink-0">
          <button
            onClick={toggleTheme}
            className={`w-full flex items-center p-2 font-mono text-xs border border-pencil dark:border-white hover:bg-gray-200 dark:hover:bg-gray-800 dark:text-white transition-colors
              ${isCollapsed ? 'justify-center' : 'justify-start gap-4'}`}
            title="Toggle Theme"
          >
            {isDarkMode ? <Sun size={20} className="shrink-0" /> : <Moon size={20} className="shrink-0" />}
            <span className={`block whitespace-nowrap transition-opacity duration-200 ${isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100'}`}>
              {isDarkMode ? 'DAY_SHIFT' : 'DARK_MODE'}
            </span>
          </button>

          <div className={`mt-4 font-mono text-[10px] text-center text-pencil dark:text-gray-500 transition-opacity duration-200 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100 block'}`}>
            v.3.1.0-dock<br />ReactOS_Shell
          </div>
        </div>
      </nav>
  );
};