import React from 'react';
import { BoxArrowUpRight } from 'react-bootstrap-icons';
import * as S from './ProjectImage.styled';

interface IProps {
  src: string;
  alt?: string;
  visualizacao?: string;
  codigoFonte?: string;
}

const ProjectImage: React.FC<IProps> = ({
  src,
  alt,
  visualizacao,
  codigoFonte,
}) => {
  return (
    <S.ImgWrapper>
      <img src={src} alt={alt || ''} />
      {visualizacao && codigoFonte ? (
        <S.LinksGroup>
          {codigoFonte ? (
            <a href={codigoFonte} target='_blank' rel='noopener noreferrer'>
              Código fonte <BoxArrowUpRight />
            </a>
          ) : null}
          {visualizacao ? (
            <a href={visualizacao} target='_blank' rel='noopener noreferrer'>
              Visualizar <BoxArrowUpRight />
            </a>
          ) : null}
        </S.LinksGroup>
      ) : null}
    </S.ImgWrapper>
  );
};

export default ProjectImage;
