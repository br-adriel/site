'use client';

import { MutatingDots } from 'react-loader-spinner';

export default function LoadingSpinner() {
  return (
    <MutatingDots
      color='#2563eb'
      secondaryColor='#4338ca'
      width={100}
      height={100}
      wrapperClass='w-full flex justify-center items-center'
    />
  );
}
