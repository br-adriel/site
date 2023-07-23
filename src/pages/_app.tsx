import AuthLoader from '@/components/AuthLoader';
import { store } from '@/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Outfit } from 'next/font/google';
import Head from 'next/head';
import { Provider } from 'react-redux';

const outfit = Outfit({ subsets: ['latin'] });

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

      <AuthLoader />
      <div className={outfit.className}>
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}
