import ContextWrapper from '@/components/ContextWrapper';
import '@/styles/globals.css';
import { Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';

export const viewport: Viewport = {
  themeColor: '#1d4ed8',
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pt' }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (e) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          timeZone='America/Fortaleza'
          now={new Date()}
        >
          <ContextWrapper>{children}</ContextWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
