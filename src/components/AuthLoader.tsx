import { auth } from '@/services/firebase/firebase.config';
import { setUser } from '@/store/authSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

function AuthLoader() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) dispatch(setUser({ user: userAuth }));
      else dispatch(setUser({ user: null }));
    });

    return () => unsubscribe();
  }, [dispatch]);
  return null;
}

export default memo(AuthLoader);
