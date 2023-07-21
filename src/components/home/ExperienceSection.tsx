import ExperienceCard from '../ExperienceCard';

export default function ExperienceSection() {
  const experiencias = [
    {
      cargo: 'Desenvolvedor Frontend',
      data: 'Mai/2023 - Atualmente',
      empresa: 'Byte Seridó Jr',
      tarefas: [
        'Desenvolvimento de interfaces responsivas',
        'Criação de telas a partir de design',
        'Uso dos frameworks Angular e Vue.js',
        'Integração de telas com APIs',
      ],
    },
    {
      cargo: 'Desenvolvedor Backend',
      data: 'Jun/2021 - Dez/2021',
      empresa: 'Labens',
      tarefas: [
        'Implementação de modelos, forms e views',
        'Uso do framework Django',
        'Escrita de testes unitários',
        'Criação de templates HTML básicos',
      ],
    },
  ];

  return (
    <section className='container mx-auto min-h-screen flex flex-col justify-center p-5 gap-2'>
      <h2 className='text-4xl font-semibold mb-3'>Experiência</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {experiencias.map((exp, index) => {
          return <ExperienceCard {...exp} delay={index} key={index} />;
        })}
      </div>
    </section>
  );
}
