export type DeviceReadingMode = 'auto' | 'desktop' | 'mobile' | 'preset' | 'custom';

export type ReaderPreset = 'original' | 'comfort' | 'focus' | 'accessible' | 'custom';

export type ReaderFontFamily = 'original' | 'book-serif' | 'lexend' | 'sans' | 'system';

export type ReaderReadingWidth = 'narrow' | 'standard' | 'wide';

export type ReaderFontWeight = 'regular' | 'medium' | 'semibold';

export type ReaderParagraphSpacing = 'compact' | 'standard' | 'relaxed';

export interface ReaderTypographyValues {
  fontFamily: ReaderFontFamily;
  fontSize: number; // 15 to 24 px
  lineHeight: number; // 1.40 to 2.00
  letterSpacing: number; // -0.01 to 0.08 em
  wordSpacing: number; // 0.00 to 0.20 em
  width: ReaderReadingWidth;
  fontWeight: ReaderFontWeight;
  paragraphSpacing: ReaderParagraphSpacing;
}

export interface ReaderPreferences extends ReaderTypographyValues {
  mode: DeviceReadingMode;
  preset: ReaderPreset;
}

export const FONT_STACKS: Record<ReaderFontFamily, string> = {
  'original': '"Lora", Georgia, serif',
  'book-serif': 'Georgia, "Times New Roman", Garamond, serif',
  'lexend': '"Lexend", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  'sans': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  'system': 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
};

export const FONT_FAMILY_SHORT_LABELS: Record<ReaderFontFamily, string> = {
  'original': 'Original (Lora)',
  'book-serif': 'Book (Georgia)',
  'lexend': 'Lexend (Clear)',
  'sans': 'Sans (Modern)',
  'system': 'System (OS)',
};

export const WIDTH_VALUES: Record<ReaderReadingWidth, string> = {
  'narrow': '44rem',    // ~704px: sustained focus measure
  'standard': '56rem',  // ~896px: canonical RKS max-w-4xl (~68-74ch)
  'wide': '68rem',      // ~1088px: expanded broad measure
};

export const WIDTH_LABELS: Record<ReaderReadingWidth, string> = {
  'narrow': 'NARROW',
  'standard': 'STANDARD',
  'wide': 'WIDE',
};

export const FONT_WEIGHT_VALUES: Record<ReaderFontWeight, number> = {
  'regular': 400,
  'medium': 500,
  'semibold': 600,
};

export const FONT_WEIGHT_LABELS: Record<ReaderFontWeight, string> = {
  'regular': 'Regular',
  'medium': 'Medium',
  'semibold': 'Semi-bold',
};

export const PARAGRAPH_SPACING_VALUES: Record<ReaderParagraphSpacing, string> = {
  'compact': '0.85em',
  'standard': '1.0em',
  'relaxed': '1.4em',
};

export const PARAGRAPH_SPACING_LABELS: Record<ReaderParagraphSpacing, string> = {
  'compact': 'Compact',
  'standard': 'Standard',
  'relaxed': 'Relaxed',
};

// 1. Canonical Original
export const CANONICAL_ORIGINAL: ReaderTypographyValues = {
  fontFamily: 'original',
  fontSize: 16,
  lineHeight: 1.7,
  letterSpacing: 0,
  wordSpacing: 0,
  width: 'standard',
  fontWeight: 'regular',
  paragraphSpacing: 'standard',
};

// 2. Desktop Reading Default (Pass 7D.1)
export const DESKTOP_DEFAULT: ReaderTypographyValues = {
  fontFamily: 'original',
  fontSize: 18,
  lineHeight: 1.65,
  letterSpacing: 0,
  wordSpacing: 0.015,
  width: 'standard',
  fontWeight: 'regular',
  paragraphSpacing: 'standard',
};

// 3. Mobile Reading Default (Pass 7D.1)
export const MOBILE_DEFAULT: ReaderTypographyValues = {
  fontFamily: 'lexend',
  fontSize: 17,
  lineHeight: 1.70,
  letterSpacing: 0.005,
  wordSpacing: 0.03,
  width: 'standard',
  fontWeight: 'regular',
  paragraphSpacing: 'standard',
};

