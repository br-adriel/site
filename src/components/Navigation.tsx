import BackButton from './BackButton';
import HomeButton from './HomeButton';

export default function Navigation() {
  return (
    <div className='flex gap-1'>
      <BackButton />
      <HomeButton />
    </div>
  );
}
