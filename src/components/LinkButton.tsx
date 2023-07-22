import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  href: string;
}

export default function LinkButton({ href, children }: IProps) {
  return (
    <Link
      href={href}
      className='rounded bg-blue-600 py-2 px-3 transition-colors hover:bg-violet-700 focus-visible:outline focus:outline-blue-500 focus:outline-2 focus:outline-offset-2'
    >
      {children}
    </Link>
  );
}
