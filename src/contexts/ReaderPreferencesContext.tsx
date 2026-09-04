import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import {
  ReaderPreferences,
  ReaderPreset,
  ReaderTypographyValues,
  DeviceReadingMode,
  PRESETS,
  CANONICAL_ORIGINAL,
  DESKTOP_DEFAULT,
  MOBILE_DEFAULT,
  loadSavedPreferences,
  savePreferences,
  determineActivePreset,
  getEffectiveTypography,
  getReaderCssVariables,
  SavedReaderProfile,
  loadSavedProfiles,
  saveProfilesToStorage,
  generateProfileId,
  MAX_SAVED_PROFILES,
  areTypographyEqual,
} from '../lib/readerPreferences';

export interface SaveProfileResult {
  success: boolean;
  error?: string;
  duplicateProfile?: SavedReaderProfile;
  profile?: SavedReaderProfile;
}

export interface ReaderPreferencesContextType {
  preferences: ReaderPreferences;
  effectiveTypography: ReaderTypographyValues;
  mode: DeviceReadingMode;
  activePreset: ReaderPreset;
  isMobile: boolean;
  cssVariables: React.CSSProperties;
  applyDeviceMode: (mode: 'auto' | 'desktop' | 'mobile') => void;
  applyPreset: (preset: Exclude<ReaderPreset, 'custom'>) => void;
  updateField: <K extends keyof ReaderTypographyValues>(key: K, value: ReaderTypographyValues[K]) => void;
  applyAutoDefault: () => void;
  resetToOriginal: () => void;

  // Font size helpers (15px to 24px unified range)
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  canIncreaseFontSize: boolean;
  canDecreaseFontSize: boolean;

  // Focus reading mode
  isFocusMode: boolean;
  toggleFocusMode: () => void;
  setIsFocusMode: (val: boolean) => void;

  // Desktop left rail coordination
  isLeftRailExpanded: boolean;
  toggleLeftRail: () => void;
  setIsLeftRailExpanded: (val: boolean) => void;

  // Desktop right rail
  isDesktopRailExpanded: boolean;
  toggleDesktopRail: () => void;
  setIsDesktopRailExpanded: (val: boolean) => void;

  // Close all expanded desktop rails (used on outside-click)
  closeAllRails: () => void;

  // Mobile bottom sheet
  isMobileSheetOpen: boolean;
  toggleMobileSheet: () => void;
  setIsMobileSheetOpen: (val: boolean) => void;

  // Dark mode awareness & theme toggle support
  isDarkMode: boolean;
  toggleTheme?: () => void;
  setTheme?: (dark: boolean) => void;

  // Custom Saved Profiles (PASS 7D.5 & PASS 7D.6)
  savedProfiles: SavedReaderProfile[];
  activeProfileId: string | null;
  isModifiedFromActiveProfile: boolean;
  saveCurrentProfile: (
    name: string,
    includeTheme: boolean | 'light' | 'dark' | 'keep',
    overwriteId?: string,
    customTypography?: ReaderTypographyValues
  ) => SaveProfileResult;
  restorePreferences: (targetPrefs: ReaderPreferences, activeId?: string | null) => void;
  loadProfile: (id: string) => void;
  updateProfile: (id: string) => SaveProfileResult;
  renameProfile: (id: string, newName: string) => SaveProfileResult;
  deleteProfile: (id: string) => void;
}

const ReaderPreferencesContext = createContext<ReaderPreferencesContextType | null>(null);

interface ReaderPreferencesProviderProps {
  children: React.ReactNode;
  isDarkMode?: boolean;
  toggleTheme?: () => void;
  setTheme?: (dark: boolean) => void;
}

