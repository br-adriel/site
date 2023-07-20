import ExperienceCard from '../ExperienceCard';

export default function ExperienceSection() {
  return (
    <section className='container mx-auto min-h-screen flex flex-col justify-center p-5 gap-2'>
      <h2 className='text-4xl font-semibold mb-3'>Experiência</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        <ExperienceCard cargo='' data='' empresa='' tarefas={[]} />
      </div>
    </section>
  );
}
