import Link from 'next/link';
import { PropsWithChildren } from 'react';

interface IProps extends PropsWithChildren {
  href: string;
}

export default function CollectionCardLink({ href, children }: IProps) {
  return (
    <Link
      href={href}
      className='w-full bg-siteBgAlt-light dark:bg-siteBgAlt-dark p-3 rounded shadow hover:shadow-md hover:scale-95 transition-all cursor-pointer'
    >
      {children}
    </Link>
  );
}
