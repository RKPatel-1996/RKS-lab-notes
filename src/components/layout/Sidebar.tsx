import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarDesktop } from './SidebarDesktop';
import { SidebarMobile } from './SidebarMobile';
import { useReaderPreferences } from '../../hooks/useReaderPreferences';

interface SidebarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  fontSizeIdx: number;
  setFontSizeIdx: (idx: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const location = useLocation();
  const { isLeftRailExpanded, toggleLeftRail, setIsLeftRailExpanded } = useReaderPreferences();
  const [isMobileDockOpen, setIsMobileDockOpen] = useState(false);

  const isArticlePage = location.pathname.startsWith('/articles/');

  // Auto-collapse logic based on route
  useEffect(() => {
    // If we are in an article route, collapse left rail by default for focused reading
    if (isArticlePage) {
      setIsLeftRailExpanded(false);
    } else {
      setIsLeftRailExpanded(true);
    }
    // Always close mobile dock on navigation
    setIsMobileDockOpen(false);
  }, [location.pathname, isArticlePage, setIsLeftRailExpanded]);

  const toggleMobileDock = () => setIsMobileDockOpen(prev => !prev);

  return (
    <>
      <SidebarDesktop 
        {...props}
        isCollapsed={!isLeftRailExpanded} 
        toggleCollapse={toggleLeftRail} 
        isArticlePage={isArticlePage} 
      />
      <SidebarMobile 
        {...props}
        isOpen={isMobileDockOpen} 
        toggleOpen={toggleMobileDock} 
        setIsOpen={setIsMobileDockOpen} 
        isArticlePage={isArticlePage} 
      />
    </>
  );
};