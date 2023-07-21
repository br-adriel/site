'use client';

import { fadeInUpAnimation } from '@/animations/FadeInUp';
import { motion } from 'framer-motion';
import Link from 'next/link';
import ProjectCard from '../ProjectCard';

export default function ProjectsSection() {
  const numbers = [1, 2, 3];

  return (
    <section className='container mx-auto min-h-screen flex flex-col justify-center p-5 gap-2'>
      <div className='flex justify-between gap-5 items-center'>
        <h2 className='text-4xl font-semibold mb-3'>Projetos</h2>
        <Link
          href='/projects'
          className='rounded bg-blue-600 py-2 px-3 transition-colors hover:bg-violet-700 focus-visible:outline focus:outline-blue-500 focus:outline-2 focus:outline-offset-2'
        >
          Ver todos
        </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        {numbers.map((n, index) => {
          return (
            <motion.div {...fadeInUpAnimation(index * 0.2)} className='flex'>
              <ProjectCard key={n} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
