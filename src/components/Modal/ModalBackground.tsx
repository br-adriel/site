import { forwardRef } from 'react';

function ModalBackground() {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen z-0'>
      <div className='w-full h-full bg-blue-950 opacity-20' />
    </div>
  );
}

export default forwardRef(ModalBackground);
