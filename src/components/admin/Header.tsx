import { AppDispatch } from '@/store';
import { logoutUser } from '@/store/authSlice';
import Link from 'next/link';
import { BoxArrowRight } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import Button from '../Button';

export default function Header() {
  const dispatch = useDispatch<AppDispatch>();

  const clickButton = () => {
    dispatch(logoutUser());
  };

  return (
    <header className='w-full bg-blue-600 shadow-lg'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center py-2 px-4 box-border'>
          <h1 className='text-2xl font-bold text-white'>
            <Link href='/admin'>Administração</Link>
          </h1>
          <Button onClick={clickButton}>
            <BoxArrowRight />
          </Button>
        </div>
      </div>
    </header>
  );
}