export const PRESETS: Record<Exclude<ReaderPreset, 'custom'>, ReaderTypographyValues> = {
  original: CANONICAL_ORIGINAL,
  comfort: {
    fontFamily: 'original',
    fontSize: 18,
    lineHeight: 1.8,
    letterSpacing: 0.01,
    wordSpacing: 0.02,
    width: 'standard',
    fontWeight: 'regular',
    paragraphSpacing: 'relaxed',
  },
  focus: {
    fontFamily: 'original',
    fontSize: 18,
    lineHeight: 1.75,
    letterSpacing: 0.01,
    wordSpacing: 0.02,
    width: 'narrow',
    fontWeight: 'regular',
    paragraphSpacing: 'standard',
  },
  accessible: {
    fontFamily: 'sans',
    fontSize: 19,
    lineHeight: 1.85,
    letterSpacing: 0.03,
    wordSpacing: 0.06,
    width: 'standard',
    fontWeight: 'regular',
    paragraphSpacing: 'relaxed',
  },
};

export const DEFAULT_PREFERENCES: ReaderPreferences = {
  mode: 'auto',
  preset: 'original',
  ...DESKTOP_DEFAULT,
};

export const READER_STORAGE_KEY = 'rks_reader_preferences_v1';
export const READER_PROFILES_STORAGE_KEY = 'rks.readerProfiles.v1';
export const MAX_SAVED_PROFILES = 12;

export interface SavedReaderProfile {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  typography: ReaderTypographyValues;
  optionalTheme?: 'light' | 'dark';
}

export function generateProfileId(): string {
  return `prof_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 6)}`;
}

export function validateTypography(raw: any, fallback: ReaderTypographyValues = DESKTOP_DEFAULT): ReaderTypographyValues {
  if (!raw || typeof raw !== 'object') return fallback;
  return {
    fontFamily: raw.fontFamily in FONT_STACKS ? raw.fontFamily : fallback.fontFamily,
    fontSize: typeof raw.fontSize === 'number' && !isNaN(raw.fontSize) 
      ? Math.min(24, Math.max(15, Math.round(raw.fontSize))) 
      : fallback.fontSize,
    lineHeight: typeof raw.lineHeight === 'number' && !isNaN(raw.lineHeight)
      ? Math.min(2.0, Math.max(1.4, Math.round(raw.lineHeight * 1000) / 1000))
      : fallback.lineHeight,
    letterSpacing: typeof raw.letterSpacing === 'number' && !isNaN(raw.letterSpacing)
      ? Math.min(0.08, Math.max(-0.01, Math.round(raw.letterSpacing * 1000) / 1000))
      : fallback.letterSpacing,
    wordSpacing: typeof raw.wordSpacing === 'number' && !isNaN(raw.wordSpacing)
      ? Math.min(0.20, Math.max(0, Math.round(raw.wordSpacing * 1000) / 1000))
      : fallback.wordSpacing,
    width: raw.width in WIDTH_VALUES ? raw.width : fallback.width,
    fontWeight: raw.fontWeight in FONT_WEIGHT_VALUES ? raw.fontWeight : fallback.fontWeight,
    paragraphSpacing: raw.paragraphSpacing in PARAGRAPH_SPACING_VALUES ? raw.paragraphSpacing : fallback.paragraphSpacing,
  };
}

export function loadSavedProfiles(): SavedReaderProfile[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(READER_PROFILES_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    const validated: SavedReaderProfile[] = [];
    for (const item of parsed) {
      if (!item || typeof item !== 'object' || typeof item.id !== 'string' || typeof item.name !== 'string') {
        continue;
      }
      const trimmedName = item.name.trim();
      if (!trimmedName) continue;

      const profile: SavedReaderProfile = {
        id: item.id,
        name: trimmedName.slice(0, 32),
        createdAt: typeof item.createdAt === 'number' ? item.createdAt : Date.now(),
        updatedAt: typeof item.updatedAt === 'number' ? item.updatedAt : Date.now(),
        typography: validateTypography(item.typography),
        optionalTheme: item.optionalTheme === 'light' || item.optionalTheme === 'dark' ? item.optionalTheme : undefined,
      };
      validated.push(profile);
      if (validated.length >= MAX_SAVED_PROFILES) break;
    }
    return validated;
  } catch (err) {
    console.warn('Failed to parse saved reader profiles from localStorage:', err);
    return [];
  }
}

export function saveProfilesToStorage(profiles: SavedReaderProfile[]): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(READER_PROFILES_STORAGE_KEY, JSON.stringify(profiles.slice(0, MAX_SAVED_PROFILES)));
  } catch (err) {
    console.warn('Failed to save reader profiles to localStorage:', err);
  }
}

