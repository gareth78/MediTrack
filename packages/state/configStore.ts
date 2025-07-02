import { create } from 'zustand';
import firestoreMiddleware from './firestoreMiddleware';

interface ConfigState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useConfigStore = create<ConfigState>(
  firestoreMiddleware('config', set => ({
    darkMode: false,
    toggleDarkMode: () => set(state => ({ darkMode: !state.darkMode })),
  }))
);
