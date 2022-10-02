import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
    accent-color: #3a8bff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Outfit', sans-serif;
    scrollbar-width: none;
  }

  ::-webkit-scrollbar {
    display: none;
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
    background: #fdfeff;
  }

  h1 {
    font-size: 5rem;
    font-weight: 600;
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
  }
`;

export default GlobalStyle;
