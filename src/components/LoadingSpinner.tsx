import { MutatingDots } from 'react-loader-spinner';

export default function LoadingSpinner() {
  return (
    <MutatingDots
      color='#2563eb'
      secondaryColor='#4338ca'
      width={120}
      height={120}
      wrapperClass='w-full flex justify-center items-center'
    />
  );
}
