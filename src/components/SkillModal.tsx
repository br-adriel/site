import * as Dialog from '@radix-ui/react-dialog';
import { XLg } from 'react-bootstrap-icons';

export default function SkillModal() {
  return (
    <Dialog.Portal>
      <div className='fixed top-0 left-0 w-screen h-screen z-0 bg-blue-900 opacity-20'></div>
      <Dialog.Overlay className='fixed top-0 left-0 w-screen h-screen backdrop-blur-lg p-3 md:p-5 lg:p-20 overflow-auto z-10'>
        <Dialog.Content className='container bg-site_bg mx-auto rounded shadow-md focus:outline-blue-600 p-5 min-h-full'>
          <Dialog.Title className='flex items-center gap-5 justify-between mb-3'>
            <h3 className='font-semibold'>HTML</h3>
            <Dialog.Close asChild>
              <button
                className='p-2 rounded focus:outline-blue-600 focus:outline-1 hover:text-blue-600'
                title='Fechar'
              >
                <XLg />
              </button>
            </Dialog.Close>
          </Dialog.Title>
          <Dialog.Description className='flex flex-col lg:flex-row gap-3'>
            <div className='w-full lg:w-1/3 xl:w-1/4'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                ullam tempora molestias consectetur nihil in nobis, eum,
                pariatur beatae, id sunt aut blanditiis rerum. Dolorum, eos a
                quam architecto enim dolorum. Consectetur, quam nam.
              </p>
            </div>
            <div className='w-fill lg:w-2/3 xl:w-3/4'>
              <div className='bg-alt_bg p-5 rounded'></div>
            </div>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}
