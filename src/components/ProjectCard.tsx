import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard() {
  return (
    <Link
      href='/projects/id'
      className='bg-alt_bg p-3 rounded shadow hover:shadow-lg transition-shadow focus:outline-blue-600 focus:outline-2 focus-visible:outline w-full'
    >
      <Image
        alt=''
        width={1067}
        height={600}
        className='w-full rounded mb-2'
        src='https://adrielfsantos.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fportifolio-32f96.appspot.com%2Fo%2Fprojects%252Fexpress-members-only.png%3Falt%3Dmedia%26token%3D312995d1-e0bd-40c5-8c81-b73a592da76a&w=3840&q=75'
      />
      <h3 className='text-2xl'>Nome do projeto</h3>
    </Link>
  );
}
