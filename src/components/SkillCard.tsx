import { fadeInGrow } from '@/animations/FadeInGrow';
import ISkill from '@/interfaces/ISkill';
import { setSelectedSkill } from '@/store/skillsSlice';
import { Trigger } from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

interface IProps {
  delay?: number;
  skill: ISkill;
}

export default function SkillCard({ delay, skill }: IProps) {
  const cardAnimation = fadeInGrow(0.1 * (delay || 0), 0.2);
  const dispatch = useDispatch();

  return (
    <motion.div {...cardAnimation}>
      <Trigger
        title={skill.nome}
        onClick={() => dispatch(setSelectedSkill(skill))}
        className='bg-alt_bg p-2 rounded flex items-center justify-center cursor-pointer shadow hover:shadow-md focus:outline-blue-600 focus:outline-2 focus:outline-offset-4 hover:scale-105 transition-all'
      >
        <Image
          src={skill.imagem}
          alt={skill.nome}
          width={80}
          height={80}
          className='w-full p-2 bg-white rounded'
        />
      </Trigger>
    </motion.div>
  );
}
