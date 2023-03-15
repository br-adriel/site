import { IProject } from '../../global/types';
import BackButton from '../BackButton';
import TechList from '../TechList';
import * as S from './ProjectDetails.styled';
import ProjectImage from './ProjectImage';

interface IProps {
  projeto: IProject;
}

const ProjectDetails = ({ projeto }: IProps) => {
  return (
    <S.Wrapper>
      <S.Header>
        <BackButton />
        <h1>{projeto.nome}</h1>
      </S.Header>
      <S.Grid>
        <div>
          <ProjectImage
            src={projeto.imagem}
            codigoFonte={projeto.repositorio}
            visualizacao={projeto.visualizacao}
          />
        </div>
        <S.ProjectInfoWrapper>
          <S.AnimatedProjectInfo
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <S.ProjectInfoTitle>Descrição</S.ProjectInfoTitle>
            <p>{projeto.descricao}</p>
          </S.AnimatedProjectInfo>
          <S.AnimatedProjectInfo
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <S.ProjectInfoTitle>Tecnologias usadas</S.ProjectInfoTitle>
            <TechList techs={projeto.tecnologias} />
          </S.AnimatedProjectInfo>
        </S.ProjectInfoWrapper>
      </S.Grid>
    </S.Wrapper>
  );
};

export default ProjectDetails;