export function getEffectiveTypography(
  prefs: ReaderPreferences,
  isMobile: boolean
): ReaderTypographyValues {
  if (prefs.mode === 'auto') {
    return isMobile ? MOBILE_DEFAULT : DESKTOP_DEFAULT;
  }
  if (prefs.mode === 'desktop') {
    return DESKTOP_DEFAULT;
  }
  if (prefs.mode === 'mobile') {
    return MOBILE_DEFAULT;
  }
  if (prefs.mode === 'preset' && prefs.preset !== 'custom') {
    return PRESETS[prefs.preset] || CANONICAL_ORIGINAL;
  }
  // mode === 'custom'
  return {
    fontFamily: prefs.fontFamily,
    fontSize: prefs.fontSize,
    lineHeight: prefs.lineHeight,
    letterSpacing: prefs.letterSpacing,
    wordSpacing: prefs.wordSpacing,
    width: prefs.width,
    fontWeight: prefs.fontWeight,
    paragraphSpacing: prefs.paragraphSpacing,
  };
}

export function determineActivePreset(typography: ReaderTypographyValues): ReaderPreset {
  const presetKeys: (keyof typeof PRESETS)[] = ['original', 'comfort', 'focus', 'accessible'];
  for (const key of presetKeys) {
    const p = PRESETS[key];
    if (
      typography.fontFamily === p.fontFamily &&
      typography.fontSize === p.fontSize &&
      Math.abs(typography.lineHeight - p.lineHeight) < 0.01 &&
      Math.abs(typography.letterSpacing - p.letterSpacing) < 0.005 &&
      Math.abs(typography.wordSpacing - p.wordSpacing) < 0.005 &&
      typography.width === p.width &&
      typography.fontWeight === p.fontWeight &&
      typography.paragraphSpacing === p.paragraphSpacing
    ) {
      return key;
    }
  }
  return 'custom';
}

export function loadSavedPreferences(): ReaderPreferences {
  if (typeof window === 'undefined') return DEFAULT_PREFERENCES;
  try {
    const raw = localStorage.getItem(READER_STORAGE_KEY);
    if (!raw) return DEFAULT_PREFERENCES;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') return DEFAULT_PREFERENCES;

    // Graceful migration from Pass 7D:
    let mode: DeviceReadingMode = 'auto';
    if (parsed.mode === 'auto' || parsed.mode === 'desktop' || parsed.mode === 'mobile' || parsed.mode === 'preset' || parsed.mode === 'custom') {
      mode = parsed.mode;
    } else if (parsed.preset === 'custom') {
      mode = 'custom';
    } else if (parsed.preset && parsed.preset !== 'original' && parsed.preset in PRESETS) {
      mode = 'preset';
    } else {
      mode = 'auto';
    }

    const preset: ReaderPreset = (parsed.preset in PRESETS || parsed.preset === 'custom') ? parsed.preset : 'original';

    const validated: ReaderPreferences = {
      mode,
      preset,
      fontFamily: parsed.fontFamily in FONT_STACKS ? parsed.fontFamily : DESKTOP_DEFAULT.fontFamily,
      fontSize: typeof parsed.fontSize === 'number' && !isNaN(parsed.fontSize) 
        ? Math.min(24, Math.max(15, Math.round(parsed.fontSize))) 
        : DESKTOP_DEFAULT.fontSize,
      lineHeight: typeof parsed.lineHeight === 'number' && !isNaN(parsed.lineHeight)
        ? Math.min(2.0, Math.max(1.4, Math.round(parsed.lineHeight * 1000) / 1000))
        : DESKTOP_DEFAULT.lineHeight,
      letterSpacing: typeof parsed.letterSpacing === 'number' && !isNaN(parsed.letterSpacing)
        ? Math.min(0.08, Math.max(-0.01, Math.round(parsed.letterSpacing * 1000) / 1000))
        : DESKTOP_DEFAULT.letterSpacing,
      wordSpacing: typeof parsed.wordSpacing === 'number' && !isNaN(parsed.wordSpacing)
        ? Math.min(0.20, Math.max(0, Math.round(parsed.wordSpacing * 1000) / 1000))
        : DESKTOP_DEFAULT.wordSpacing,
      width: parsed.width in WIDTH_VALUES ? parsed.width : DESKTOP_DEFAULT.width,
      fontWeight: parsed.fontWeight in FONT_WEIGHT_VALUES ? parsed.fontWeight : DESKTOP_DEFAULT.fontWeight,
      paragraphSpacing: parsed.paragraphSpacing in PARAGRAPH_SPACING_VALUES ? parsed.paragraphSpacing : DESKTOP_DEFAULT.paragraphSpacing,
    };

    return validated;
  } catch (err) {
    console.warn('Failed to parse reader preferences from localStorage:', err);
    return DEFAULT_PREFERENCES;
  }
}

export function savePreferences(prefs: ReaderPreferences): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(READER_STORAGE_KEY, JSON.stringify(prefs));
  } catch (err) {
    console.warn('Failed to save reader preferences to localStorage:', err);
  }
}

