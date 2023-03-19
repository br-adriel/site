import { createGlobalStyle } from 'styled-components';
import { ITheme } from '@/components/ThemeSwitch/Themes';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
    accent-color: ${({ theme }: { theme: ITheme }) => theme.primary};
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Outfit', sans-serif;
    background: ${({ theme }: { theme: ITheme }) => theme.bg};
    color: ${({ theme }: { theme: ITheme }) => theme.color};
    transition: background .3s ease-in-out;
  }

  ::-webkit-scrollbar {
    width: 8px;
    background: ${({ theme }: { theme: ITheme }) => theme.bg};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }: { theme: ITheme }) => theme.primary};
    border-radius: 5px;
  }

  ::selection {
    color: #fff;
    background: #3a8bff;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 5rem;
    font-weight: 600;
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }

  button, .btn {
    padding: 10px;
    border-radius: 5px;
    background: ${({ theme }: { theme: ITheme }) => theme.primary};
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    transition: background .3s ease-in-out;
    
    &:hover {
      background: ${({ theme }: { theme: ITheme }) => theme.secondary};
      color: #fff;
      text-decoration: none;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }: { theme: ITheme }) => theme.primary};
    display: inline-block;
  }

  a:hover {
    color: ${({ theme }: { theme: ITheme }) => theme.secondary};
  }
`;

export default GlobalStyle;
