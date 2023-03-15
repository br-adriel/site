import { ContainerSection } from '@/components/Container';
import ErrorDisplay from '@/components/ErrorDisplay';
import Head from 'next/head';
import styled from 'styled-components';

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>Erro 404</title>
      </Head>
      <main>
        <Section>
          <ErrorDisplay
            title='Página não encontrada'
            message='Verifique a url e tente novamente'
          />
        </Section>
      </main>
    </>
  );
}

const Section = styled(ContainerSection)`
  display: flex;
  justify-items: center;
  align-items: center;
`;
