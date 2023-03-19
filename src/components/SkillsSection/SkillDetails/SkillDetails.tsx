import { ISkill } from '@/global/types';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './SkillDetails.style';

interface IProps {
  skill: ISkill;
}

const SkillDetails = ({ skill }: IProps) => {
  return (
    <S.SkillDetails>
      <S.SkillTitle>
        <Image src={skill.imagem} width={64} height={64} alt='' />
        <h4>{skill.nome}</h4>
      </S.SkillTitle>
      {skill.descricao ? <p>{skill.descricao}</p> : null}
      {skill.tem_projetos ? (
        <Link className='btn' href={`/projetos/filtrar/${skill.filtro}`}>
          Confira alguns projetos que usam essa tecnologia
        </Link>
      ) : null}
    </S.SkillDetails>
  );
};

export default SkillDetails;
