import LoadingScreen from '@/components/LoadingScreen';
import { getUserAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';

export default function WithAuth(Component: ComponentType<any>) {
  return function (props: any) {
    const router = useRouter();
    const { user } = getUserAuth();

    useEffect(() => {
      if (user === null) {
        router.push('/admin/login');
      }
    }, [user, router]);

    return user ? <Component {...props} /> : <LoadingScreen />;
  };
}
