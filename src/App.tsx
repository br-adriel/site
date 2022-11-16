import { useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import { dark, light } from './components/ThemeSwitch/Themes';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';
import { getUserThemePreference, setUserThemePreference } from './utils';

function App() {
  const helmetContext = {};
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const setTheme = () => {
    setUseDarkTheme((prev) => {
      setUserThemePreference(!prev ? 'dark' : 'light');
      return !prev;
    });
  };

  useEffect(() => {
    const theme = getUserThemePreference();
    if (theme === 'dark') setUseDarkTheme(true);
  }, []);

  return (
    <HelmetProvider context={helmetContext}>
      <ThemeProvider theme={useDarkTheme ? dark : light}>
        <GlobalStyle />
        <ThemeSwitch useDarkTheme={useDarkTheme} setTheme={setTheme} />
        <Outlet />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
