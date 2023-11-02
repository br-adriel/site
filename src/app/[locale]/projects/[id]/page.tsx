import BackButton from '@/components/BackButton';
import ProjectImage from '@/components/ProjectImage';
import ProjectController from '@/controller/project.controller';
import IMetadataProps from '@/interfaces/IMetadataProps';
import IProject from '@/interfaces/IProject';
import { Metadata } from 'next';
import NotFound from '../../[...not-found]/page';
import ProjectDescription from '@/components/ProjectDescription';
import ProjectTechnologies from '@/components/ProjectTechnologies';

interface Props extends IMetadataProps {
  params: {
    id: string;
    locale: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [project, messages] = await Promise.all([
    getData(params.id as string),
    import(`../../../../messages/${params.locale}.json`),
  ]);

  if (project) {
    return {
      title: `${project.nome}${messages.default.project.meta.title}`,
      description: project.descricao,
    };
  }
  return messages.default.project.meta['no-project'];
}

async function getData(id: string): Promise<IProject | null> {
  const fetchedProject = await ProjectController.getById(id);
  if (fetchedProject.id && fetchedProject.nome) {
    return fetchedProject as IProject;
  }
  return null;
}

export default async function Project({ params }: Props) {
  if (params == null) return <NotFound />;
  const project = await getData(params.id as string);

  if (project == null) return <NotFound />;
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
            <ProjectDescription description={project.descricao} />
            <ProjectTechnologies technologies={project.tecnologias} />
          </div>
        </section>
      </main>
    </>
  );
}
