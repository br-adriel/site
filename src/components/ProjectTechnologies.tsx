'use client';

import { useTranslations } from 'next-intl';

interface Props {
  technologies: string[];
}

export default function ProjectTechnologies({ technologies }: Props) {
  const t = useTranslations('project.page');

  return (
    <div className='p-3 bg-siteBgAlt-light dark:bg-siteBgAlt-dark rounded shadow'>
      <h2 className='font-bold mb-1'>{t('technologies-label')}</h2>
      <div className='font-extralight text-sm flex flex-wrap gap-1'>
        {technologies.map((technology) => {
          return (
            <span
              key={technology}
              className='p-2 rounded bg-siteBg-light dark:bg-siteBg-dark grow text-center'
            >
              {technology.toUpperCase()}
            </span>
          );
        })}
      </div>
    </div>
  );
}
