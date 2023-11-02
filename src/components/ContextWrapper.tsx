'use client';

import { AuthContextProvider } from '@/contexts/AuthContext';
import { ThemeContextProvider } from '@/contexts/ThemeContext';
import { store } from '@/store';
import { Outfit } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

const outfit = Outfit({ subsets: ['latin'] });

function ContextWrapper({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <ThemeContextProvider>
          <div
            className={
              outfit.className +
              ' bg-siteBg-light text-black dark:bg-siteBg-dark dark:text-white transition-colors'
            }
          >
            {children}
          </div>
        </ThemeContextProvider>
      </AuthContextProvider>
    </Provider>
  );
}

export default ContextWrapper;
