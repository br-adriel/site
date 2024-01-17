import ProjectsList from '@/components/ProjectsList';
import ProjectsPageTitle from '@/components/ProjectsPageTitle';
import IMetadataProps from '@/interfaces/IMetadataProps';
import { Metadata } from 'next';

export async function generateMetadata(
  props: IMetadataProps
): Promise<Metadata> {
  const messages = (
    await import(`../../../messages/${props.params.locale}.json`)
  ).default;
  return messages.projects.meta;
}

interface IProps {
  params: {
    locale: string;
  };
}

export default function Projects({ params }: IProps) {
  return (
    <main className='container mx-auto min-h-screen p-4 flex-col'>
      <ProjectsPageTitle />

      <ProjectsList locale={params.locale} />
    </main>
  );
}
