export interface ITheme {
  primary: string;
  secondary: string;
  bg: string;
  bg2: string;
  color: string;
  colorAlt: string;
}

export const light: ITheme = {
  primary: '#3a86ff',
  secondary: '#8338ec',
  bg: '#f5f5fa',
  bg2: '#ffffff',
  color: '#000000',
  colorAlt: '#ffffff',
};

export const dark: ITheme = {
  primary: '#3a86ff',
  secondary: '#8338ec',
  bg: '#1f1f1f',
  bg2: '#111111',
  color: '#ffffff',
  colorAlt: '#000000',
};
