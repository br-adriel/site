'use client';

import { fadeInAnimation } from '@/animations/FadeIn';
import { motion } from 'framer-motion';

export default function ModalBackground() {
  const modalBgAnimation = fadeInAnimation(0.2);

  return (
    <motion.div
      {...modalBgAnimation}
      className='fixed top-0 left-0 w-screen h-screen z-0'
    >
      <div className='w-full h-full bg-blue-950 opacity-20' />
    </motion.div>
  );
}
