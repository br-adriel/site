import LoadingScreen from '@/components/LoadingScreen';
import { getUserAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import { ComponentType, useEffect } from 'react';

export default function WithoutAuth(Component: ComponentType<any>) {
  return function (props: any) {
    const router = useRouter();
    const { user } = getUserAuth();

    useEffect(() => {
      if (user) {
        router.push('/admin');
      }
    }, [user, router]);

    return !user ? <Component {...props} /> : <LoadingScreen />;
  };
}
