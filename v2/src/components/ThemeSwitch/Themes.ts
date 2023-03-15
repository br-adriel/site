export interface ITheme {
  primary: string;
  secondary: string;
  bg: string;
  bg2: string;
  color: string;
  colorAlt: string;
  shadowSm: string;
  shadowMd: string;
}

export const lightTheme: ITheme = {
  primary: '#3a86ff',
  secondary: '#8338ec',
  bg: '#f5f5fa',
  bg2: '#ffffff',
  color: '#000000',
  colorAlt: '#ffffff',
  shadowSm: '0 0 2px rgba(200, 200, 200, 0.1)',
  shadowMd: '0 0 2px rgba(200, 200, 200, 0.2)',
};

export const darkTheme: ITheme = {
  primary: '#3a86ff',
  secondary: '#8338ec',
  bg: '#1f1f1f',
  bg2: '#1A1A1A',
  color: '#ffffff',
  colorAlt: '#000000',
  shadowSm: '0 0 2px rgba(10, 10, 10, 0.1)',
  shadowMd: '0 0 2px rgba(10, 10, 10, 0.2)',
};
