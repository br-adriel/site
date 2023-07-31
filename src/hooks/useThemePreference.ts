import { useEffect, useState } from 'react';

export default function useThemePreference(): [boolean, () => void] {
  const [usingDarkTheme, setDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    if (usingDarkTheme) {
      localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark');
    }
    else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    setDarkTheme((prev) => !prev);
  };

  useEffect(() => {
    let useDark = false;
    const savedPreference = localStorage.getItem('theme');

    if (savedPreference) {
      useDark = savedPreference === 'dark'
    } else {
      useDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      localStorage.setItem('theme', useDark ? 'dark' : 'light')
    }

    if (useDark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')

    setDarkTheme(useDark)
  }, []);

  return [usingDarkTheme, toggleTheme];
}
