import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  href: string;
}

export default function CollectionCardLink({ href, children }: IProps) {
  return (
    <Link
      href={href}
      className='w-full bg-alt_bg p-3 rounded shadow hover:shadow-md transition-shadow cursor-pointer'
    >
      {children}
    </Link>
  );
}
