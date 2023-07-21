'use client';

import { fadeInGrow } from '@/animations/FadeInGrow';
import { Trigger } from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface IProps {
  delay?: number;
}

export default function SkillCard({ delay }: IProps) {
  const cardAnimation = fadeInGrow(0.1 * (delay || 0), 0.2);

  return (
    <motion.div
      {...cardAnimation}
      className='bg-alt_bg p-2 rounded flex items-center justify-center cursor-pointer shadow hover:shadow-md transition-shadow'
    >
      <Trigger title='HTML'>
        <Image
          src='https://www.svgrepo.com/show/349402/html5.svg'
          alt=''
          width={80}
          height={80}
          className='w-full p-2 bg-white rounded'
        />
      </Trigger>
    </motion.div>
  );
}
