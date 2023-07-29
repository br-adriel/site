import { selectSelectedSkill } from '@/store/skillsSlice';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import LoadingScreen from './LoadingScreen';
import ModalBody from './Modal/ModalBody';

interface IProps {
  open: boolean;
}

export default function SkillModal({ open }: IProps) {
  const skill = useSelector(selectSelectedSkill);

  return (
    <ModalBody
      open={open}
      title={
        <h2 className='font-bold'>{skill ? skill.nome : 'Carregando...'}</h2>
      }
    >
      {skill ? (
        <>
          <div className='w-full lg:w-1/3 xl:w-1/4 flex flex-col sm:flex-row lg:flex-col gap-3'>
            <Image
              width={200}
              height={200}
              alt=''
              src={skill.imagem}
              className='w-full sm:w-2/6 lg:w-full p-10 bg-white rounded mb-3 inline-block'
            />
            <p>{skill.descricao}</p>
          </div>
          <div className='w-full lg:w-2/3 xl:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
            {/* <ProjectCard />
        <ProjectCard />
      <ProjectCard /> */}
          </div>
        </>
      ) : (
        <LoadingScreen />
      )}
    </ModalBody>
  );
}
