'use client';

import { auth } from '@/services/firebase/firebase.config';
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IContext {
  user: User | null | undefined;
  login: (email: string, password: string) => void;
  logout: () => void;
  loginStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const AuthContext = createContext<IContext>({
  user: undefined,
  login: (email: string, password: string) => {},
  logout: () => {},
  loginStatus: 'idle',
});

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>();
  const [loginStatus, setLoginStatus] = useState<
    'idle' | 'loading' | 'succeeded' | 'failed'
  >('idle');

  const login = async (email: string, password: string) => {
    try {
      setLoginStatus('loading');
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      setLoginStatus('succeeded');
    } catch (err) {
      setLoginStatus('failed');
    }
  };

  const logout = async () => {
    setLoginStatus('loading');
    await signOut(auth);
    setLoginStatus('idle');
  };

  useEffect(() => {
    setLoginStatus('loading');
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) setLoginStatus('succeeded');
      else setLoginStatus('idle');
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout, loginStatus }}>
      {children}
    </AuthContext.Provider>
  );
};

export const getUserAuth = () => {
  return useContext(AuthContext);
};
