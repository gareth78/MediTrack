import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as fbSignOut, User } from 'firebase/auth';

interface AuthContextProps {
  user: User | null;
  initializing: boolean;
}

const AuthContext = createContext<AuthContextProps>({ user: null, initializing: true });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => {
      setUser(u);
      setInitializing(false);
    });
    return unsub;
  }, []);

  return <AuthContext.Provider value={{ user, initializing }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);

export const signIn = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);
export const signUp = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);
export const signOut = () => fbSignOut(auth);
