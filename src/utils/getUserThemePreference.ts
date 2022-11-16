export default function getUserThemePreference() {
  let theme = localStorage.getItem('theme');
  if (theme) {
    theme = JSON.parse(theme);
    return theme;
  }
  const darkBrowser = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (darkBrowser) return 'dark';
  else return 'light';
}
