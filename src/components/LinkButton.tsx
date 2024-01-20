import Link, { LinkProps } from 'next/link';
import { PropsWithChildren } from 'react';

interface IProps extends LinkProps, PropsWithChildren {}

export default function LinkButton({ children, ...attibutes }: IProps) {
  return (
    <Link
      {...attibutes}
      className='rounded bg-blue-600 py-2 px-3 transition-colors hover:bg-violet-700 focus-visible:outline focus:outline-blue-500 focus:outline-2 focus:outline-offset-2 text-white flex justify-center items-center'
    >
      {children}
    </Link>
  );
}
