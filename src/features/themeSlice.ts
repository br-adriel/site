import { darkTheme, lightTheme } from '@/components/ThemeSwitch/Themes';
import { RootState } from '@/store';
import { setUserDarkThemePreference } from '@/utils/userThemePreference';
import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    useDark: false,
    theme: lightTheme,
  },
  reducers: {
    setDarkTheme(state) {
      state.useDark = true;
      state.theme = darkTheme;
      setUserDarkThemePreference(true);
    },
    setLightTheme(state) {
      state.useDark = false;
      state.theme = lightTheme;
      setUserDarkThemePreference(false);
    },
    switchTheme(state) {
      state.useDark = !state.useDark;
      state.theme = state.useDark ? darkTheme : lightTheme;
      setUserDarkThemePreference(state.useDark);
    },
  },
});

export const { switchTheme, setDarkTheme, setLightTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;

const themeReducer = themeSlice.reducer;
export default themeReducer;
