import { Trigger } from '@radix-ui/react-dialog';
import Image from 'next/image';

export default function SkillCard() {
  return (
    <Trigger
      className='bg-alt_bg p-2 rounded flex items-center justify-center cursor-pointer shadow hover:shadow-md transition-shadow'
      title='HTML'
    >
      <Image
        src='https://www.svgrepo.com/show/349402/html5.svg'
        alt=''
        width={80}
        height={80}
        className='w-full p-2 bg-white rounded'
      />
    </Trigger>
  );
}
