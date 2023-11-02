'use client';

import { useTranslations } from 'next-intl';

interface Props {
  description: string;
}

export default function ProjectDescription({ description }: Props) {
  const t = useTranslations('project.page');

  return (
    <div className='p-3 bg-siteBgAlt-light dark:bg-siteBgAlt-dark rounded shadow mb-3'>
      <h2 className='font-bold mb-1'>{t('description-label')}</h2>
      <p className='font-light mb-2'>{description}</p>
    </div>
  );
}
