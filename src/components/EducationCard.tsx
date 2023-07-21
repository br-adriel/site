'use client';

import { fadeInUpAnimation } from '@/animations/FadeInUp';
import { motion } from 'framer-motion';

interface IProps {
  ano_fim: number;
  ano_inicio: number;
  curso: string;
  delay?: number;
  instituicao: string;
  mes_fim: number;
  mes_inicio: number;
}

export default function EducationCard({
  ano_fim,
  ano_inicio,
  curso,
  instituicao,
  mes_fim,
  mes_inicio,
  delay,
}: IProps) {
  const animation = fadeInUpAnimation(0.2 * (delay || 0));

  return (
    <motion.div
      {...animation}
      className='bg-alt_bg shadow rounded py-3 px-4 hover:shadow-md transition-shadow'
    >
      <h3 className='text-xl md:text-2xl mb-1 font-medium'>
        {curso} ({instituicao})
      </h3>
      <p className='text-md opacity-70'>{`${mes_inicio} ${ano_inicio} - ${mes_fim} ${ano_fim}`}</p>
    </motion.div>
  );
}
