import BackButton from '@/components/BackButton';
import ProjectImage from '@/components/ProjectImage';
import ProjectController from '@/controller/project.controller';
import IProject from '@/interfaces/IProject';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type RouteParams = {
  id: string;
};

type Props = {
  params: RouteParams;
};

type MetadataProps = {
  params: RouteParams;
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const project: IProject | null = await getData(params.id as string);

  if (project) {
    return {
      title: `${project.nome} | Adriel Santos - Desenvolvedor Fullstack`,
      description: project.descricao,
    };
  }
  return {
    title: 'Projeto desconhecido',
    description: 'Projeto deseconhecido',
  };
}

async function getData(id: string): Promise<IProject | null> {
  const fetchedProject = await ProjectController.getById(id);
  if (fetchedProject.id && fetchedProject.nome) {
    return fetchedProject as IProject;
  }
  return null;
}

export default async function Project({ params }: Props) {
  if (params == null) return notFound();
  const project = await getData(params.id as string);

  if (project == null) return notFound();
  return (
    <>
      <main className='container mx-auto min-h-screen p-4'>
        <div className='flex gap-4 mb-4'>
          <BackButton />
          <h1 className='font-semibold text-3xl'>{project?.nome}</h1>
        </div>
        <section className='grid grid-cols-12 gap-3'>
          <div className='col-span-12 lg:col-span-7'>
            <ProjectImage
              image={project.imagem}
              codeLink={project.linkRepositorio}
              viewLink={project.linkVisualizacao}
            />
          </div>
          <div className='col-span-12 lg:col-span-5'>
            <div className='p-3 bg-siteBgAlt-light dark:bg-siteBgAlt-dark rounded shadow mb-3'>
              <h2 className='font-bold mb-1'>Descrição</h2>
              <p className='font-light mb-2'>{project.descricao}</p>
            </div>
            <div className='p-3 bg-siteBgAlt-light dark:bg-siteBgAlt-dark rounded shadow'>
              <h2 className='font-bold mb-1'>Tecnologias empregadas</h2>
              <div className='font-extralight text-sm flex flex-wrap gap-1'>
                {project.tecnologias.map((tecnologia) => {
                  return (
                    <span
                      key={tecnologia}
                      className='p-2 rounded bg-siteBg-light dark:bg-siteBg-dark grow text-center'
                    >
                      {tecnologia.toUpperCase()}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
