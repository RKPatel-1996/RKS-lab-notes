import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Check, AlertTriangle, Plus, Minus } from 'lucide-react';
import { useReaderPreferences } from '../../hooks/useReaderPreferences';
import {
  ReaderFontFamily,
  ReaderFontWeight,
  ReaderPreferences,
  ReaderTypographyValues,
  FONT_STACKS,
  FONT_WEIGHT_VALUES,
} from '../../lib/readerPreferences';

export type AppearanceChoice = 'light' | 'dark' | 'keep';
export type SpacingChoice = 'compact' | 'standard' | 'relaxed' | 'custom';

function inferInitialSpacing(typography: ReaderTypographyValues): SpacingChoice {
  if (
    typography.paragraphSpacing === 'compact' &&
    Math.abs(typography.lineHeight - 1.55) < 0.05 &&
    Math.abs(typography.letterSpacing - 0) < 0.005 &&
    Math.abs(typography.wordSpacing - 0) < 0.005
  ) {
    return 'compact';
  }
  if (
    typography.paragraphSpacing === 'standard' &&
    Math.abs(typography.lineHeight - 1.75) < 0.05 &&
    Math.abs(typography.letterSpacing - 0) < 0.005 &&
    Math.abs(typography.wordSpacing - 0.02) < 0.005
  ) {
    return 'standard';
  }
  if (
    typography.paragraphSpacing === 'relaxed' &&
    Math.abs(typography.lineHeight - 1.85) < 0.05 &&
    Math.abs(typography.letterSpacing - 0.005) < 0.005 &&
    Math.abs(typography.wordSpacing - 0.04) < 0.005
  ) {
    return 'relaxed';
  }
  return 'custom';
}

interface GuidedProfileBuilderProps {
  compact?: boolean;
  initialStep?: number;
  onComplete: (profileName: string) => void;
  onCancel: () => void;
}