export const ReaderPreferencesProvider: React.FC<ReaderPreferencesProviderProps> = ({ 
  children,
  isDarkMode = false,
  toggleTheme,
  setTheme,
}) => {
  const [preferences, setPreferences] = useState<ReaderPreferences>(() => loadSavedPreferences());

  // Track viewport breakpoint: < 768px matches mobile 'md' threshold
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
  });

  // Focus view mode state
  const [isFocusMode, setIsFocusMode] = useState<boolean>(false);

  // Desktop left rail expanded state
  const [isLeftRailExpanded, setIsLeftRailExpanded] = useState<boolean>(false);

  // Desktop right rail expanded state (default: collapsed)
  const [isDesktopRailExpanded, setIsDesktopRailExpanded] = useState<boolean>(false);

  // Mobile bottom sheet open state (default: closed)
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState<boolean>(false);

  // Custom Saved Profiles State (PASS 7D.5)
  const [savedProfiles, setSavedProfiles] = useState<SavedReaderProfile[]>(() => loadSavedProfiles());
  const [activeProfileId, setActiveProfileId] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(max-width: 767px)');
    const onChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(e.matches);
    };

    if (mql.addEventListener) {
      mql.addEventListener('change', onChange);
    } else {
      mql.addListener(onChange);
    }
    setIsMobile(mql.matches);

    return () => {
      if (mql.removeEventListener) {
        mql.removeEventListener('change', onChange);
      } else {
        mql.removeListener(onChange);
      }
    };
  }, []);

  // Compute effective typography based on mode, viewport, and overrides
  const effectiveTypography = useMemo(() => {
    return getEffectiveTypography(preferences, isMobile);
  }, [preferences, isMobile]);

  // Derived semantic state (PASS 7F Invariant 3): Never rely on drifting manual booleans
  const isModifiedFromActiveProfile = useMemo(() => {
    if (!activeProfileId) return false;
    const activeProfile = savedProfiles.find((p) => p.id === activeProfileId);
    if (!activeProfile) return false;

    const typographyModified = !areTypographyEqual(effectiveTypography, activeProfile.typography);
    const themeModified =
      activeProfile.optionalTheme !== undefined &&
      (isDarkMode ? 'dark' : 'light') !== activeProfile.optionalTheme;

    return typographyModified || themeModified;
  }, [activeProfileId, savedProfiles, effectiveTypography, isDarkMode]);

  // Compute CSS variables
  const cssVariables = useMemo(() => {
    return getReaderCssVariables(effectiveTypography, isMobile) as React.CSSProperties;
  }, [effectiveTypography, isMobile]);

  // Apply to document root for global CSS var cascade while on article pages
  useEffect(() => {
    const vars = getReaderCssVariables(effectiveTypography, isMobile);
    const root = document.documentElement;
    Object.entries(vars).forEach(([key, val]) => {
      root.style.setProperty(key, val);
    });

    return () => {
      // Revert to canonical desktop defaults on unmount
      const defaultVars = getReaderCssVariables(DESKTOP_DEFAULT, false);
      Object.entries(defaultVars).forEach(([key, val]) => {
        root.style.setProperty(key, val);
      });
    };
  }, [effectiveTypography, isMobile]);

  // Top-level Reading Mode: AUTO, DESKTOP, MOBILE
  const applyDeviceMode = useCallback((mode: 'auto' | 'desktop' | 'mobile') => {
    setPreferences((_prev) => {
      let nextTypography: ReaderTypographyValues;
      if (mode === 'auto') {
        nextTypography = isMobile ? MOBILE_DEFAULT : DESKTOP_DEFAULT;
      } else if (mode === 'desktop') {
        nextTypography = DESKTOP_DEFAULT;
      } else {
        nextTypography = MOBILE_DEFAULT;
      }

      const next: ReaderPreferences = {
        mode,
        preset: determineActivePreset(nextTypography),
        ...nextTypography,
      };
      savePreferences(next);
      return next;
    });
  }, [isMobile]);

  // Standard Presets: ORIGINAL, COMFORT, FOCUS, ACCESSIBLE
  const applyPreset = useCallback((presetKey: Exclude<ReaderPreset, 'custom'>) => {
    const target = PRESETS[presetKey];
    if (target) {
      const next: ReaderPreferences = {
        mode: 'preset',
        preset: presetKey,
        ...target,
      };
      setPreferences(next);
      savePreferences(next);
    }
  }, []);

  // Micro-adjustment field update: automatically switches to 'custom' mode so resize won't clobber
  const updateField = useCallback(<K extends keyof ReaderTypographyValues>(
    key: K,
    value: ReaderTypographyValues[K]
  ) => {
    setPreferences((prev) => {
      const currentEffective = getEffectiveTypography(prev, isMobile);
      const updatedTypography: ReaderTypographyValues = {
        ...currentEffective,
        [key]: value,
      };

      const next: ReaderPreferences = {
        ...updatedTypography,
        mode: 'custom',
        preset: determineActivePreset(updatedTypography),
      };
      savePreferences(next);
      return next;
    });
  }, [isMobile]);

  // Return to responsive Desktop/Mobile defaults
  const applyAutoDefault = useCallback(() => {
    const nextTypography = isMobile ? MOBILE_DEFAULT : DESKTOP_DEFAULT;
    const next: ReaderPreferences = {
      mode: 'auto',
      preset: determineActivePreset(nextTypography),
      ...nextTypography,
    };
    setPreferences(next);
    savePreferences(next);
    setActiveProfileId(null);
  }, [isMobile]);

  // Return to canonical RKS original typography (Does NOT delete saved profiles)
  const resetToOriginal = useCallback(() => {
    const next: ReaderPreferences = {
      mode: 'preset',
      preset: 'original',
      ...CANONICAL_ORIGINAL,
    };
    setPreferences(next);
    savePreferences(next);
    setActiveProfileId(null);
  }, []);

  // Unified Font Size Increment / Decrement
  const canIncreaseFontSize = effectiveTypography.fontSize < 24;
  const canDecreaseFontSize = effectiveTypography.fontSize > 15;

  const increaseFontSize = useCallback(() => {
    updateField('fontSize', Math.min(24, effectiveTypography.fontSize + 1));
  }, [effectiveTypography.fontSize, updateField]);

  const decreaseFontSize = useCallback(() => {
    updateField('fontSize', Math.max(15, effectiveTypography.fontSize - 1));
  }, [effectiveTypography.fontSize, updateField]);

  // Toggle Focus Mode
  const toggleFocusMode = useCallback(() => {
    setIsFocusMode((prev) => {
      const next = !prev;
      // When activating focus mode, collapse desktop rails if open
      if (next) {
        setIsDesktopRailExpanded(false);
        setIsLeftRailExpanded(false);
      }
      return next;
    });
  }, []);

  // Left rail toggle (enforces mutual exclusivity with desktop right rail)
  const toggleLeftRail = useCallback(() => {
    setIsLeftRailExpanded((prev) => {
      const next = !prev;
      if (next) {
        setIsDesktopRailExpanded(false);
      }
      return next;
    });
  }, []);

  // Toggle Desktop Right Rail (enforces mutual exclusivity with desktop left rail)
  const toggleDesktopRail = useCallback(() => {
    setIsDesktopRailExpanded((prev) => {
      const next = !prev;
      if (next) {
        setIsLeftRailExpanded(false);
      }
      return next;
    });
  }, []);

  // Close all expanded rails (outside-click behavior)
  const closeAllRails = useCallback(() => {
    setIsDesktopRailExpanded(false);
    setIsLeftRailExpanded(false);
  }, []);

  // Toggle Mobile Sheet
  const toggleMobileSheet = useCallback(() => {
    setIsMobileSheetOpen((prev) => !prev);
  }, []);

  // Restore exact snapshot of preferences and active profile (used on Cancel in profile builder)
  const restorePreferences = useCallback((targetPrefs: ReaderPreferences, activeId: string | null = null) => {
    setPreferences(targetPrefs);
    savePreferences(targetPrefs);
    setActiveProfileId(activeId);
  }, []);

  // =========================================================================
  // CUSTOM SAVED PROFILES CRUD (PASS 7D.5 & PASS 7D.6)
  // =========================================================================

  const saveCurrentProfile = useCallback((
    name: string,
    includeTheme: boolean | 'light' | 'dark' | 'keep',
    overwriteId?: string,
    customTypography?: ReaderTypographyValues
  ): SaveProfileResult => {
    const trimmed = name.trim();
    if (!trimmed) {
      return { success: false, error: 'Profile name cannot be empty.' };
    }
    if (trimmed.length > 32) {
      return { success: false, error: 'Profile name must be 32 characters or less.' };
    }

    // Check for duplicate names if not explicitly overwriting
    const existing = savedProfiles.find(
      (p) => p.name.toLowerCase() === trimmed.toLowerCase()
    );

    if (existing && (!overwriteId || existing.id !== overwriteId)) {
      return {
        success: false,
        error: 'duplicate',
        duplicateProfile: existing,
      };
    }

    // Check maximum profile limit
    if (!overwriteId && savedProfiles.length >= MAX_SAVED_PROFILES) {
      return {
        success: false,
        error: `Profile limit reached (max ${MAX_SAVED_PROFILES}). Please delete an existing profile to save a new one.`,
      };
    }

    const typography = customTypography ? { ...customTypography } : { ...effectiveTypography };
    let optionalTheme: 'light' | 'dark' | undefined;
    if (includeTheme === 'dark') {
      optionalTheme = 'dark';
    } else if (includeTheme === 'light') {
      optionalTheme = 'light';
    } else if (includeTheme === 'keep' || includeTheme === false) {
      optionalTheme = undefined;
    } else {
      optionalTheme = isDarkMode ? 'dark' : 'light';
    }

    if (overwriteId) {
      const updatedList = savedProfiles.map((p) =>
        p.id === overwriteId
          ? {
              ...p,
              name: trimmed,
              updatedAt: Date.now(),
              typography,
              optionalTheme,
            }
          : p
      );
      setSavedProfiles(updatedList);
      saveProfilesToStorage(updatedList);
      setActiveProfileId(overwriteId);
      return { success: true };
    }

    const newProfile: SavedReaderProfile = {
      id: generateProfileId(),
      name: trimmed,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      typography,
      optionalTheme,
    };

    const updatedList = [...savedProfiles, newProfile];
    setSavedProfiles(updatedList);
    saveProfilesToStorage(updatedList);
    setActiveProfileId(newProfile.id);
    return { success: true, profile: newProfile };
  }, [savedProfiles, effectiveTypography, isDarkMode]);

  const loadProfile = useCallback((id: string) => {
    const profile = savedProfiles.find((p) => p.id === id);
    if (!profile) return;

    // 1. Apply typography immediately to article in real time
    const target = profile.typography;
    const next: ReaderPreferences = {
      ...target,
      mode: 'custom',
      preset: determineActivePreset(target),
    };
    setPreferences(next);
    savePreferences(next);
    setActiveProfileId(id);

    // 2. Apply optional theme if explicitly captured
    if (profile.optionalTheme && setTheme) {
      setTheme(profile.optionalTheme === 'dark');
    }
  }, [savedProfiles, setTheme]);

  const updateProfile = useCallback((id: string): SaveProfileResult => {
    const profile = savedProfiles.find((p) => p.id === id);
    if (!profile) {
      return { success: false, error: 'Profile not found.' };
    }

    // Retain optionalTheme preference if it was previously theme-bound, updating to current theme
    const optionalTheme: 'light' | 'dark' | undefined =
      profile.optionalTheme !== undefined ? (isDarkMode ? 'dark' : 'light') : undefined;

    const updatedList = savedProfiles.map((p) =>
      p.id === id
        ? {
            ...p,
            updatedAt: Date.now(),
            typography: { ...effectiveTypography },
            optionalTheme,
          }
        : p
    );
    setSavedProfiles(updatedList);
    saveProfilesToStorage(updatedList);
    setActiveProfileId(id);
    return { success: true };
  }, [savedProfiles, effectiveTypography, isDarkMode]);

  const renameProfile = useCallback((id: string, newName: string): SaveProfileResult => {
    const trimmed = newName.trim();
    if (!trimmed) {
      return { success: false, error: 'Profile name cannot be empty.' };
    }
    if (trimmed.length > 32) {
      return { success: false, error: 'Profile name must be 32 characters or less.' };
    }

    const duplicate = savedProfiles.find(
      (p) => p.id !== id && p.name.toLowerCase() === trimmed.toLowerCase()
    );
    if (duplicate) {
      return { success: false, error: `A profile named "${trimmed}" already exists.` };
    }

    const updatedList = savedProfiles.map((p) =>
      p.id === id ? { ...p, name: trimmed, updatedAt: Date.now() } : p
    );
    setSavedProfiles(updatedList);
    saveProfilesToStorage(updatedList);
    return { success: true };
  }, [savedProfiles]);

  const deleteProfile = useCallback((id: string) => {
    const updatedList = savedProfiles.filter((p) => p.id !== id);
    setSavedProfiles(updatedList);
    saveProfilesToStorage(updatedList);
    if (activeProfileId === id) {
      setActiveProfileId(null);
    }
  }, [savedProfiles, activeProfileId]);

  const value = useMemo<ReaderPreferencesContextType>(() => ({
    preferences,
    effectiveTypography,
    mode: preferences.mode,
    activePreset: preferences.preset,
    isMobile,
    cssVariables,
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
    setIsFocusMode,
    isLeftRailExpanded,
    toggleLeftRail,
    setIsLeftRailExpanded,
    isDesktopRailExpanded,
    toggleDesktopRail,
    setIsDesktopRailExpanded,
    closeAllRails,
    isMobileSheetOpen,
    toggleMobileSheet,
    setIsMobileSheetOpen,
    isDarkMode,
    toggleTheme,
    setTheme,
    savedProfiles,
    activeProfileId,
    isModifiedFromActiveProfile,
    saveCurrentProfile,
    restorePreferences,
    loadProfile,
    updateProfile,
    renameProfile,
    deleteProfile,
  }), [
    preferences,
    effectiveTypography,
    isMobile,
    cssVariables,
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
    isLeftRailExpanded,
    toggleLeftRail,
    isDesktopRailExpanded,
    toggleDesktopRail,
    closeAllRails,
    isMobileSheetOpen,
    toggleMobileSheet,
    isDarkMode,
    toggleTheme,
    setTheme,
    savedProfiles,
    activeProfileId,
    isModifiedFromActiveProfile,
    saveCurrentProfile,
    restorePreferences,
    loadProfile,
    updateProfile,
    renameProfile,
    deleteProfile,
  ]);

  return (
    <ReaderPreferencesContext.Provider value={value}>
      {children}
    </ReaderPreferencesContext.Provider>
  );
};

export function useReaderPreferencesContext(): ReaderPreferencesContextType {
  const context = useContext(ReaderPreferencesContext);
  if (!context) {
    throw new Error('useReaderPreferencesContext must be used within a ReaderPreferencesProvider');
  }
  return context;
}
