import { fadeInAnimation } from '@/animations/FadeIn';
import Button from '@/components/Button';
import Input from '@/components/Input';
import LoadingSpinner from '@/components/LoadingSpinner';
import { getUserAuth } from '@/contexts/AuthContext';
import WithoutAuth from '@/hocs/WithoutAuth';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormEvent, useEffect, useState } from 'react';

function Login() {
  const fadeAnimation = fadeInAnimation();

  const router = useRouter();
  const { user, loginStatus, login } = getUserAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(email, password);
  };

  useEffect(() => {
    if (loginStatus === 'failed') {
      setPassword('');
    }
    if (loginStatus === 'succeeded') {
      setEmail('');
      setPassword('');
      router.push('/admin');
    }
  }, [loginStatus]);

  useEffect(() => {
    if (user) {
      router.push('/admin');
    }
  }, []);

  return (
    <>
      <Head>
        <title>Admin | Adriel Santos - Desenvolvedor Fullstack</title>
        <meta
          name='description'
          content='Faça login para acessar a área administrativa'
        />
      </Head>

      <main className='w-screen min-h-screen flex items-center'>
        <div className='container mx-auto flex items-center justify-center p-5'>
          <AnimatePresence>
            <div
              className='w-full sm:w-9/12 md:w-6/12 lg:w-4/12 bg-siteBgAlt-light dark:bg-siteBgAlt-dark px-4 py-6
            rounded shadow'
            >
              <h1 className='text-3xl font-semibold text-center mb-3'>Admin</h1>
              {loginStatus === 'loading' ? (
                <LoadingSpinner />
              ) : (
                <form onSubmit={formSubmit}>
                  <motion.div {...fadeAnimation}>
                    <div className='flex flex-col gap-2 mb-3'>
                      <label htmlFor='email'>Email</label>
                      <Input
                        required
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setEmail(e.target.value)
                        }
                      />
                    </div>
                    <div className='flex flex-col gap-2 mb-3'>
                      <label htmlFor='password'>Senha</label>
                      <Input
                        required
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setPassword(e.target.value)
                        }
                      />
                    </div>
                    <Button>Entrar</Button>
                  </motion.div>
                </form>
              )}
            </div>
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}

export default WithoutAuth(Login);
