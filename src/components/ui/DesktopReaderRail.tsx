import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Eye,
  RotateCcw,
  X,
  Bookmark,
  Printer,
} from 'lucide-react';
import { useReaderPreferences } from '../../hooks/useReaderPreferences';
import { CustomProfilesManager } from './CustomProfilesManager';
import {
  ReaderFontFamily,
  ReaderReadingWidth,
  ReaderFontWeight,
  ReaderParagraphSpacing,
  FONT_FAMILY_SHORT_LABELS,
  WIDTH_LABELS,
  FONT_WEIGHT_LABELS,
  PARAGRAPH_SPACING_LABELS,
  isNonDefaultTypography,
} from '../../lib/readerPreferences';

export const DesktopReaderRail: React.FC = () => {
  const {
    preferences,
    effectiveTypography,
    mode,
    activePreset,
    applyDeviceMode,
    applyPreset,
    updateField,
    applyAutoDefault,
    resetToOriginal,
    increaseFontSize,
    decreaseFontSize,
    canIncreaseFontSize,
    canDecreaseFontSize,
    isFocusMode,
    toggleFocusMode,
    isDesktopRailExpanded,
    toggleDesktopRail,
    setIsDesktopRailExpanded,
    savedProfiles,
    activeProfileId,
    isModifiedFromActiveProfile,
    isMobile,
  } = useReaderPreferences();

  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [activeRailTab, setActiveRailTab] = useState<'controls' | 'profiles'>('controls');
  const railRef = useRef<HTMLDivElement>(null);

  // Close expanded rail on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDesktopRailExpanded) {
        e.preventDefault();
        setIsDesktopRailExpanded(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDesktopRailExpanded, setIsDesktopRailExpanded]);

  return (
    <aside
      ref={railRef}
      id="desktop-reader-rail"
      role="region"
      aria-label="Reader Typography Rail"
      onClick={() => {
        if (!isDesktopRailExpanded) {
          setIsDesktopRailExpanded(true);
        }
      }}
      className={`hidden md:flex border-l-2 bg-paper dark:bg-black flex-col justify-between transition-all duration-300 ease-in-out z-20 h-full relative shrink-0 select-none ${
        isDesktopRailExpanded ? 'w-[340px] cursor-default' : 'w-16 cursor-pointer'
      } ${
        isFocusMode && !isDesktopRailExpanded
          ? 'opacity-40 hover:opacity-100 focus-within:opacity-100 border-gray-300 dark:border-gray-800 hover:border-black dark:hover:border-white'
          : 'opacity-100 border-black dark:border-white'
      }`}
    >
      {/* Symmetrical Collapse / Expand Tab Button on Left Border */}
      <button
        type="button"
        data-rail="right-toggle"
        onClick={(e) => {
          e.stopPropagation();
          toggleDesktopRail();
        }}
        aria-label={isDesktopRailExpanded ? 'Collapse reader rail' : 'Expand reader rail'}
        title={isDesktopRailExpanded ? 'Collapse reader rail' : 'Expand reader rail'}
        className="absolute -left-3 top-20 z-30 bg-white dark:bg-black border-2 border-black dark:border-white rounded-full p-0.5 text-ink dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white cursor-pointer"
      >
        {isDesktopRailExpanded ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
      </button>

      {/* ========================================================================= */}
      {/* COLLAPSED STATE (w-16 = 64px, perfectly symmetrical with left rail) */}
      {/* ========================================================================= */}
      {!isDesktopRailExpanded && (
        <div className="flex flex-col h-full justify-between items-center py-4">
          {/* Top: Reader Preferences Glyph / Trigger */}
          <div className="flex flex-col items-center w-full gap-2">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleDesktopRail();
              }}
              aria-label="Expand Reader Preferences"
              title="Reader Preferences (Aa)"
              className="w-10 h-10 flex items-center justify-center border-2 border-black dark:border-white bg-paper dark:bg-black text-ink dark:text-white font-serif font-bold text-base hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white active:scale-95"
            >
              Aa
            </button>
            <div className="font-mono text-[9px] uppercase tracking-wider text-pencil dark:text-gray-400 font-bold">
              READ
            </div>
          </div>

          {/* Middle: Quick Font Size & Focus Controls */}
          <div
            className="flex flex-col items-center w-full gap-2 px-1"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Font Size A+ */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                increaseFontSize();
              }}
              disabled={!canIncreaseFontSize}
              aria-label="Increase reader font size (A+)"
              title="Increase font size (A+)"
              className="w-10 h-10 flex items-center justify-center rounded border-2 border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white disabled:opacity-25 disabled:cursor-not-allowed bg-white dark:bg-black text-ink dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white active:scale-95"
            >
              <Plus size={18} />
            </button>

            {/* Current Size Readout */}
            <div
              className="font-mono text-[10px] font-bold text-center text-ink dark:text-white px-1 py-0.5 border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 w-11"
              title={`Current font size: ${effectiveTypography.fontSize}px`}
            >
              {effectiveTypography.fontSize}px
            </div>

            {/* Font Size A- */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                decreaseFontSize();
              }}
              disabled={!canDecreaseFontSize}
              aria-label="Decrease reader font size (A−)"
              title="Decrease font size (A−)"
              className="w-10 h-10 flex items-center justify-center rounded border-2 border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white disabled:opacity-25 disabled:cursor-not-allowed bg-white dark:bg-black text-ink dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white active:scale-95"
            >
              <Minus size={18} />
            </button>

            {/* Focus View Mode Toggle */}
            <div className="w-8 border-t border-gray-300 dark:border-gray-700 my-1" />
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleFocusMode();
              }}
              aria-label={isFocusMode ? 'Exit Focus Reading View' : 'Enter Focus Reading View'}
              title={isFocusMode ? 'Exit Focus View' : 'Focus Reading View'}
              className={`w-10 h-10 flex items-center justify-center rounded border-2 transition-all focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white active:scale-95 ${
                isFocusMode
                  ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                  : 'border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white bg-white dark:bg-black text-ink dark:text-white'
              }`}
            >
              <Eye size={18} />
            </button>
            <div className="font-mono text-[8px] uppercase tracking-wider text-pencil dark:text-gray-400 font-bold">
              {isFocusMode ? 'FOCUS' : 'VIEW'}
            </div>
          </div>

          {/* Bottom: Subtle Expand Prompt */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              toggleDesktopRail();
            }}
            aria-label="Open Reader Settings"
            title="Open Reader Settings"
            className="w-10 h-10 flex items-center justify-center text-pencil hover:text-ink dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* EXPANDED STATE (w-[340px] - Full typography instrument panel) */}
      {/* ========================================================================= */}
      {isDesktopRailExpanded && (
        <div className="flex flex-col h-full w-full">
          {/* Rail Header */}
          <div className="shrink-0 flex items-center justify-between p-3.5 border-b-2 border-black dark:border-white bg-paper dark:bg-black">
            <div className="flex items-center gap-2">
              <span className="font-serif font-bold text-base leading-none">Aa</span>
              <span className="font-mono font-bold tracking-wider uppercase text-[11px] text-ink dark:text-white">
                READER_WORKSPACE
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsDesktopRailExpanded(false)}
              aria-label="Collapse reader rail"
              className="p-1 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
            >
              <X size={14} />
            </button>
          </div>

          {/* Section Switcher Tabs: TYPOGRAPHY vs CUSTOM PROFILES */}
          <div
            className="shrink-0 flex border-b-2 border-black dark:border-white bg-gray-100 dark:bg-gray-950 font-mono text-[10px] font-bold"
            role="tablist"
            aria-label="Reader Rail Sections"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeRailTab === 'controls'}
              onClick={() => setActiveRailTab('controls')}
              className={`flex-1 py-2 text-center uppercase tracking-wider transition-colors ${
                activeRailTab === 'controls'
                  ? 'bg-paper dark:bg-black text-ink dark:text-white border-b-2 border-black dark:border-white font-bold'
                  : 'text-pencil dark:text-gray-400 hover:text-ink dark:hover:text-white'
              }`}
            >
              TYPOGRAPHY
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeRailTab === 'profiles'}
              onClick={() => setActiveRailTab('profiles')}
              className={`flex-1 py-2 text-center uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 ${
                activeRailTab === 'profiles'
                  ? 'bg-paper dark:bg-black text-ink dark:text-white border-b-2 border-black dark:border-white font-bold'
                  : 'text-pencil dark:text-gray-400 hover:text-ink dark:hover:text-white'
              }`}
            >
              <Bookmark size={12} />
              <span>SAVED ({savedProfiles.length})</span>
            </button>
          </div>

          {/* Custom Profiles Tab View */}
          {activeRailTab === 'profiles' ? (
            <div className="flex-1 overflow-y-auto p-3.5">
              <CustomProfilesManager />
            </div>
          ) : (
            /* Scrollable Rail Body: Typography Instruments */
            <div className="flex-1 overflow-y-auto p-3.5 space-y-4 font-mono text-xs text-ink dark:text-white">
              {/* Quick Save Banner if settings are modified or custom */}
              {((activeProfileId && isModifiedFromActiveProfile) || isNonDefaultTypography(preferences, isMobile)) && (
                <div className="p-2 border-2 border-black dark:border-white bg-gray-50 dark:bg-gray-900 flex items-center justify-between shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]">
                  <div className="min-w-0 pr-2">
                    <div className="text-[9px] font-bold uppercase tracking-wider text-pencil dark:text-gray-400">
                      CUSTOM TUNING ACTIVE
                    </div>
                    <div className="text-[10px] font-bold truncate">
                      {activeProfileId ? 'Changes not saved to profile' : 'Unsaved custom configuration'}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveRailTab('profiles')}
                    className="py-1 px-2 border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-bold text-[9px] uppercase hover:opacity-85 active:scale-95 shrink-0 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:shadow-[1px_1px_0px_0px_#ffffff]"
                  >
                    SAVE PROFILE
                  </button>
                </div>
              )}

              {/* 1. DEVICE_DEFAULT */}
              <div>
                <div className="text-[10px] uppercase text-pencil dark:text-gray-400 font-bold mb-2 tracking-wider flex items-center justify-between">
                  <span>DEVICE_DEFAULT</span>
                  {mode === 'auto' && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 bg-black text-white dark:bg-white dark:text-black">
                      AUTO ACTIVE
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-1.5" role="radiogroup" aria-label="Device Profiles">
                  <button
                    type="button"
                    role="radio"
                    aria-checked={mode === 'auto'}
                    onClick={() => applyDeviceMode('auto')}
                    className={`p-2 border border-black dark:border-white text-center transition-all ${
                      mode === 'auto'
                        ? 'bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                        : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900 text-ink dark:text-white'
                    }`}
                  >
                    <div className="font-bold text-[11px] uppercase">AUTO</div>
                    <div className="text-[8px] opacity-75">Responsive</div>
                  </button>

                  <button
                    type="button"
                    role="radio"
                    aria-checked={mode === 'desktop'}
                    onClick={() => applyDeviceMode('desktop')}
                    className={`p-2 border border-black dark:border-white text-center transition-all ${
                      mode === 'desktop'
                        ? 'bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                        : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900 text-ink dark:text-white'
                    }`}
                  >
                    <div className="font-bold text-[11px] uppercase">DESKTOP</div>
                    <div className="text-[8px] opacity-75">18px Lora</div>
                  </button>

                  <button
                    type="button"
                    role="radio"
                    aria-checked={mode === 'mobile'}
                    onClick={() => applyDeviceMode('mobile')}
                    className={`p-2 border border-black dark:border-white text-center transition-all ${
                      mode === 'mobile'
                        ? 'bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                        : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900 text-ink dark:text-white'
                    }`}
                  >
                    <div className="font-bold text-[11px] uppercase">MOBILE</div>
                    <div className="text-[8px] opacity-75">17px Lexend</div>
                  </button>
                </div>
              </div>

              {/* 2. PRESET_PROFILES */}
              <div>
                <div className="text-[10px] uppercase text-pencil dark:text-gray-400 font-bold mb-2 tracking-wider flex items-center justify-between">
                  <span>PRESET_PROFILES</span>
                  {mode === 'preset' && (
                    <span className="text-[9px] font-bold px-1.5 py-0.5 bg-black text-white dark:bg-white dark:text-black uppercase">
                      {activePreset}
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-1.5" role="radiogroup" aria-label="Presets">
                  {(['original', 'comfort', 'focus', 'accessible'] as const).map((key) => {
                    const isSelected = mode === 'preset' && activePreset === key;
                    const descriptions = {
                      original: '18px Serif canonical',
                      comfort: '19px Relaxed Georgia',
                      focus: '17px Lexend Compact',
                      accessible: '21px High-legibility',
                    };

                    return (
                      <button
                        key={key}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => applyPreset(key)}
                        className={`p-2 border border-black dark:border-white text-left transition-all ${
                          isSelected
                            ? 'bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                            : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900 text-ink dark:text-white'
                        }`}
                      >
                        <div className="font-bold text-[11px] uppercase">{key}</div>
                        <div className="text-[8px] opacity-75 truncate">{descriptions[key]}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. FONT FAMILY */}
              <div>
                <div className="text-[10px] uppercase text-pencil dark:text-gray-400 font-bold mb-2 tracking-wider">
                  FONT_FAMILY
                </div>
                <div className="grid grid-cols-1 gap-1.5" role="radiogroup" aria-label="Font Family">
                  {(Object.keys(FONT_FAMILY_SHORT_LABELS) as ReaderFontFamily[]).map((fKey) => {
                    const isSelected = effectiveTypography.fontFamily === fKey;
                    return (
                      <button
                        key={fKey}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => updateField('fontFamily', fKey)}
                        className={`p-2 border border-black dark:border-white text-left transition-colors flex items-center justify-between text-[11px] ${
                          isSelected
                            ? 'bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                            : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900 text-ink dark:text-white'
                        }`}
                      >
                        <span>{FONT_FAMILY_SHORT_LABELS[fKey]}</span>
                        {isSelected && <span className="text-[9px] font-bold">ACTIVE</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. FONT SIZE SLIDER & STEPPERS */}
              <div>
                <div className="flex justify-between items-center text-[10px] uppercase text-pencil dark:text-gray-400 font-bold mb-1.5 tracking-wider">
                  <span>FONT_SIZE</span>
                  <span className="text-ink dark:text-white font-mono font-bold text-xs">
                    {effectiveTypography.fontSize}px
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    disabled={!canDecreaseFontSize}
                    onClick={decreaseFontSize}
                    aria-label="Decrease font size (A−)"
                    className="w-8 h-8 flex items-center justify-center border border-black dark:border-white bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900 disabled:opacity-25 disabled:cursor-not-allowed font-bold"
                  >
                    <Minus size={14} />
                  </button>
                  <input
                    type="range"
                    min="15"
                    max="24"
                    step="1"
                    value={effectiveTypography.fontSize}
                    onChange={(e) => updateField('fontSize', parseInt(e.target.value, 10))}
                    aria-label="Font Size"
                    className="flex-1 accent-black dark:accent-white cursor-pointer h-2"
                  />
                  <button
                    type="button"
                    disabled={!canIncreaseFontSize}
                    onClick={increaseFontSize}
                    aria-label="Increase font size (A+)"
                    className="w-8 h-8 flex items-center justify-center border border-black dark:border-white bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900 disabled:opacity-25 disabled:cursor-not-allowed font-bold"
                  >
                    <Plus size={14} />
                  </button>
                </div>
                <div className="flex justify-between text-[8px] text-pencil dark:text-gray-400 mt-1">
                  <span>15px (Min)</span>
                  <span>18px (Default)</span>
                  <span>24px (Max)</span>
                </div>
              </div>

              {/* 5. READING WIDTH */}
              <div>
                <div className="text-[10px] uppercase text-pencil dark:text-gray-400 font-bold mb-2 tracking-wider">
                  READING_WIDTH
                </div>
                <div className="grid grid-cols-3 gap-1.5" role="radiogroup" aria-label="Reading Width">
                  {(['narrow', 'standard', 'wide'] as ReaderReadingWidth[]).map((w) => {
                    const isSelected = effectiveTypography.width === w;
                    return (
                      <button
                        key={w}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => updateField('width', w)}
                        className={`p-1.5 border border-black dark:border-white text-center text-[10px] transition-colors ${
                          isSelected
                            ? 'bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                            : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900 text-ink dark:text-white'
                        }`}
                      >
                        {WIDTH_LABELS[w]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 6. ADVANCED TYPOGRAPHY COLLAPSIBLE */}
              <div className="pt-2 border-t border-gray-300 dark:border-gray-800">
                <button
                  type="button"
                  onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                  aria-expanded={isAdvancedOpen}
                  className="w-full flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-pencil dark:text-gray-400 hover:text-ink dark:hover:text-white py-1"
                >
                  <span>ADVANCED_TYPOGRAPHY</span>
                  <span>{isAdvancedOpen ? '[-]' : '[+]'}</span>
                </button>

                {isAdvancedOpen && (
                  <div className="mt-3 space-y-3.5 pl-1 border-l-2 border-black dark:border-white">
                    {/* LINE HEIGHT */}
                    <div>
                      <div className="flex justify-between text-[10px] uppercase text-pencil dark:text-gray-400 font-bold mb-1">
                        <span>LINE_HEIGHT</span>
                        <span className="text-ink dark:text-white font-mono">
                          {effectiveTypography.lineHeight.toFixed(2)}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1.40"
                        max="2.00"
                        step="0.05"
                        value={effectiveTypography.lineHeight}
                        onChange={(e) => updateField('lineHeight', parseFloat(e.target.value))}
                        aria-label="Line Height"
                        className="w-full accent-black dark:accent-white cursor-pointer"
                      />
                      <div className="flex justify-between text-[8px] text-pencil dark:text-gray-400">
                        <span>1.40</span>
                        <span>1.75 (Std)</span>
                        <span>2.00</span>
                      </div>
                    </div>

                    {/* LETTER SPACING */}
                    <div>
                      <div className="flex justify-between text-[10px] uppercase text-pencil dark:text-gray-400 font-bold mb-1">
                        <span>LETTER_SPACING</span>
                        <span className="text-ink dark:text-white font-mono">
                          {effectiveTypography.letterSpacing > 0
                            ? `+${effectiveTypography.letterSpacing.toFixed(3)}`
                            : effectiveTypography.letterSpacing.toFixed(3)}em
                        </span>
                      </div>
                      <input
                        type="range"
                        min="-0.01"
                        max="0.08"
                        step="0.005"
                        value={effectiveTypography.letterSpacing}
                        onChange={(e) => updateField('letterSpacing', parseFloat(e.target.value))}
                        aria-label="Letter Spacing"
                        className="w-full accent-black dark:accent-white cursor-pointer"
                      />
                      <div className="flex justify-between text-[8px] text-pencil dark:text-gray-400">
                        <span>-0.01em</span>
                        <span>0.00em</span>
                        <span>+0.08em</span>
                      </div>
                    </div>

                    {/* WORD SPACING */}
                    <div>
                      <div className="flex justify-between text-[10px] uppercase text-pencil dark:text-gray-400 font-bold mb-1">
                        <span>WORD_SPACING</span>
                        <span className="text-ink dark:text-white font-mono">
                          {effectiveTypography.wordSpacing > 0
                            ? `+${effectiveTypography.wordSpacing.toFixed(2)}`
                            : effectiveTypography.wordSpacing.toFixed(2)}em
                        </span>
                      </div>
                      <input
                        type="range"
                        min="0.00"
                        max="0.20"
                        step="0.02"
                        value={effectiveTypography.wordSpacing}
                        onChange={(e) => updateField('wordSpacing', parseFloat(e.target.value))}
                        aria-label="Word Spacing"
                        className="w-full accent-black dark:accent-white cursor-pointer"
                      />
                      <div className="flex justify-between text-[8px] text-pencil dark:text-gray-400">
                        <span>0.00em</span>
                        <span>+0.02em</span>
                        <span>+0.20em</span>
                      </div>
                    </div>

                    {/* FONT WEIGHT */}
                    <div>
                      <div className="text-[10px] uppercase text-pencil dark:text-gray-400 font-bold mb-1.5">
                        FONT_WEIGHT
                      </div>
                      <div className="grid grid-cols-3 gap-1.5" role="radiogroup" aria-label="Font Weight">
                        {(['regular', 'medium', 'semibold'] as ReaderFontWeight[]).map((w) => {
                          const isSelected = effectiveTypography.fontWeight === w;
                          return (
                            <button
                              key={w}
                              type="button"
                              role="radio"
                              aria-checked={isSelected}
                              onClick={() => updateField('fontWeight', w)}
                              className={`py-1.5 border border-black dark:border-white text-center text-[10px] transition-colors ${
                                isSelected
                                  ? 'bg-black text-white dark:bg-white dark:text-black font-bold'
                                  : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900 text-ink dark:text-white'
                              }`}
                            >
                              {FONT_WEIGHT_LABELS[w]}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* PARAGRAPH SPACING */}
                    <div>
                      <div className="text-[10px] uppercase text-pencil dark:text-gray-400 font-bold mb-1.5">
                        PARAGRAPH_SPACING
                      </div>
                      <div className="grid grid-cols-3 gap-1.5" role="radiogroup" aria-label="Paragraph Spacing">
                        {(['compact', 'standard', 'relaxed'] as ReaderParagraphSpacing[]).map((ps) => {
                          const isSelected = effectiveTypography.paragraphSpacing === ps;
                          return (
                            <button
                              key={ps}
                              type="button"
                              role="radio"
                              aria-checked={isSelected}
                              onClick={() => updateField('paragraphSpacing', ps)}
                              className={`py-1.5 border border-black dark:border-white text-center text-[10px] transition-colors ${
                                isSelected
                                  ? 'bg-black text-white dark:bg-white dark:text-black font-bold'
                                  : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900 text-ink dark:text-white'
                              }`}
                            >
                              {PARAGRAPH_SPACING_LABELS[ps]}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Rail Footer (Fixed bottom) */}
          <div className="shrink-0 p-3 border-t-2 border-black dark:border-white bg-paper dark:bg-black flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={applyAutoDefault}
                className={`px-2 py-1 border border-black dark:border-white text-[9px] font-bold transition-colors flex items-center gap-1 ${
                  mode === 'auto'
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-white dark:bg-black text-ink dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
                }`}
                title="Auto Desktop/Mobile profile"
              >
                <RotateCcw size={10} />
                <span>AUTO</span>
              </button>

              <button
                type="button"
                onClick={resetToOriginal}
                className="px-2 py-1 border border-black dark:border-white bg-white dark:bg-black text-ink dark:text-white text-[9px] font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center gap-1"
                title="Restore canonical original"
              >
                <RotateCcw size={10} />
                <span>ORIGINAL</span>
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="px-2 py-1 border border-black dark:border-white bg-white dark:bg-black text-ink dark:text-white text-[9px] font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center gap-1"
                title="Print canonical A4 edition"
                aria-label="Print canonical A4 edition"
              >
                <Printer size={10} />
                <span>PRINT</span>
              </button>
            </div>
            <span className="text-[8px] text-pencil dark:text-gray-400">
              ESC TO CLOSE
            </span>
          </div>
        </div>
      )}
    </aside>
  );
};