export function computeHeadingSize(
  readerFontSize: number,
  ratio: number,
  min: number,
  max: number
): number {
  const scaled = Math.round(readerFontSize * ratio);
  return Math.min(max, Math.max(min, scaled));
}

export function getReaderCssVariables(
  typography: ReaderTypographyValues,
  isMobile?: boolean
): Record<string, string> {
  const fs = typography.fontSize;

  // Mobile heading sizes (< 768px)
  const mobileH2 = computeHeadingSize(fs, 1.28, 20, 32);
  const mobileH3 = computeHeadingSize(fs, 1.14, 18, 28);
  const mobileH4 = computeHeadingSize(fs, 1.04, 16, 25);
  const mobileH5 = computeHeadingSize(fs, 1.02, 16, 24);
  const mobileH6 = computeHeadingSize(fs, 1.00, 15, 24);

  // Desktop heading sizes (>= 768px)
  const desktopH2 = computeHeadingSize(fs, 1.45, 24, 38);
  const desktopH3 = computeHeadingSize(fs, 1.22, 20, 30);
  const desktopH4 = computeHeadingSize(fs, 1.08, 17, 26);
  const desktopH5 = computeHeadingSize(fs, 1.04, 16, 25);
  const desktopH6 = computeHeadingSize(fs, 1.00, 15, 24);

  // Current active heading sizes based on device context (fallback if CSS breakpoint var is overridden)
  const activeH2 = isMobile ? mobileH2 : desktopH2;
  const activeH3 = isMobile ? mobileH3 : desktopH3;
  const activeH4 = isMobile ? mobileH4 : desktopH4;
  const activeH5 = isMobile ? mobileH5 : desktopH5;
  const activeH6 = isMobile ? mobileH6 : desktopH6;

  return {
    '--reader-font-family': FONT_STACKS[typography.fontFamily] || FONT_STACKS.original,
    '--reader-font-size': `${typography.fontSize}px`,
    '--reader-font-weight': `${FONT_WEIGHT_VALUES[typography.fontWeight] || 400}`,
    '--reader-line-height': `${typography.lineHeight}`,
    '--reader-letter-spacing': `${typography.letterSpacing}em`,
    '--reader-word-spacing': `${typography.wordSpacing}em`,
    '--reader-content-width': WIDTH_VALUES[typography.width] || WIDTH_VALUES.standard,
    '--reader-paragraph-spacing': PARAGRAPH_SPACING_VALUES[typography.paragraphSpacing] || PARAGRAPH_SPACING_VALUES.standard,

    // Bounded section heading sizes (PASS 7D.3)
    '--reader-h2-size': `${activeH2}px`,
    '--reader-h3-size': `${activeH3}px`,
    '--reader-h4-size': `${activeH4}px`,
    '--reader-h5-size': `${activeH5}px`,
    '--reader-h6-size': `${activeH6}px`,

    '--reader-h2-size-mobile': `${mobileH2}px`,
    '--reader-h3-size-mobile': `${mobileH3}px`,
    '--reader-h4-size-mobile': `${mobileH4}px`,
    '--reader-h5-size-mobile': `${mobileH5}px`,
    '--reader-h6-size-mobile': `${mobileH6}px`,

    '--reader-h2-size-desktop': `${desktopH2}px`,
    '--reader-h3-size-desktop': `${desktopH3}px`,
    '--reader-h4-size-desktop': `${desktopH4}px`,
    '--reader-h5-size-desktop': `${desktopH5}px`,
    '--reader-h6-size-desktop': `${desktopH6}px`,
  };
}

export function areTypographyEqual(a: ReaderTypographyValues, b: ReaderTypographyValues): boolean {
  return (
    a.fontFamily === b.fontFamily &&
    a.fontSize === b.fontSize &&
    Math.abs(a.lineHeight - b.lineHeight) < 0.005 &&
    Math.abs(a.letterSpacing - b.letterSpacing) < 0.0015 &&
    Math.abs(a.wordSpacing - b.wordSpacing) < 0.0015 &&
    a.width === b.width &&
    a.fontWeight === b.fontWeight &&
    a.paragraphSpacing === b.paragraphSpacing
  );
}

export function isNonDefaultTypography(prefs: ReaderPreferences, isMobile: boolean): boolean {
  if (prefs.mode === 'auto') return false;
  if (prefs.mode === 'custom') return true;
  if (prefs.mode === 'preset') return prefs.preset !== 'original';
  const effective = getEffectiveTypography(prefs, isMobile);
  const def = isMobile ? MOBILE_DEFAULT : DESKTOP_DEFAULT;
  return !areTypographyEqual(effective, def);
}
