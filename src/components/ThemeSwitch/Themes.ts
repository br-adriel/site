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
  primary: '#0072e7',
  secondary: '#8338ec',
  bg: '#f5f5fa',
  bg2: '#ffffff',
  color: '#000000',
  colorAlt: '#ffffff',
  shadowSm: 'rgba(200, 200, 200, 0.2)',
  shadowMd: 'rgba(200, 200, 200, 0.4)',
};

export const darkTheme: ITheme = {
  primary: '#0072e7',
  secondary: '#8338ec',
  bg: '#1f1f1f',
  bg2: '#1A1A1A',
  color: '#ffffff',
  colorAlt: '#000000',
  shadowSm: 'rgba(0, 0, 0, 0.2)',
  shadowMd: 'rgba(0, 0, 0, 0.4)',
};
