import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './TechList.styled';
import TechListItem from './TechListItem';

interface IProps {
  techs: string[];
}

const TechList: React.FC<IProps> = ({ techs }) => {
  return (
    <S.List>
      {techs.map((tech) => {
        const url = `/projetos/filtrar/${tech}`;
        return (
          <TechListItem key={tech}>
            <Link to={url}>{tech}</Link>
          </TechListItem>
        );
      })}
    </S.List>
  );
};

export default TechList;
