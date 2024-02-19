import Navigation from '@/components/Navigation';
import ProjectDescription from '@/components/ProjectDescription';
import ProjectImage from '@/components/ProjectImage';
import ProjectTechnologies from '@/components/ProjectTechnologies';
import ProjectController from '@/controller/project.controller';
import IMetadataProps from '@/interfaces/IMetadataProps';
import IProject from '@/interfaces/IProject';
import { Metadata } from 'next';
import NotFound from '../../[...not-found]/page';
import { truncate } from '@/utils/strings';

interface Props extends IMetadataProps {
  params: {
    id: string;
    locale: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const [project, messages] = await Promise.all([
    getData(params.id as string, params.locale),
    import(`../../../../messages/${params.locale}.json`),
  ]);

  if (project) {
    const title = `${project.nome}${messages.default.project.meta.title}`;
    const description = truncate(project.descricao);
    return {
      title,
      description,
      metadataBase: new URL('https://adrielfsantos.vercel.app'),
      twitter: {
        card: 'summary_large_image',
        creator: '@meunomenaotemn',
        title,
        description,
        images: [project.imagem],
      },
      openGraph: {
        title,
        description,
        siteName: 'Adriel Santos',
        locale: params.locale,
        type: 'website',
        images: [
          {
            url: project.imagem,
            width: 1066,
            height: 600,
          },
        ],
      },
    };
  }
  return messages.default.project.meta['no-project'];
}

async function getData(id: string, locale?: string): Promise<IProject | null> {
  const fetchedProject = await ProjectController.getById(id, locale);
  if (fetchedProject.id && fetchedProject.nome) {
    return fetchedProject as IProject;
  }
  return null;
}

export default async function Project({ params }: Props) {
  if (params == null) return <NotFound />;
  const project = await getData(params.id as string, params.locale);

  if (project == null) return <NotFound />;
  return (
    <>
      <main className='container mx-auto min-h-screen p-4'>
        <div className='flex gap-4 mb-4'>
          <Navigation />
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
