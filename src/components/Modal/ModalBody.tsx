import { fadeInGrow } from '@/animations/FadeInGrow';
import * as Dialog from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import { XLg } from 'react-bootstrap-icons';
import ModalBackground from './ModalBackground';

interface IProps extends PropsWithChildren {
  title: React.ReactNode;
  open: boolean;
}

export default function ModalBody({ title, children, open }: IProps) {
  const modalAnimation = fadeInGrow(0, 0.2);

  return (
    <AnimatePresence>
      {open && (
        <Dialog.Portal forceMount key='modal-portal'>
          <ModalBackground />
          <Dialog.Overlay className='fixed top-0 left-0 w-screen h-screen backdrop-blur-lg p-3 md:p-5 lg:p-20 overflow-auto'>
            <Dialog.Content asChild>
              <motion.div
                {...modalAnimation}
                className='container bg-site_bg mx-auto rounded shadow-md focus:outline-blue-600 p-5 min-h-full'
              >
                <Dialog.Title asChild>
                  <div className='flex items-center gap-5 justify-between mb-3'>
                    {title}

                    <Dialog.Close asChild>
                      <button
                        className='p-2 rounded hover:text-blue-600 focus:outline-blue-600 focus:outline-2 focus-visible:outline'
                        title='Fechar'
                      >
                        <XLg />
                      </button>
                    </Dialog.Close>
                  </div>
                </Dialog.Title>
                <Dialog.Description asChild>
                  <div className='flex flex-col lg:flex-row gap-5 items-start'>
                    {children}
                  </div>
                </Dialog.Description>
              </motion.div>
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      )}
    </AnimatePresence>
  );
}
