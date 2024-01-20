'use client';

import { useTranslations } from 'next-intl';
import Navigation from './Navigation';

export default function ProjectsPageTitle() {
  const t = useTranslations('projects.page');

  return (
    <div className='flex gap-4 mb-4'>
      <Navigation />
      <h1 className='font-semibold text-3xl'>{t('title')}</h1>
    </div>
  );
}
