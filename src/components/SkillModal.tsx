import Image from 'next/image';
import ModalBody from './Modal/ModalBody';

interface IProps {
  open: boolean;
}

export default function SkillModal({ open }: IProps) {
  return (
    <ModalBody open={open} title={<h2 className='font-semibold'>HTML</h2>}>
      <div className='w-full lg:w-1/3 xl:w-1/4 flex flex-col sm:flex-row lg:flex-col gap-3'>
        <Image
          width={200}
          height={200}
          alt=''
          src='https://www.svgrepo.com/show/349402/html5.svg'
          className='w-full sm:w-2/6 lg:w-full p-10 bg-white rounded mb-3 inline-block'
        />
        <p className=''>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque ullam
          tempora molestias consectetur nihil in nobis, eum, pariatur beatae, id
          sunt aut blanditiis rerum. Dolorum, eos a quam architecto enim
          dolorum. Consectetur, quam nam.
        </p>
      </div>
      <div className='w-full lg:w-2/3 xl:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
        {/* <ProjectCard />
        <ProjectCard />
        <ProjectCard /> */}
      </div>
    </ModalBody>
  );
}
