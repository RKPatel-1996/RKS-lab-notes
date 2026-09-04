import React from 'react';

interface ReaderControlToggleProps {
  isOpen: boolean;
  onToggle: () => void;
  activePreset: string;
  mode?: string;
}

export const ReaderControlToggle: React.FC<ReaderControlToggleProps> = ({
  isOpen,
  onToggle,
  activePreset,
  mode,
}) => {
  const isCustomized = mode === 'custom' || (mode === 'preset' && activePreset !== 'original');

  return (
    <button
      id="reader-prefs-toggle"
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls="reader-bottom-sheet"
      aria-label="Reading preferences"
      title="Reading preferences"
      className={`reader-utility-toggle relative flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px] p-0 md:w-auto md:h-9 md:min-w-0 md:min-h-0 md:px-3 md:gap-2 border-2 transition-all duration-200 select-none text-xs font-mono font-bold tracking-wider uppercase focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white active:translate-x-0.5 active:translate-y-0.5
        ${
          isOpen
            ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
            : 'bg-paper text-ink border-black dark:bg-black dark:text-white dark:border-white shadow-retro dark:shadow-retro-dark hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
        }`}
    >
      <span className="font-serif font-bold text-sm leading-none" aria-hidden="true">
        Aa
      </span>
      <span className="hidden md:inline">READING</span>
      {isCustomized && (
        <span
          className={`w-1.5 h-1.5 rounded-full absolute top-1.5 right-1.5 md:static md:top-auto md:right-auto ${
            isOpen ? 'bg-white dark:bg-black' : 'bg-black dark:bg-white'
          }`}
          title={mode === 'custom' ? 'Custom typography' : `Preset: ${activePreset}`}
        />
      )}
    </button>
  );
};
