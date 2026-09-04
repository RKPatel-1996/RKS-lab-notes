import React, { useState, useEffect, useRef } from 'react';
import { X, RotateCcw, Plus, Minus, Printer } from 'lucide-react';
import { useReaderPreferences } from '../../hooks/useReaderPreferences';
import { CustomProfilesManager } from './CustomProfilesManager';
import {
  ReaderFontFamily,
  ReaderFontWeight,
  ReaderParagraphSpacing,
  FONT_FAMILY_SHORT_LABELS,
  FONT_WEIGHT_LABELS,
  PARAGRAPH_SPACING_LABELS,
} from '../../lib/readerPreferences';

interface ReaderBottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

type MobileTab = 'profiles' | 'font' | 'spacing' | 'custom';

export const ReaderBottomSheet: React.FC<ReaderBottomSheetProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<MobileTab>('profiles');
  const sheetRef = useRef<HTMLDivElement>(null);

  const {
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
    savedProfiles,
  } = useReaderPreferences();

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="reader-bottom-sheet-root fixed inset-0 z-50 md:hidden flex flex-col justify-end">
      {/* Semi-transparent backdrop without blur to ensure live preview readability */}
      <div
        className="fixed inset-0 bg-black/15 dark:bg-black/35 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Bottom Sheet Container: 38-44% viewport height max, allowing article to remain visible and readable above */}
      <div
        id="reader-bottom-sheet"
        ref={sheetRef}
        role="dialog"
        aria-modal="true"
        aria-label="Reader Typography Preferences"
        className="relative z-10 w-full max-h-[44vh] flex flex-col bg-paper dark:bg-black border-t-2 border-black dark:border-white shadow-[0px_-4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[0px_-4px_0px_0px_#ffffff] text-ink dark:text-white font-mono select-none"
        style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom, 0.75rem))' }}
      >
        {/* Header Bar: Brand + Tab Navigation + Close Button */}
        <div className="shrink-0 flex items-center justify-between px-3 py-2 border-b-2 border-black dark:border-white bg-paper dark:bg-black">
          <div className="flex items-center gap-1.5 font-bold">
            <span className="font-serif text-sm leading-none">Aa</span>
            <span className="text-[10px] tracking-wider uppercase">READER</span>
          </div>

          {/* Compact Tab Switcher */}
          <div
            className="flex items-center gap-1"
            role="tablist"
            aria-label="Reader settings sections"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'profiles'}
              onClick={() => setActiveTab('profiles')}
              className={`px-2 py-1 border border-black dark:border-white text-[9px] font-bold uppercase transition-colors ${
                activeTab === 'profiles'
                  ? 'bg-black text-white dark:bg-white dark:text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:shadow-[1px_1px_0px_0px_#ffffff]'
                  : 'bg-white dark:bg-black text-ink dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
              }`}
            >
              PROFILES
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'font'}
              onClick={() => setActiveTab('font')}
              className={`px-2 py-1 border border-black dark:border-white text-[9px] font-bold uppercase transition-colors ${
                activeTab === 'font'
                  ? 'bg-black text-white dark:bg-white dark:text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:shadow-[1px_1px_0px_0px_#ffffff]'
                  : 'bg-white dark:bg-black text-ink dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
              }`}
            >
              FONT
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'spacing'}
              onClick={() => setActiveTab('spacing')}
              className={`px-2 py-1 border border-black dark:border-white text-[9px] font-bold uppercase transition-colors ${
                activeTab === 'spacing'
                  ? 'bg-black text-white dark:bg-white dark:text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:shadow-[1px_1px_0px_0px_#ffffff]'
                  : 'bg-white dark:bg-black text-ink dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
              }`}
            >
              SPACING
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'custom'}
              onClick={() => setActiveTab('custom')}
              className={`px-2 py-1 border border-black dark:border-white text-[9px] font-bold uppercase transition-colors flex items-center gap-1 ${
                activeTab === 'custom'
                  ? 'bg-black text-white dark:bg-white dark:text-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:shadow-[1px_1px_0px_0px_#ffffff]'
                  : 'bg-white dark:bg-black text-ink dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900'
              }`}
            >
              <span>SAVED</span>
              {savedProfiles.length > 0 && (
                <span className="text-[8px] opacity-80">({savedProfiles.length})</span>
              )}
            </button>
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close reader preferences"
            className="p-1 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
          >
            <X size={14} />
          </button>
        </div>

        {/* Tab Body: Scrollable internal content */}
        <div className="flex-1 overflow-y-auto px-3.5 py-3 text-xs overscroll-contain">
          {/* ========================================================================= */}
          {/* TAB 1: PROFILES */}
          {/* ========================================================================= */}
          {activeTab === 'profiles' && (
            <div className="space-y-3">
              {/* Device Mode */}
              <div>
                <div className="flex items-center justify-between text-[9px] uppercase text-pencil dark:text-gray-400 font-bold mb-1.5">
                  <span>DEVICE_DEFAULT</span>
                  {mode === 'auto' && (
                    <span className="text-[8px] font-bold px-1 bg-gray-200 dark:bg-gray-800 text-ink dark:text-white">
                      AUTO: MOBILE (17PX LEXEND)
                    </span>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-1.5" role="radiogroup" aria-label="Device Profiles">
                  <button
                    type="button"
                    role="radio"
                    aria-checked={mode === 'auto'}
                    onClick={() => applyDeviceMode('auto')}
                    className={`p-1.5 border border-black dark:border-white text-center transition-all ${
                      mode === 'auto'
                        ? 'bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                        : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900'
                    }`}
                  >
                    <div className="font-bold text-[10px] uppercase">AUTO</div>
                    <div className="text-[8px] opacity-75">Responsive</div>
                  </button>

                  <button
                    type="button"
                    role="radio"
                    aria-checked={mode === 'desktop'}
                    onClick={() => applyDeviceMode('desktop')}
                    className={`p-1.5 border border-black dark:border-white text-center transition-all ${
                      mode === 'desktop'
                        ? 'bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                        : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900'
                    }`}
                  >
                    <div className="font-bold text-[10px] uppercase">DESKTOP</div>
                    <div className="text-[8px] opacity-75">18px Lora</div>
                  </button>

                  <button
                    type="button"
                    role="radio"
                    aria-checked={mode === 'mobile'}
                    onClick={() => applyDeviceMode('mobile')}
                    className={`p-1.5 border border-black dark:border-white text-center transition-all ${
                      mode === 'mobile'
                        ? 'bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                        : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900'
                    }`}
                  >
                    <div className="font-bold text-[10px] uppercase">MOBILE</div>
                    <div className="text-[8px] opacity-75">17px Lexend</div>
                  </button>
                </div>
              </div>

              {/* Preset Profiles */}
              <div>
                <div className="text-[9px] uppercase text-pencil dark:text-gray-400 font-bold mb-1.5">
                  PRESET_PROFILES
                </div>
                <div className="grid grid-cols-4 gap-1" role="radiogroup" aria-label="Presets">
                  {(['original', 'comfort', 'focus', 'accessible'] as const).map((key) => {
                    const isSelected = mode === 'preset' && activePreset === key;
                    return (
                      <button
                        key={key}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => applyPreset(key)}
                        className={`p-1.5 border border-black dark:border-white text-center transition-all ${
                          isSelected
                            ? 'bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                            : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900'
                        }`}
                      >
                        <div className="font-bold text-[9px] uppercase truncate">{key}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quick Font Size Controls */}
              <div className="flex items-center justify-between pt-1 border-t border-gray-200 dark:border-gray-800">
                <span className="text-[9px] uppercase text-pencil dark:text-gray-400 font-bold">
                  SIZE: {effectiveTypography.fontSize}PX
                </span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    disabled={!canDecreaseFontSize}
                    onClick={decreaseFontSize}
                    aria-label="Decrease font size (A−)"
                    className="w-8 h-7 flex items-center justify-center border border-black dark:border-white bg-white dark:bg-black font-bold text-xs disabled:opacity-30"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-mono font-bold text-xs px-2 py-0.5 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900 min-w-[48px] text-center">
                    {effectiveTypography.fontSize}px
                  </span>
                  <button
                    type="button"
                    disabled={!canIncreaseFontSize}
                    onClick={increaseFontSize}
                    aria-label="Increase font size (A+)"
                    className="w-8 h-7 flex items-center justify-center border border-black dark:border-white bg-white dark:bg-black font-bold text-xs disabled:opacity-30"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 2: FONT */}
          {/* ========================================================================= */}
          {activeTab === 'font' && (
            <div className="space-y-3">
              {/* Font Family Selection */}
              <div>
                <div className="text-[9px] uppercase text-pencil dark:text-gray-400 font-bold mb-1.5">
                  FONT_FAMILY
                </div>
                <div className="grid grid-cols-2 gap-1.5" role="radiogroup" aria-label="Font Family">
                  {(Object.keys(FONT_FAMILY_SHORT_LABELS) as ReaderFontFamily[]).map((fKey, idx, arr) => {
                    const isSelected = effectiveTypography.fontFamily === fKey;
                    const isLastOdd = arr.length % 2 === 1 && idx === arr.length - 1;
                    return (
                      <button
                        key={fKey}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => updateField('fontFamily', fKey)}
                        className={`p-2 border border-black dark:border-white text-left transition-colors text-[10px] ${
                          isLastOdd ? 'col-span-2' : ''
                        } ${
                          isSelected
                            ? 'bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                            : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900'
                        }`}
                      >
                        {FONT_FAMILY_SHORT_LABELS[fKey]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Font Weight Selection */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
                <div className="text-[9px] uppercase text-pencil dark:text-gray-400 font-bold mb-1.5">
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
                            ? 'bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                            : 'bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900'
                        }`}
                      >
                        {FONT_WEIGHT_LABELS[w]}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 3: SPACING */}
          {/* ========================================================================= */}
          {activeTab === 'spacing' && (
            <div className="space-y-3">
              {/* Line Height Slider */}
              <div>
                <div className="flex justify-between text-[9px] uppercase text-pencil dark:text-gray-400 font-bold mb-1">
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
                  className="w-full accent-black dark:accent-white cursor-pointer h-2"
                />
              </div>

              {/* Letter Spacing Slider */}
              <div>
                <div className="flex justify-between text-[9px] uppercase text-pencil dark:text-gray-400 font-bold mb-1">
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
                  className="w-full accent-black dark:accent-white cursor-pointer h-2"
                />
              </div>

              {/* Paragraph Spacing */}
              <div>
                <div className="text-[9px] uppercase text-pencil dark:text-gray-400 font-bold mb-1.5">
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
                        className={`py-1 border border-black dark:border-white text-center text-[9px] transition-colors ${
                          isSelected
                            ? 'bg-black text-white dark:bg-white dark:text-black font-bold shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:shadow-[1px_1px_0px_0px_#ffffff]'
                            : 'bg-white dark:bg-black'
                        }`}
                      >
                        {PARAGRAPH_SPACING_LABELS[ps]}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between gap-1.5 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={applyAutoDefault}
                    className="px-2 py-1 border border-black dark:border-white text-[9px] font-bold flex items-center gap-1 bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900"
                  >
                    <RotateCcw size={10} />
                    <span>AUTO</span>
                  </button>

                  <button
                    type="button"
                    onClick={resetToOriginal}
                    className="px-2 py-1 border border-black dark:border-white text-[9px] font-bold flex items-center gap-1 bg-white dark:bg-black hover:bg-gray-100 dark:hover:bg-gray-900"
                  >
                    <RotateCcw size={10} />
                    <span>ORIGINAL</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    setTimeout(() => window.print(), 100);
                  }}
                  className="px-2 py-1 border border-black dark:border-white text-[9px] font-bold flex items-center gap-1 bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  title="Print canonical A4 edition"
                  aria-label="Print canonical A4 edition"
                >
                  <Printer size={10} />
                  <span>PRINT A4</span>
                </button>
              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TAB 4: CUSTOM */}
          {/* ========================================================================= */}
          {activeTab === 'custom' && (
            <CustomProfilesManager compact={true} />
          )}
        </div>
      </div>
    </div>
  );
};
