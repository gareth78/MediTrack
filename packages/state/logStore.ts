import { create } from 'zustand';
import firestoreMiddleware from './firestoreMiddleware';

export interface Log {
  id: string;
  text: string;
  createdAt: number;
}

interface LogState {
  logs: Log[];
  addLog: (text: string) => void;
}

export const useLogStore = create<LogState>(
  firestoreMiddleware('logs', set => ({
    logs: [],
    addLog: text =>
      set(state => ({
        logs: [...state.logs, { id: Date.now().toString(), text, createdAt: Date.now() }],
      })),
  }))
);
