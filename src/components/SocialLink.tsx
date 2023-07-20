'use client';

import { Icon } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';

const linkAnimation = {
  initial: { scale: 0.4, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 },
};

interface IProps {
  Icon: Icon;
  link: string;
  title: string;
}

export default function SocialLink({ Icon, link, title }: IProps) {
  return (
    <motion.a
      {...linkAnimation}
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      title={title}
      className='text-3xl rounded-full'
    >
      <div className='hover:bg-violet-700 bg-blue-600 p-3 transition-all hover:scale-95 rounded-full'>
        {<Icon />}
      </div>
    </motion.a>
  );
}
