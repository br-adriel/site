import LinkButton from '@/components/LinkButton';
import Head from 'next/head';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>
          Página não encontrada | Adriel Santos - Desenvolvedor Fullstack
        </title>
        <meta
          name='description'
          content='Página não encontrada, verifique a URL e tente novamente'
        />
      </Head>

      <main className='w-screen h-screen p-4'>
        <section className='container h-full flex flex-col gap-2 justify-center items-center mx-auto'>
          <h1 className='text-5xl font-bold text-center'>
            Página não encontrada
          </h1>
          <p className='text-2xl font-semibold text-center mb-3'>
            Verifique a url e tente novamente
          </p>
          <LinkButton href='/'>Ir para a página inicial</LinkButton>
        </section>
      </main>
    </>
  );
}
