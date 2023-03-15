import {
  selectTheme,
  setDarkTheme,
  setLightTheme,
} from '@/features/themeSlice';
import { userPrefersDarkTheme } from '@/utils/userThemePreference';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

const ThemeWrapper: React.FC<{ children: any }> = ({ children }) => {
  const { theme } = useSelector(selectTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userPrefersDarkTheme()) dispatch(setDarkTheme());
    else dispatch(setLightTheme());
  }, []);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
