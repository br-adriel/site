'use client';

import { useTranslations } from 'next-intl';
import LinkButton from './LinkButton';

export default function NotFoundContent() {
  const t = useTranslations('not-found.page');

  return (
    <>
      <h1 className='text-5xl font-bold text-center'>{t('title')}</h1>
      <p className='text-2xl font-semibold text-center mb-3'>{t('text')}</p>
      <LinkButton href='/'>{t('button-text')}</LinkButton>
    </>
  );
}
