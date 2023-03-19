import { ISkill } from '@/global/types';
import * as Popover from '@radix-ui/react-popover';
import SkillCard from '../SkillCard';
import SkillDetails from '../SkillDetails';
import * as S from './SkillPopover.styles';

interface IProps {
  skill: ISkill;
}

const SkillPopover = ({ skill }: IProps) => {
  return (
    <Popover.Root>
      <S.Trigger>
        <SkillCard
          icon={skill.imagem}
          skill={skill.nome}
          description={skill.descricao}
        />
      </S.Trigger>
      <Popover.Portal>
        <S.Content>
          <SkillDetails skill={skill} />
          <S.Arrow />
        </S.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default SkillPopover;
