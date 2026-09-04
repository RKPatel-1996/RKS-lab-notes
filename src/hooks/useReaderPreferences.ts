import { useReaderPreferencesContext, ReaderPreferencesContextType } from '../contexts/ReaderPreferencesContext';

export function useReaderPreferences(): ReaderPreferencesContextType {
  return useReaderPreferencesContext();
}

export { useReaderPreferencesContext };
export type { ReaderPreferencesContextType };
