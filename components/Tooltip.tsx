import React, { ReactNode } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: string;
  source?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, content, source }) => {
  return (
    <span className="group relative inline-block cursor-help font-bold text-accent dark:text-crt-green mx-1 select-none">
      [{children}]
      <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 z-50">
        <div className="bg-paper dark:bg-crt-bg border-2 border-ink dark:border-crt-green shadow-retro dark:shadow-crt p-3 text-xs text-left font-serif dark:font-mono text-ink dark:text-crt-green">
            <p className="font-bold mb-1">{content}</p>
            {source && <p className="italic text-pencil dark:text-crt-green/70">Source: {source}</p>}
        </div>
        {/* Triangle pointer */}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-ink dark:border-t-crt-green"></div>
      </div>
    </span>
  );
};