import BackButton from '@/components/BackButton';
import ProjectImage from '@/components/ProjectImage';
import ProjectController from '@/controller/project.controller';
import IProject from '@/interfaces/IProject';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { CodeSlash } from 'react-bootstrap-icons';

interface IProps {
  project: IProject;
}

export default function Project({ project }: IProps) {
  return (
    <>
      <Head>
        <title>
          {(project ? project.nome : 'Carregando...') +
            ' | Adriel Santos - Desenvolvedor Fullstack'}
        </title>
        <meta
          name='description'
          content={
            project
              ? project.descricao
              : 'Veja mais informações sobre um dos meus projetos'
          }
        />
      </Head>

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
            <div className='p-3 bg-alt_bg rounded shadow mb-3'>
              <h2 className='font-bold mb-1'>Descrição</h2>
              <p className='font-light mb-2'>{project.descricao}</p>
            </div>
            <div className='p-3 bg-alt_bg rounded shadow'>
              <h2 className='font-bold mb-1'>Tecnologias empregadas</h2>
              <div className='font-extralight text-sm flex flex-wrap gap-1'>
                {project.tecnologias.map((tecnologia) => {
                  return (
                    <span
                      key={tecnologia}
                      className='p-2 rounded bg-site_bg grow text-center'
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

export const getServerSideProps: GetServerSideProps<{
  project: IProject;
}> = async (context) => {
  if (
    context.params &&
    context.params.id &&
    typeof context.params.id === 'string'
  ) {
    const fetchedProject = await ProjectController.getById(context.params.id);
    if (fetchedProject.id && fetchedProject.nome) {
      return {
        props: {
          project: fetchedProject,
        },
      };
    }
  }
  return {
    notFound: true,
  };
};
