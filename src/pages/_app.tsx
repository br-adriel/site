import GlobalStyle from '@/components/GlobalStyle';
import ThemeSwitch from '@/components/ThemeSwitch/ThemeSwitch';
import ThemeWrapper from '@/components/ThemeWrapper';
import store from '@/store';
import type { AppProps } from 'next/app';
import { Outfit } from 'next/font/google';
import Head from 'next/head';
import { Provider } from 'react-redux';

const outfitFont = Outfit({
  variable: '--font-family',
  fallback: ['sans-serif'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={outfitFont.className}>
      <Provider store={store}>
        <ThemeWrapper>
          <GlobalStyle />
          <Head>
            <meta name='theme-color' content='#0072e7' />
          </Head>
          <ThemeSwitch />
          <Component {...pageProps} />
        </ThemeWrapper>
      </Provider>
    </div>
  );
}
