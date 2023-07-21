'use client';

import { fadeInAnimation } from '@/animations/FadeIn';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Github, Icon, Linkedin } from 'react-bootstrap-icons';
import SocialLink from '../SocialLink';

interface ILinkSocial {
  icon: Icon;
  id: string;
  link: string;
  title: string;
}

export default function HelloSection() {
  const linksSociais: ILinkSocial[] = [
    {
      icon: Github,
      id: '1',
      link: 'https://github.com/br-adriel',
      title: 'Github',
    },
    {
      icon: Linkedin,
      id: '2',
      link: 'https://linkedin.com/in/adriel-fsantos',
      title: 'LinkedIn',
    },
  ];

  const h1Animation = fadeInAnimation(0.5);
  const h2Animation = fadeInAnimation(0.5, 0.2);

  return (
    <section className='container p-5 min-h-screen mx-auto flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-8'>
      <div className='w-full py-5 md:w-1/2 lg:pl-9 xl:pl-9'>
        <motion.h1
          {...h1Animation}
          className='text-5xl text-center md:text-left lg:text-7xl font-semibold'
        >
          Adriel Santos
        </motion.h1>
        <motion.p
          {...h2Animation}
          className='text-center md:text-left text-2xl lg:text-3xl capitalize'
        >
          Desenvolvedor fullstack
        </motion.p>

        <div className='flex justify-center md:justify-start items-center gap-2 mt-4'>
          {linksSociais.map((ls) => {
            return (
              <SocialLink
                key={ls.id}
                Icon={ls.icon}
                link={ls.link}
                title={ls.title}
              />
            );
          })}
        </div>
      </div>
      <div className='px-4 w-full md:w-1/2 flex justify-center'>
        <Image
          className='w-full md:w-4/5'
          alt=''
          src='/assets/img/home_desktop.svg'
          width={500}
          height={472}
          priority={true}
        />
      </div>
    </section>
  );
}
