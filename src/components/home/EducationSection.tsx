import Image from 'next/image';
import EducationCard from '../EducationCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchEducation,
  selectAllEducation,
  selectEducationStatus,
} from '@/store/educationSlice';
import { useEffect } from 'react';
import { AppDispatch } from '@/store';

export default function EducationSection() {
  const dispatch = useDispatch<AppDispatch>();
  const education = useSelector(selectAllEducation);
  const status = useSelector(selectEducationStatus);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchEducation());
  }, [dispatch, status]);

  return (
    <section className='container p-5 min-h-screen mx-auto flex flex-col md:flex-row-reverse items-center justify-center gap-12 lg:gap-5'>
      <div className='w-full py-5 md:w-1/2 lg:pl-9 xl:pl-9'>
        <div className='flex flex-col gap-2'>
          <h2 className='text-4xl font-semibold mb-3'>Educação</h2>

          {education.map((ed, index) => {
            return (
              <EducationCard education={ed} delay={index} key={ed.curso} />
            );
          })}
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
