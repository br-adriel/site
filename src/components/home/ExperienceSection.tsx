import { AppDispatch } from '@/store';
import {
  fetchExperiences,
  selectAllExperiences,
  selectExperiencesStatus,
} from '@/store/experiencesSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExperienceCard from '../ExperienceCard';
import HelperComponent from '../HelperComponent';

export default function ExperienceSection() {
  const dispatch = useDispatch<AppDispatch>();

  const experiences = useSelector(selectAllExperiences);
  const status = useSelector(selectExperiencesStatus);

  useEffect(() => {
    if (status === 'idle') dispatch(fetchExperiences());
  }, [dispatch, status]);

  return (
    <section className='container mx-auto min-h-screen flex flex-col justify-center p-5 gap-2'>
      <h2 className='text-4xl font-semibold mb-3'>Experiência</h2>

      {status === 'succeeded' ? (
        experiences.length ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {experiences.map((exp, index) => {
              return (
                <ExperienceCard experience={exp} delay={index} key={exp.id} />
              );
            })}
          </div>
        ) : (
          <HelperComponent
            option='noElements'
            noElementsMessage='Nenhuma experiência encontrada'
          />
        )
      ) : (
        <HelperComponent option={status} />
      )}
    </section>
  );
}
