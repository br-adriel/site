'use client';

import { fadeInAnimation } from '@/animations/FadeIn';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { BoxArrowUpRight } from 'react-bootstrap-icons';

interface IProps {
  image: string;
  codeLink?: string;
  viewLink?: string;
}

export default function ProjectImage({ image, codeLink, viewLink }: IProps) {
  const fadeAnimation = fadeInAnimation();

  return (
    <motion.div {...fadeAnimation} className='relative w-full shadow'>
      <Image
        className='rounded'
        src={image}
        alt=''
        width={1067}
        height={600}
        priority
      />

      <div className='flex gap-2 absolute bottom-2 right-2'>
        {codeLink ? (
          <a
            href={codeLink}
            target='_blank'
            rel='noopener noreferrer'
            className='flex gap-1 items-center rounded bg-blue-600 py-2 px-3 transition-colors hover:bg-violet-700 focus-visible:outline focus:outline-blue-600 focus:outline-2 focus:outline-offset-2 text-white text-center'
          >
            Código fonte <BoxArrowUpRight />
          </a>
        ) : null}
        {viewLink ? (
          <a
            href={viewLink}
            target='_blank'
            rel='noopener noreferrer'
            className='flex gap-1 items-center rounded bg-blue-600 py-2 px-3 transition-colors hover:bg-violet-700 focus-visible:outline focus:outline-blue-600 focus:outline-2 focus:outline-offset-2 text-white text-center'
          >
            Visualizar <BoxArrowUpRight />
          </a>
        ) : null}
      </div>
    </motion.div>
  );
}