export const GuidedProfileBuilder: React.FC<GuidedProfileBuilderProps> = ({
  compact = false,
  initialStep = 1,
  onComplete,
  onCancel,
}) => {
  const {
    preferences,
    effectiveTypography,
    savedProfiles,
    saveCurrentProfile,
    restorePreferences,
    updateField,
    isDarkMode,
    setTheme,
    activeProfileId,
  } = useReaderPreferences();

  // Snapshot initial configuration to guarantee clean rollback on cancel
  const initialPrefsRef = useRef<ReaderPreferences>({ ...preferences });
  const initialThemeRef = useRef<boolean>(isDarkMode);
  const initialActiveIdRef = useRef<string | null>(activeProfileId);

  // Current wizard step: 1 to 6
  const [step, setStep] = useState<number>(initialStep);

  // Step 1: Appearance
  const [appearance, setAppearance] = useState<AppearanceChoice>(
    isDarkMode ? 'dark' : 'light'
  );

  // Step 2: Font
  const [fontFamily, setFontFamily] = useState<ReaderFontFamily>(
    effectiveTypography.fontFamily
  );

  // Step 3: Font Size
  const [fontSize, setFontSize] = useState<number>(effectiveTypography.fontSize);
  const [isCustomSize, setIsCustomSize] = useState<boolean>(
    ![16, 17, 18, 20, 22, 24].includes(effectiveTypography.fontSize)
  );

  // Step 4: Weight
  const [fontWeight, setFontWeight] = useState<ReaderFontWeight>(
    effectiveTypography.fontWeight
  );

  // Step 5: Reading Spacing (PASS 7F Invariant 7: Inferred from effective settings, else Custom)
  const [spacingChoice, setSpacingChoice] = useState<SpacingChoice>(() =>
    inferInitialSpacing(effectiveTypography)
  );

  // Helper to generate a sensible suggested name based on selections
  const generateSuggestedName = (
    font: ReaderFontFamily,
    size: number,
    spacing: SpacingChoice,
    appChoice: AppearanceChoice
  ): string => {
    let prefix = '';
    if (size >= 22) prefix = 'LARGE ';
    else if (size <= 16) prefix = 'COMPACT ';
    else if (spacing === 'relaxed') prefix = 'RELAXED ';
    else if (spacing === 'compact') prefix = 'DENSE ';

    let fontLabel = 'SERIF';
    if (font === 'lexend') fontLabel = 'LEXEND';
    else if (font === 'book-serif') fontLabel = 'GEORGIA';
    else if (font === 'sans') fontLabel = 'SANS';
    else if (font === 'system') fontLabel = 'SYSTEM';

    let suffix = '';
    if (appChoice === 'dark') suffix = ' DARK';
    else if (appChoice === 'light') suffix = ' LIGHT';

    let result = `${prefix}${fontLabel}${suffix}`.trim();
    if (result === 'SERIF DARK') result = 'RK DARK';
    if (!result) result = 'CUSTOM PROFILE';
    return result.slice(0, 32);
  };

  // Step 6: Profile Name (prefilled if starting at step 6)
  const [profileName, setProfileName] = useState<string>(() => {
    if (initialStep === 6) {
      return generateSuggestedName(
        effectiveTypography.fontFamily,
        effectiveTypography.fontSize,
        inferInitialSpacing(effectiveTypography),
        isDarkMode ? 'dark' : 'light'
      );
    }
    return '';
  });
  const [hasManuallyEditedName, setHasManuallyEditedName] = useState<boolean>(false);
  const [overwriteId, setOverwriteId] = useState<string | undefined>(undefined);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Apply Step 1: Appearance live
  const handleSelectAppearance = (choice: AppearanceChoice) => {
    setAppearance(choice);
    if (setTheme) {
      if (choice === 'dark') {
        setTheme(true);
      } else if (choice === 'light') {
        setTheme(false);
      } else {
        setTheme(initialThemeRef.current);
      }
    }
  };

  // Apply Step 2: Font live
  const handleSelectFont = (font: ReaderFontFamily) => {
    setFontFamily(font);
    updateField('fontFamily', font);
  };

  // Apply Step 3: Size live
  const handleSelectSize = (sz: number) => {
    setFontSize(sz);
    setIsCustomSize(false);
    updateField('fontSize', sz);
  };

  const handleCustomSizeChange = (delta: number) => {
    const next = Math.max(15, Math.min(24, fontSize + delta));
    setFontSize(next);
    setIsCustomSize(true);
    updateField('fontSize', next);
  };

  // Apply Step 4: Weight live
  const handleSelectWeight = (wt: ReaderFontWeight) => {
    setFontWeight(wt);
    updateField('fontWeight', wt);
  };

  // Apply Step 5: Spacing live
  const handleSelectSpacing = (choice: SpacingChoice) => {
    setSpacingChoice(choice);
    if (choice === 'compact') {
      updateField('lineHeight', 1.55);
      updateField('paragraphSpacing', 'compact');
      updateField('letterSpacing', 0);
      updateField('wordSpacing', 0);
    } else if (choice === 'standard') {
      updateField('lineHeight', 1.75);
      updateField('paragraphSpacing', 'standard');
      updateField('letterSpacing', 0);
      updateField('wordSpacing', 0.02);
    } else if (choice === 'relaxed') {
      updateField('lineHeight', 1.85);
      updateField('paragraphSpacing', 'relaxed');
      updateField('letterSpacing', 0.005);
      updateField('wordSpacing', 0.04);
    }
    // 'custom': leaves current micro-adjustments intact
  };

  // Handle Cancel (Restores original reader state & theme)
  const handleCancel = () => {
    restorePreferences(initialPrefsRef.current, initialActiveIdRef.current);
    if (setTheme) {
      setTheme(initialThemeRef.current);
    }
    onCancel();
  };

  // Advance to next step
  const handleNext = () => {
    if (step === 5 && !hasManuallyEditedName) {
      const suggested = generateSuggestedName(fontFamily, fontSize, spacingChoice, appearance);
      setProfileName(suggested);
    }
    setErrorMessage(null);
    setStep((prev) => Math.min(6, prev + 1));
  };

  // Go back to previous step
  const handleBack = () => {
    setErrorMessage(null);
    setStep((prev) => Math.max(1, prev - 1));
  };

  // Check duplicate
  const trimmedName = profileName.trim();
  const existingDuplicate = savedProfiles.find(
    (p) => p.name.toLowerCase() === trimmedName.toLowerCase()
  );
  const isDuplicate = Boolean(existingDuplicate && existingDuplicate.id !== overwriteId);

  // Save Profile commit
  const handleSave = () => {
    if (!trimmedName) {
      setErrorMessage('Profile name cannot be empty.');
      return;
    }
    if (trimmedName.length > 32) {
      setErrorMessage('Profile name must be 32 characters or less.');
      return;
    }
    if (isDuplicate && !overwriteId) {
      setErrorMessage(`A profile named "${trimmedName}" already exists.`);
      return;
    }

    const result = saveCurrentProfile(
      trimmedName,
      appearance,
      overwriteId
    );

    if (result.success) {
      onComplete(trimmedName);
    } else {
      setErrorMessage(result.error || 'Failed to save profile.');
    }
  };

  return (
    <div className={`font-mono text-ink dark:text-white flex flex-col justify-between h-full select-none ${compact ? 'space-y-3' : 'space-y-4'}`}>
      {/* Top Header: Step Indicator + Title + Cancel */}
      <div className="flex items-center justify-between pb-2 border-b-2 border-black dark:border-white">
        <div>
          <div className="text-[9px] uppercase tracking-wider text-pencil dark:text-gray-400 font-bold">
            QUESTION {step} / 6
          </div>
          <h3 className="font-bold text-xs uppercase tracking-wide">
            {step === 1 && 'APPEARANCE'}
            {step === 2 && 'FONT'}
            {step === 3 && 'FONT SIZE'}
            {step === 4 && 'WEIGHT'}
            {step === 5 && 'READING SPACING'}
            {step === 6 && 'PROFILE NAME'}
          </h3>
        </div>
        <button
          type="button"
          onClick={handleCancel}
          aria-label="Cancel profile builder and restore previous settings"
          title="Cancel"
          className="p-1 border border-gray-300 dark:border-gray-700 hover:border-black dark:hover:border-white text-pencil hover:text-ink dark:text-gray-400 dark:hover:text-white transition-colors"
        >
          <X size={14} />
        </button>
      </div>

      {/* Center Stage: Step Question Form */}
      <div className="flex-1 py-1 overflow-y-auto">
        {/* =========================================================================
            STEP 1: APPEARANCE
           ========================================================================= */}
        {step === 1 && (
          <div className="space-y-2">
            <p className="text-[10px] text-pencil dark:text-gray-400">
              Select whether this profile binds to a light or dark theme, or changes typography only:
            </p>
            <div className="grid grid-cols-3 gap-1.5" role="radiogroup" aria-label="Appearance options">
              <button
                type="button"
                role="radio"
                aria-checked={appearance === 'light'}
                onClick={() => handleSelectAppearance('light')}
                className={`p-2.5 border text-center transition-all ${
                  appearance === 'light'
                    ? 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                    : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-black hover:border-black dark:hover:border-white text-ink dark:text-white'
                }`}
              >
                <div className="text-xs font-bold uppercase">LIGHT</div>
                <div className="text-[8px] opacity-75 mt-0.5">Light Mode</div>
              </button>

              <button
                type="button"
                role="radio"
                aria-checked={appearance === 'dark'}
                onClick={() => handleSelectAppearance('dark')}
                className={`p-2.5 border text-center transition-all ${
                  appearance === 'dark'
                    ? 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                    : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-black hover:border-black dark:hover:border-white text-ink dark:text-white'
                }`}
              >
                <div className="text-xs font-bold uppercase">DARK</div>
                <div className="text-[8px] opacity-75 mt-0.5">Dark Mode</div>
              </button>

              <button
                type="button"
                role="radio"
                aria-checked={appearance === 'keep'}
                onClick={() => handleSelectAppearance('keep')}
                className={`p-2.5 border text-center transition-all ${
                  appearance === 'keep'
                    ? 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                    : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-black hover:border-black dark:hover:border-white text-ink dark:text-white'
                }`}
              >
                <div className="text-xs font-bold uppercase">KEEP CURRENT</div>
                <div className="text-[8px] opacity-75 mt-0.5">Keep Current</div>
              </button>
            </div>
          </div>
        )}

        {/* =========================================================================
            STEP 2: FONT
           ========================================================================= */}
        {step === 2 && (
          <div className="space-y-2">
            <p className="text-[10px] text-pencil dark:text-gray-400">
              Choose the primary reading typeface:
            </p>
            <div className="space-y-1.5" role="radiogroup" aria-label="Font family options">
              {[
                { key: 'original' as ReaderFontFamily, label: 'ORIGINAL / LORA', sample: 'Aa Lora Editorial' },
                { key: 'book-serif' as ReaderFontFamily, label: 'BOOK / GEORGIA', sample: 'Aa Georgia Academic' },
                { key: 'lexend' as ReaderFontFamily, label: 'LEXEND', sample: 'Aa Lexend Legibility' },
                { key: 'sans' as ReaderFontFamily, label: 'SANS', sample: 'Aa Sans Clean Modern' },
                { key: 'system' as ReaderFontFamily, label: 'SYSTEM', sample: 'Aa Native System UI' },
              ].map((item) => {
                const isSelected = fontFamily === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleSelectFont(item.key)}
                    className={`w-full p-2 border text-left flex items-center justify-between transition-all ${
                      isSelected
                        ? 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                        : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-black hover:border-black dark:hover:border-white text-ink dark:text-white'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold uppercase">{item.label}</div>
                      <div
                        className="text-[11px] opacity-80 mt-0.5"
                        style={{ fontFamily: FONT_STACKS[item.key] }}
                      >
                        {item.sample}
                      </div>
                    </div>
                    {isSelected && <Check size={14} className="shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* =========================================================================
            STEP 3: FONT SIZE
           ========================================================================= */}
        {step === 3 && (
          <div className="space-y-2.5">
            <p className="text-[10px] text-pencil dark:text-gray-400">
              Select body text size (highlighting active: {effectiveTypography.fontSize}px):
            </p>
            <div className="grid grid-cols-3 gap-1.5" role="radiogroup" aria-label="Font size quick choices">
              {[16, 17, 18, 20, 22, 24].map((sz) => {
                const isSelected = fontSize === sz && !isCustomSize;
                return (
                  <button
                    key={sz}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleSelectSize(sz)}
                    className={`p-2 border text-center transition-all ${
                      isSelected
                        ? 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                        : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-black hover:border-black dark:hover:border-white text-ink dark:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">{sz}PX</div>
                    <div className="text-[8px] opacity-75">
                      {sz === 16 ? 'Compact' : sz === 17 ? 'Mobile Def' : sz === 18 ? 'Desktop Def' : sz >= 22 ? 'Expanded' : 'Comfort'}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Custom / Incremental Size Selector */}
            <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase font-bold text-pencil dark:text-gray-400">
                  CUSTOM SIZE:
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCustomSizeChange(-1)}
                    disabled={fontSize <= 15}
                    aria-label="Decrease custom font size"
                    className="w-7 h-7 flex items-center justify-center border border-black dark:border-white bg-white dark:bg-black text-ink dark:text-white disabled:opacity-30 active:scale-95"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="font-bold text-xs w-12 text-center">
                    {fontSize}PX
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCustomSizeChange(1)}
                    disabled={fontSize >= 24}
                    aria-label="Increase custom font size"
                    className="w-7 h-7 flex items-center justify-center border border-black dark:border-white bg-white dark:bg-black text-ink dark:text-white disabled:opacity-30 active:scale-95"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            STEP 4: WEIGHT
           ========================================================================= */}
        {step === 4 && (
          <div className="space-y-2">
            <p className="text-[10px] text-pencil dark:text-gray-400">
              Select font weight density:
            </p>
            <div className="space-y-1.5" role="radiogroup" aria-label="Font weight options">
              {[
                { key: 'regular' as ReaderFontWeight, label: 'REGULAR', val: 400, desc: 'Standard reading weight' },
                { key: 'medium' as ReaderFontWeight, label: 'MEDIUM', val: 500, desc: 'Enhanced contrast and stroke' },
                { key: 'semibold' as ReaderFontWeight, label: 'SEMI-BOLD', val: 600, desc: 'Maximum stroke emphasis' },
              ].map((item) => {
                const isSelected = fontWeight === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleSelectWeight(item.key)}
                    className={`w-full p-2 border text-left flex items-center justify-between transition-all ${
                      isSelected
                        ? 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                        : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-black hover:border-black dark:hover:border-white text-ink dark:text-white'
                    }`}
                  >
                    <div>
                      <div
                        className="text-xs uppercase"
                        style={{ fontWeight: FONT_WEIGHT_VALUES[item.key] }}
                      >
                        {item.label} ({item.val})
                      </div>
                      <div className="text-[9px] opacity-75 mt-0.5">{item.desc}</div>
                    </div>
                    {isSelected && <Check size={14} className="shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* =========================================================================
            STEP 5: READING SPACING
           ========================================================================= */}
        {step === 5 && (
          <div className="space-y-2">
            <p className="text-[10px] text-pencil dark:text-gray-400">
              Configure line height, paragraph rhythm, and breathing room:
            </p>
            <div className="space-y-1.5" role="radiogroup" aria-label="Reading spacing options">
              {[
                {
                  key: 'compact' as SpacingChoice,
                  label: 'COMPACT',
                  desc: 'Lower line height (1.55) and tighter paragraph spacing',
                },
                {
                  key: 'standard' as SpacingChoice,
                  label: 'STANDARD',
                  desc: 'Comfortable balance (1.75 line height, natural pacing)',
                },
                {
                  key: 'relaxed' as SpacingChoice,
                  label: 'RELAXED',
                  desc: 'Airy line height (1.85), generous paragraph spacing',
                },
                {
                  key: 'custom' as SpacingChoice,
                  label: 'CUSTOM (PRESERVE ADVANCED)',
                  desc: 'Keep current exact custom word and line spacing values',
                },
              ].map((item) => {
                const isSelected = spacingChoice === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleSelectSpacing(item.key)}
                    className={`w-full p-2 border text-left flex items-center justify-between transition-all ${
                      isSelected
                        ? 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                        : 'border-gray-300 dark:border-gray-700 bg-white dark:bg-black hover:border-black dark:hover:border-white text-ink dark:text-white'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-bold uppercase">{item.label}</div>
                      <div className="text-[9px] opacity-75 mt-0.5">{item.desc}</div>
                    </div>
                    {isSelected && <Check size={14} className="shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* =========================================================================
            STEP 6: PROFILE NAME
           ========================================================================= */}
        {step === 6 && (
          <div className="space-y-3">
            <p className="text-[10px] text-pencil dark:text-gray-400">
              Review and name your profile:
            </p>

            {/* Profile Name Input */}
            <div className="space-y-1">
              <label htmlFor="guided-profile-name" className="text-[9px] uppercase font-bold text-pencil dark:text-gray-400">
                PROFILE NAME (MAX 32 CHARS)
              </label>
              <input
                id="guided-profile-name"
                type="text"
                maxLength={32}
                value={profileName}
                onChange={(e) => {
                  setProfileName(e.target.value);
                  setHasManuallyEditedName(true);
                  setErrorMessage(null);
                  if (overwriteId) setOverwriteId(undefined);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') handleSave();
                }}
                placeholder="e.g. LEXEND DARK, LARGE SERIF"
                autoFocus
                className="w-full px-2.5 py-1.5 text-xs border border-black dark:border-white bg-white dark:bg-black text-ink dark:text-white font-mono focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
              />
            </div>

            {/* Error or Duplicate Notice */}
            {errorMessage && (
              <div className="p-2 border border-red-600 bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-300 text-[10px]">
                {errorMessage}
              </div>
            )}

            {isDuplicate && !overwriteId && (
              <div className="p-2.5 border-2 border-black dark:border-white bg-paper dark:bg-black space-y-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-600 dark:text-amber-400">
                  <AlertTriangle size={14} />
                  <span>NAME ALREADY EXISTS</span>
                </div>
                <div className="text-[10px]">
                  A profile named &ldquo;<span className="font-bold">{trimmedName}</span>&rdquo; already exists.
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      if (existingDuplicate) {
                        setOverwriteId(existingDuplicate.id);
                        setErrorMessage(null);
                      }
                    }}
                    className="flex-1 py-1 px-2 border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-bold text-[9px] uppercase"
                  >
                    OVERWRITE EXISTING
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setProfileName(`${trimmedName} 2`.slice(0, 32));
                      setErrorMessage(null);
                    }}
                    className="py-1 px-2 border border-black dark:border-white bg-white dark:bg-black text-ink dark:text-white font-bold text-[9px] uppercase"
                  >
                    RENAME SUGGESTION
                  </button>
                </div>
              </div>
            )}

            {/* Summary of Configuration */}
            <div className="p-2 border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-[10px] space-y-1">
              <div className="font-bold uppercase text-[9px] text-pencil dark:text-gray-400">
                PROFILE SPECIFICATION:
              </div>
              <div className="flex flex-wrap gap-x-2 text-ink dark:text-white">
                <span>Theme: <strong className="uppercase">{appearance}</strong></span>
                <span>•</span>
                <span>Font: <strong className="uppercase">{fontFamily}</strong></span>
                <span>•</span>
                <span>Size: <strong>{fontSize}px</strong></span>
                <span>•</span>
                <span>Weight: <strong className="capitalize">{fontWeight}</strong></span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Action Controls: BACK / NEXT / SAVE PROFILE */}
      <div className="pt-2 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between gap-2">
        {step > 1 ? (
          <button
            type="button"
            onClick={handleBack}
            className="py-1.5 px-3 border border-black dark:border-white bg-white dark:bg-black text-ink dark:text-white font-bold text-[10px] uppercase flex items-center gap-1 hover:bg-gray-100 dark:hover:bg-gray-900 active:scale-95"
          >
            <ChevronLeft size={14} />
            <span>BACK</span>
          </button>
        ) : (
          <button
            type="button"
            onClick={handleCancel}
            className="py-1.5 px-3 border border-black dark:border-white bg-white dark:bg-black text-ink dark:text-white font-bold text-[10px] uppercase hover:bg-gray-100 dark:hover:bg-gray-900 active:scale-95"
          >
            CANCEL
          </button>
        )}

        {step < 6 ? (
          <button
            type="button"
            onClick={handleNext}
            className="py-1.5 px-3 border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-bold text-[10px] uppercase flex items-center gap-1 hover:opacity-85 active:scale-95 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:shadow-[1px_1px_0px_0px_#ffffff]"
          >
            <span>NEXT</span>
            <ChevronRight size={14} />
          </button>
        ) : (
          <button
            type="button"
            disabled={!trimmedName || (isDuplicate && !overwriteId)}
            onClick={handleSave}
            className="flex-1 py-1.5 px-3 border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-bold text-xs uppercase hover:opacity-85 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]"
          >
            {overwriteId ? 'OVERWRITE & SAVE' : 'SAVE PROFILE'}
          </button>
        )}
      </div>
    </div>
  );
};
