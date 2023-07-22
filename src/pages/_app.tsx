import { store } from '@/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Adriel Santos - Desenvolvedor Fullstack</title>
        <meta
          name='description'
          content='Conheça meu trabalho como desenvolvedor web'
        />
        <meta name='theme-color' content='#1d4ed8' />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
