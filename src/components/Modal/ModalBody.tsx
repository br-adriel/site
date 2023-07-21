'use client';

import { fadeInGrow } from '@/animations/FadeInGrow';
import * as Dialog from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { XLg } from 'react-bootstrap-icons';
import ModalBackground from './ModalBackground';

interface IProps extends PropsWithChildren {
  title: React.ReactNode;
}

export default function ModalBody({ title, children }: IProps) {
  const modalAnimation = fadeInGrow();

  return (
    <Dialog.Portal>
      <ModalBackground />
      <Dialog.Overlay className='fixed top-0 left-0 w-screen h-screen backdrop-blur-lg p-3 md:p-5 lg:p-20 overflow-auto'>
        <Dialog.Content asChild>
          <motion.div
            {...modalAnimation}
            key='modal-skill'
            className='container bg-site_bg mx-auto rounded shadow-md focus:outline-blue-600 p-5 min-h-full'
          >
            <Dialog.Title className='flex items-center gap-5 justify-between mb-3'>
              {title}

              <Dialog.Close asChild>
                <button
                  className='p-2 rounded focus:outline-blue-600 focus:outline-1 hover:text-blue-600'
                  title='Fechar'
                >
                  <XLg />
                </button>
              </Dialog.Close>
            </Dialog.Title>
            <Dialog.Description className='flex flex-col lg:flex-row gap-5'>
              {children}
            </Dialog.Description>
          </motion.div>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}
