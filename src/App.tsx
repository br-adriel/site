import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import { dark, light } from './components/ThemeSwitch/Themes';
import ThemeSwitch from './components/ThemeSwitch/ThemeSwitch';

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const setTheme = () => setUseDarkTheme((prev) => !prev);

  return (
    <ThemeProvider theme={useDarkTheme ? dark : light}>
      <GlobalStyle />
      <ThemeSwitch useDarkTheme={useDarkTheme} setTheme={setTheme} />
      <Outlet />
    </ThemeProvider>
  );
}

export default App;
