import { useState } from 'react';
import { useRouteError } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import ContainerSection from '../components/ContainerSection';
import ErrorDisplay from '../components/ErrorDisplay';
import GlobalStyle from '../components/GlobalStyle';
import { dark, light } from '../components/ThemeSwitch/Themes';
import ThemeSwitch from '../components/ThemeSwitch/ThemeSwitch';

const Error = () => {
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const setTheme = () => setUseDarkTheme((prev) => !prev);

  const error = useRouteError() as any;
  console.table(error);
  return (
    <ThemeProvider theme={useDarkTheme ? dark : light}>
      <GlobalStyle />
      <ThemeSwitch useDarkTheme={useDarkTheme} setTheme={setTheme} />
      <Section>
        <ErrorDisplay title={error.statusText} message={error.message} />
      </Section>
    </ThemeProvider>
  );
};

const Section = styled(ContainerSection)`
  display: flex;
  justify-items: center;
  align-items: center;
`;

export default Error;
