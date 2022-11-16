export default function setUserThemePreference(theme: string) {
  localStorage.setItem('theme', JSON.stringify(theme));
}
