import LoadingScreen from '@/components/LoadingScreen';
import { selectUser } from '@/store/authSlice';
import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function WithoutAuth(Component: ComponentType<any>) {
  return function (props: any) {
    const router = useRouter();
    const user = useSelector(selectUser);

    useEffect(() => {
      if (user) {
        router.push('/admin');
      }
    }, [user, router]);

    return !user ? <Component {...props} /> : <LoadingScreen />;
  };
}
