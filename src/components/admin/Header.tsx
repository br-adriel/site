'use client';

import { getUserAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { BoxArrowRight } from 'react-bootstrap-icons';
import Button from '../Button';

export default function Header() {
  const { logout } = getUserAuth();

  return (
    <header className='w-full bg-blue-600 shadow-lg'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center py-2 px-4 box-border'>
          <h1 className='text-2xl font-bold text-white'>
            <Link href='/admin'>Administração</Link>
          </h1>
          <Button onClick={logout}>
            <BoxArrowRight />
          </Button>
        </div>
      </div>
    </header>
  );
}
