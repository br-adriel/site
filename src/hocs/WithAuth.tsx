'use client';

import LoadingScreen from '@/components/LoadingScreen';
import { getUserAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect } from 'react';

export default function WithAuth({ children }: PropsWithChildren) {
  const router = useRouter();
  const { user } = getUserAuth();

  useEffect(() => {
    if (user === null) {
      router.push('/admin/login');
    }
  }, [user, router]);

  return user ? <>{children}</> : <LoadingScreen />;
}
