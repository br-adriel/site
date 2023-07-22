'use client';

import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import { Provider } from 'react-redux';
import { store } from '@/store';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adriel Santos - Desenvolvedor Fullstack',
  description: 'Conheça meu trabalho como desenvolvedor web',
  themeColor: '#1d4ed8',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/icons/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/icons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      url: '/icons/android-chrome-192x192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      url: '/icons/android-chrome-512x512.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/icons/apple-touch-icon.png',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-BR'>
      <body className={outfit.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
