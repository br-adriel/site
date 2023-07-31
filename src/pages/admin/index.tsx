import CollectionCardLink from '@/components/admin/CollectionCardLink';
import Header from '@/components/admin/Header';
import WithAuth from '@/hocs/WithAuth';
import Head from 'next/head';

function Admin() {
  const collections = [
    {
      href: '/admin/education',
      text: 'Educação',
      img: 'https://www.svgrepo.com/show/418907/education-graduation-key.svg',
    },
    {
      href: '/admin/experience',
      text: 'Experiência',
      img: 'https://www.svgrepo.com/show/315027/work-suitcase-toolbox.svg',
    },
    {
      href: '/admin/skills',
      text: 'Habilidades',
      img: 'https://www.svgrepo.com/show/499853/idea.svg',
    },
    {
      href: '/admin/projects',
      text: 'Projetos',
      img: 'https://www.svgrepo.com/show/268302/plan.svg',
    },
  ];

  return (
    <>
      <Head>
        <title>Administração | Adriel Santos - Desenvolvedor Fullstack</title>
        <meta name='description' content='Página de administração do site' />
      </Head>

      <Header />
      <main className='container px-3 py-4 mx-auto'>
        <section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3'>
          {collections.map((col) => {
            return (
              <CollectionCardLink href={col.href} key={col.text}>
                <img src={col.img} alt='' className='bg-white p-2 rounded' />
                <p className='text-center text-xl sm:text-2xl font-semibold mt-2'>
                  {col.text}
                </p>
              </CollectionCardLink>
            );
          })}
        </section>

        <div className='fixed bottom-3 right-3' title='Sair'></div>
      </main>
    </>
  );
}

export default WithAuth(Admin);
