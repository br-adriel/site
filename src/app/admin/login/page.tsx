import LoginForm from '@/components/LoginForm';
import WithoutAuth from '@/hocs/WithoutAuth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Adriel Santos - Desenvolvedor Fullstack',
  description: 'Faça login para acessar a área administrativa',
};

export default function Login() {
  return (
    <WithoutAuth>
      <main className='w-screen min-h-screen flex items-center'>
        <div className='container mx-auto flex items-center justify-center p-5'>
          <LoginForm />
        </div>
      </main>
    </WithoutAuth>
  );
}
