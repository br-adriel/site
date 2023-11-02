import NotFoundContent from '@/components/NotFoundContent';
import IMetadataProps from '@/interfaces/IMetadataProps';
import { Metadata } from 'next';

export async function generateMetadata({
  params: { locale },
}: IMetadataProps): Promise<Metadata> {
  const messages = (await import(`../../../messages/${locale}.json`)).default;
  return messages['not-found'].meta;
}

export default function NotFound() {
  return (
    <main className='w-screen h-screen p-4'>
      <section className='container h-full flex flex-col gap-2 justify-center items-center mx-auto'>
        <NotFoundContent />
      </section>
    </main>
  );
}
