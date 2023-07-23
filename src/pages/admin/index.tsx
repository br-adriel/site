import Button from '@/components/Button';
import WithAuth from '@/hocs/WithAuth';
import { AppDispatch } from '@/store';
import { logoutUser } from '@/store/authSlice';
import { useDispatch } from 'react-redux';

function Admin() {
  const dispatch = useDispatch<AppDispatch>();

  const clickButton = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <Button onClick={clickButton}>Sair</Button>
    </div>
  );
}

export default WithAuth(Admin);
