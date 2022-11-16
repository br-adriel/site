import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import ContainerSection from '../components/ContainerSection';
import ErrorDisplay from '../components/ErrorDisplay';

const NotFoundError = () => {
  return (
    <Section>
      <Helmet>
        <title>Erro 404</title>
      </Helmet>
      <ErrorDisplay
        title='Página não encontrada'
        message='Verifique a url e tente novamente'
      />
    </Section>
  );
};

const Section = styled(ContainerSection)`
  display: flex;
  justify-items: center;
  align-items: center;
`;

export default NotFoundError;
