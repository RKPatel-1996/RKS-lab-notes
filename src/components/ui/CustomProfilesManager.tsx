import React, { useState } from 'react';
import { Plus, Edit2, Trash2, RefreshCw, AlertTriangle, Check } from 'lucide-react';
import { useReaderPreferences } from '../../hooks/useReaderPreferences';
import { MAX_SAVED_PROFILES, isNonDefaultTypography, SavedReaderProfile } from '../../lib/readerPreferences';
import { GuidedProfileBuilder } from './GuidedProfileBuilder';

interface CustomProfilesManagerProps {
  compact?: boolean;
}

export const CustomProfilesManager: React.FC<CustomProfilesManagerProps> = ({ compact = false }) => {
  const {
    preferences,
    savedProfiles,
    activeProfileId,
    isModifiedFromActiveProfile,
    isMobile,
    loadProfile,
    updateProfile,
    renameProfile,
    deleteProfile,
  } = useReaderPreferences();

  // Builder wizard state
  const [isBuilderOpen, setIsBuilderOpen] = useState<boolean>(false);
  const [builderInitialStep, setBuilderInitialStep] = useState<number>(1);

  // Secondary management state
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [renameInput, setRenameInput] = useState<string>('');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<{ text: string; isError?: boolean } | null>(null);

  const isAtMaxLimit = savedProfiles.length >= MAX_SAVED_PROFILES;
  const isCustomOrNonDefault = isNonDefaultTypography(preferences, isMobile);
  const activeProfile = savedProfiles.find((p) => p.id === activeProfileId);

  // Start inline rename
  const handleStartRename = (profile: SavedReaderProfile) => {
    setRenamingId(profile.id);
    setRenameInput(profile.name);
    setConfirmDeleteId(null);
  };

  const handleRenameSubmit = (id: string) => {
    const trimmed = renameInput.trim();
    if (!trimmed) {
      setStatusMessage({ text: 'Profile name cannot be empty.', isError: true });
      return;
    }
    const result = renameProfile(id, trimmed);
    if (result.success) {
      setRenamingId(null);
      setRenameInput('');
      setStatusMessage({ text: `Profile renamed to "${trimmed}".` });
      setTimeout(() => setStatusMessage(null), 2500);
    } else {
      setStatusMessage({ text: result.error || 'Rename failed.', isError: true });
    }
  };

  // Delete profile
  const handleDelete = (id: string, name: string) => {
    deleteProfile(id);
    setConfirmDeleteId(null);
    setStatusMessage({ text: `Deleted profile "${name}".` });
    setTimeout(() => setStatusMessage(null), 2500);
  };

  // Open builder from scratch (Question 1)
  const handleOpenNewBuilder = () => {
    setBuilderInitialStep(1);
    setIsBuilderOpen(true);
  };

  // Open builder directly to save current tuned settings (Question 6)
  const handleSaveCurrentAsProfile = () => {
    setBuilderInitialStep(6);
    setIsBuilderOpen(true);
  };

  // If builder is active, render the guided question flow
  if (isBuilderOpen) {
    return (
      <GuidedProfileBuilder
        compact={compact}
        initialStep={builderInitialStep}
        onComplete={(savedName) => {
          setIsBuilderOpen(false);
          setStatusMessage({ text: `Saved profile "${savedName}".` });
          setTimeout(() => setStatusMessage(null), 3000);
        }}
        onCancel={() => {
          setIsBuilderOpen(false);
        }}
      />
    );
  }

  return (
    <div className={`font-mono text-ink dark:text-white select-none ${compact ? 'space-y-3' : 'space-y-4'}`}>
      {/* Status or Alert Notification */}
      {statusMessage && (
        <div
          role="status"
          className={`p-2 text-[10px] font-bold border transition-all ${
            statusMessage.isError
              ? 'border-red-600 bg-red-50 text-red-700 dark:bg-red-950/50 dark:text-red-300'
              : 'border-green-600 bg-green-50 text-green-700 dark:bg-green-950/50 dark:text-green-300'
          }`}
        >
          {statusMessage.text}
        </div>
      )}

      {/* =========================================================================
          1. HEADER & PRIMARY "NEW PROFILE" ACTION
         ========================================================================= */}
      <div className="flex items-center justify-between pb-2 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-pencil dark:text-gray-400 font-bold">
            SAVED PROFILES
          </span>
          <span className="text-[9px] font-bold px-1.5 py-0.5 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-900">
            {savedProfiles.length} / {MAX_SAVED_PROFILES}
          </span>
        </div>

        <button
          type="button"
          disabled={isAtMaxLimit}
          onClick={handleOpenNewBuilder}
          aria-label="Create new profile with guided wizard"
          title={isAtMaxLimit ? 'Maximum profiles reached' : 'Create new profile'}
          className="py-1 px-2 border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-bold text-[9px] uppercase flex items-center gap-1 hover:opacity-85 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:shadow-[1px_1px_0px_0px_#ffffff]"
        >
          <Plus size={11} />
          <span>NEW PROFILE</span>
        </button>
      </div>

      {/* =========================================================================
          2. CONTEXTUAL SAVE BANNERS (Workflow A: Tune then save)
         ========================================================================= */}
      {/* Case A: Active Profile has been modified */}
      {activeProfile && isModifiedFromActiveProfile && (
        <div className="p-2.5 border-2 border-amber-500 dark:border-amber-400 bg-amber-50 dark:bg-amber-950/30 space-y-2 shadow-[2px_2px_0px_0px_rgba(245,158,11,1)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase">
              <RefreshCw size={12} className="animate-spin-once" />
              <span>ACTIVE PROFILE MODIFIED</span>
            </div>
            <span className="text-[9px] font-bold text-pencil dark:text-gray-400 truncate max-w-[120px]">
              &ldquo;{activeProfile.name}&rdquo;
            </span>
          </div>

          <div className="flex items-center gap-2 pt-1">
            <button
              type="button"
              onClick={() => {
                const res = updateProfile(activeProfile.id);
                if (res.success) {
                  setStatusMessage({ text: `Updated "${activeProfile.name}" with current settings.` });
                  setTimeout(() => setStatusMessage(null), 2500);
                }
              }}
              className="flex-1 py-1 px-2 border border-amber-600 bg-amber-600 text-white dark:bg-amber-500 dark:border-amber-500 dark:text-black font-bold text-[9px] uppercase hover:opacity-90 active:scale-95"
            >
              UPDATE PROFILE
            </button>
            <button
              type="button"
              disabled={isAtMaxLimit}
              onClick={handleSaveCurrentAsProfile}
              className="flex-1 py-1 px-2 border border-black dark:border-white bg-white dark:bg-black text-ink dark:text-white font-bold text-[9px] uppercase hover:bg-gray-100 dark:hover:bg-gray-900 active:scale-95 disabled:opacity-30"
            >
              SAVE AS NEW
            </button>
          </div>
        </div>
      )}

      {/* Case B: Custom tuning without active profile */}
      {!activeProfile && isCustomOrNonDefault && (
        <div className="p-2.5 border-2 border-black dark:border-white bg-gray-50 dark:bg-gray-900 space-y-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wide">
              CUSTOM SETTINGS TUNED
            </span>
            <span className="text-[8px] font-bold px-1 py-0.5 border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black">
              MODIFIED
            </span>
          </div>
          <p className="text-[9px] text-pencil dark:text-gray-400">
            You have modified reader typography. Save this configuration as a one-click profile:
          </p>
          <button
            type="button"
            disabled={isAtMaxLimit}
            onClick={handleSaveCurrentAsProfile}
            className="w-full py-1.5 px-2 border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-bold text-[10px] uppercase hover:opacity-85 active:scale-95 disabled:opacity-30 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:shadow-[1px_1px_0px_0px_#ffffff]"
          >
            SAVE CURRENT AS PROFILE
          </button>
        </div>
      )}

      {/* =========================================================================
          3. SAVED PROFILE LIST (One-click direct choices)
         ========================================================================= */}
      <div>
        {savedProfiles.length === 0 ? (
          <div className="p-4 border border-dashed border-gray-300 dark:border-gray-700 text-center space-y-2">
            <p className="text-[10px] text-pencil dark:text-gray-400">
              No saved profiles yet.
            </p>
            <button
              type="button"
              onClick={handleOpenNewBuilder}
              className="py-1.5 px-3 border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black text-[10px] font-bold uppercase hover:opacity-85 active:scale-95"
            >
              CREATE FIRST PROFILE
            </button>
          </div>
        ) : (
          <div className="space-y-1.5" role="radiogroup" aria-label="Saved reader profiles">
            {savedProfiles.map((profile) => {
              const isActive = activeProfileId === profile.id;
              const isRenaming = renamingId === profile.id;
              const isDeleting = confirmDeleteId === profile.id;

              return (
                <div
                  key={profile.id}
                  className={`border transition-all ${
                    isActive
                      ? 'border-black dark:border-white bg-black text-white dark:bg-white dark:text-black font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_#ffffff]'
                      : 'border-gray-300 dark:border-gray-800 bg-white dark:bg-black text-ink dark:text-white hover:border-black dark:hover:border-white'
                  }`}
                >
                  {/* Inline Renaming Mode */}
                  {isRenaming ? (
                    <div className="p-2 space-y-2 bg-paper dark:bg-black text-ink dark:text-white">
                      <div className="text-[9px] uppercase font-bold text-pencil dark:text-gray-400">
                        RENAME PROFILE
                      </div>
                      <input
                        type="text"
                        maxLength={32}
                        value={renameInput}
                        onChange={(e) => setRenameInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleRenameSubmit(profile.id);
                          if (e.key === 'Escape') setRenamingId(null);
                        }}
                        autoFocus
                        className="w-full px-2 py-1 text-xs border border-black dark:border-white bg-white dark:bg-black text-ink dark:text-white font-mono focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white"
                      />
                      <div className="flex items-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => handleRenameSubmit(profile.id)}
                          className="py-1 px-2 border border-black dark:border-white bg-black text-white dark:bg-white dark:text-black text-[9px] font-bold uppercase"
                        >
                          SAVE
                        </button>
                        <button
                          type="button"
                          onClick={() => setRenamingId(null)}
                          className="py-1 px-2 border border-black dark:border-white bg-white dark:bg-black text-ink dark:text-white text-[9px] font-bold uppercase"
                        >
                          CANCEL
                        </button>
                      </div>
                    </div>
                  ) : isDeleting ? (
                    /* Inline Delete Confirmation Mode */
                    <div className="p-2 space-y-2 bg-paper dark:bg-black text-ink dark:text-white">
                      <div className="text-[9px] uppercase text-red-600 dark:text-red-400 font-bold flex items-center gap-1">
                        <AlertTriangle size={12} />
                        <span>CONFIRM DELETE &ldquo;{profile.name}&rdquo;?</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleDelete(profile.id, profile.name)}
                          className="flex-1 py-1 px-2 border border-red-600 bg-red-600 text-white text-[9px] font-bold uppercase hover:bg-red-700"
                        >
                          DELETE
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteId(null)}
                          className="py-1 px-2 border border-black dark:border-white bg-white dark:bg-black text-ink dark:text-white text-[9px] font-bold uppercase"
                        >
                          CANCEL
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Normal Compact Profile Row: Direct One-Click Load */
                    <div className="flex items-stretch justify-between">
                      {/* One-click profile application button */}
                      <button
                        type="button"
                        role="radio"
                        aria-checked={isActive}
                        onClick={() => loadProfile(profile.id)}
                        aria-label={`Apply profile ${profile.name}`}
                        className="flex-1 p-2 text-left flex items-center justify-between min-w-0 transition-colors cursor-pointer group"
                      >
                        <div className="min-w-0 pr-2">
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-xs uppercase tracking-wide truncate">
                              {profile.name}
                            </span>
                            {profile.optionalTheme && (
                              <span
                                className={`text-[8px] font-bold px-1 py-0.5 border ${
                                  isActive
                                    ? 'border-white text-white dark:border-black dark:text-black'
                                    : 'border-gray-300 dark:border-gray-700 text-pencil dark:text-gray-400'
                                }`}
                              >
                                {profile.optionalTheme.toUpperCase()}
                              </span>
                            )}
                          </div>
                          <div
                            className={`text-[9px] mt-0.5 flex items-center gap-1.5 truncate ${
                              isActive ? 'opacity-85' : 'text-pencil dark:text-gray-400'
                            }`}
                          >
                            <span>{profile.typography.fontSize}px</span>
                            <span>•</span>
                            <span className="capitalize">{profile.typography.fontFamily}</span>
                            <span>•</span>
                            <span>LH {profile.typography.lineHeight}</span>
                          </div>
                        </div>

                        {/* Active Indicator Checkmark */}
                        {isActive && (
                          <div className="shrink-0 flex items-center gap-1 text-[8px] font-bold tracking-wider uppercase pl-1">
                            <Check size={14} className="shrink-0" />
                          </div>
                        )}
                      </button>

                      {/* Secondary Action Controls: Rename & Delete */}
                      <div
                        className={`flex items-center px-1.5 border-l ${
                          isActive
                            ? 'border-white/20 dark:border-black/20'
                            : 'border-gray-200 dark:border-gray-800'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => handleStartRename(profile)}
                          aria-label={`Rename ${profile.name}`}
                          title="Rename profile"
                          className={`p-1 transition-colors hover:opacity-100 ${
                            isActive ? 'opacity-70 hover:opacity-100' : 'text-pencil hover:text-ink dark:text-gray-400 dark:hover:text-white'
                          }`}
                        >
                          <Edit2 size={11} />
                        </button>
                        <button
                          type="button"
                          onClick={() => setConfirmDeleteId(profile.id)}
                          aria-label={`Delete ${profile.name}`}
                          title="Delete profile"
                          className={`p-1 transition-colors hover:opacity-100 ${
                            isActive ? 'opacity-70 hover:text-red-300' : 'text-pencil hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400'
                          }`}
                        >
                          <Trash2 size={11} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
