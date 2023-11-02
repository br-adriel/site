'use client';

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface IContext {
  usingDarkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IContext>({
  usingDarkTheme: false,
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
  const [usingDarkTheme, setDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    if (usingDarkTheme) {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    setDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    let useDark = false;
    const savedPreference = localStorage.getItem('theme');

    if (savedPreference) {
      useDark = savedPreference === 'dark';
    } else {
      useDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      localStorage.setItem('theme', useDark ? 'dark' : 'light');
    }

    if (useDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');

    setDarkTheme(useDark);
  }, []);

  return (
    <ThemeContext.Provider value={{ usingDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const getThemePreference = () => {
  return useContext(ThemeContext);
};
