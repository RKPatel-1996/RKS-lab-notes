import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SidebarDesktop } from './SidebarDesktop';
import { SidebarMobile } from './SidebarMobile';

interface SidebarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  fontSizeIdx: number;
  setFontSizeIdx: (idx: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
  const location = useLocation();
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
  const [isMobileDockOpen, setIsMobileDockOpen] = useState(false);

  const isArticlePage = location.pathname.startsWith('/articles/');

  // Auto-collapse logic based on route
  useEffect(() => {
    // If we are in an article route, collapse by default for better reading experience
    if (isArticlePage) {
      setIsDesktopCollapsed(true);
    } else {
      setIsDesktopCollapsed(false);
    }
    // Always close mobile dock on navigation
    setIsMobileDockOpen(false);
  }, [location.pathname, isArticlePage]);

  const toggleDesktopCollapse = () => setIsDesktopCollapsed(prev => !prev);
  const toggleMobileDock = () => setIsMobileDockOpen(prev => !prev);

  return (
    <>
      <SidebarDesktop
        {...props}
        isCollapsed={isDesktopCollapsed}
        toggleCollapse={toggleDesktopCollapse}
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