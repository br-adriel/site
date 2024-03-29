'use client';

import IEducation from '@/interfaces/IEducation';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import EducationCard from '../EducationCard';
import HelperComponent from '../HelperComponent';

interface IProps {
  education: IEducation[];
}

export default function EducationSection({ education }: IProps) {
  const t = useTranslations('home.page');
  return (
    <section className='container p-5 min-h-screen mx-auto flex flex-col md:flex-row-reverse items-center justify-center gap-12 lg:gap-5'>
      <div className='w-full py-5 md:w-1/2 lg:pl-9 xl:pl-9'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-4xl font-semibold mb-3'>
            {t('education-title')}
          </h2>

          {education.length ? (
            education.map((ed, index) => {
              return (
                <EducationCard education={ed} delay={index} key={ed.curso} />
              );
            })
          ) : (
            <HelperComponent
              option='noElements'
              noElementsMessage={t('no-education')}
            />
          )}
        </div>
      </div>
      <div className='px-4 w-full md:w-1/2 flex justify-center'>
        <Image
          className='w-full md:w-4/5'
          alt=''
          src='/assets/img/board_presentation.svg'
          width={500}
          height={472}
          priority={true}
        />
      </div>
    </section>
  );
}
