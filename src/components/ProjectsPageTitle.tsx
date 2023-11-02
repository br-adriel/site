'use client';

import { useTranslations } from 'next-intl';
import BackButton from './BackButton';

export default function ProjectsPageTitle() {
  const t = useTranslations('projects.page');

  return (
    <div className='flex gap-4 mb-4'>
      <BackButton />
      <h1 className='font-semibold text-3xl'>{t('title')}</h1>
    </div>
  );
}
