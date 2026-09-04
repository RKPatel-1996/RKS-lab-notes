import React from 'react';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  isVisible: boolean;
  onClick: () => void;
}

export const BackToTop: React.FC<BackToTopProps> = ({ isVisible, onClick }) => {
  return (
    <button
      id="reader-back-to-top"
      type="button"
      onClick={onClick}
      aria-label="Back to top"
      title="Back to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={`reader-utility-top flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] p-0 md:w-auto md:h-9 md:min-w-0 md:min-h-0 md:px-3 md:gap-1.5 border-2 font-mono text-xs font-bold tracking-wider uppercase select-none transition-all duration-200 ease-out focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white
        bg-paper text-ink border-black dark:bg-black dark:text-white dark:border-white shadow-retro dark:shadow-retro-dark hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black active:translate-x-0.5 active:translate-y-0.5
        ${
          isVisible
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none translate-y-2'
        }`}
    >
      <ArrowUp size={16} className="stroke-[2.5]" aria-hidden="true" />
      <span className="hidden md:inline">TOP</span>
    </button>
  );
};
