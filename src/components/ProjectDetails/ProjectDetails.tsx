import React from 'react';
import * as S from './ProjectDetails.styled';
import ProjectImage from './ProjectImage';
import TechList from '../TechList';
import { IProject } from '../../global/types';
import BackButton from '../BackButton';

interface IProps {
  projeto: IProject;
}

const ProjectDetails: React.FC<IProps> = ({ projeto }) => {
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
