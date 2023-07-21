'use client';

import { Icon } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import { fadeInGrow } from '@/animations/FadeInGrow';

interface IProps {
  Icon: Icon;
  link: string;
  title: string;
}

export default function SocialLink({ Icon, link, title }: IProps) {
  const animation = fadeInGrow();
  return (
    <motion.a
      {...animation}
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      title={title}
      className='text-3xl rounded-full'
    >
      <div className='hover:bg-violet-700 bg-blue-600 p-3 transition-all hover:scale-95 rounded-full text-white'>
        {<Icon />}
      </div>
    </motion.a>
  );
}
