import IExperience from '@/interfaces/IExperience';
import ExperienceCard from '../ExperienceCard';
import HelperComponent from '../HelperComponent';

interface IProps {
  experiences: IExperience[];
}

export default function ExperienceSection({ experiences }: IProps) {
  return (
    <section className='container mx-auto min-h-screen flex flex-col justify-center p-5 gap-2'>
      <h2 className='text-4xl font-semibold mb-3'>Experiência</h2>

      {experiences.length ? (
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
      )}
    </section>
  );
}
