import GlobalStyle from '@/components/GlobalStyle';
import ThemeSwitch from '@/components/ThemeSwitch/ThemeSwitch';
import ThemeWrapper from '@/components/ThemeWrapper';
import store from '@/store';
import type { AppProps } from 'next/app';
import { Outfit } from 'next/font/google';
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
          <ThemeSwitch />
          <Component {...pageProps} />
        </ThemeWrapper>
      </Provider>
    </div>
  );
}
