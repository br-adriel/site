export function userPrefersDarkTheme() {
  const storedTheme = localStorage.getItem('useDarkTheme');
  let useDark = false;
  if (storedTheme) {
    useDark = JSON.parse(storedTheme);
    return useDark;
  }

  const darkBrowserPreference = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;
  if (darkBrowserPreference) return true;
  else return false;
}

export function setUserDarkThemePreference(prefersDark: boolean) {
  localStorage.setItem('useDarkTheme', JSON.stringify(prefersDark));
}
