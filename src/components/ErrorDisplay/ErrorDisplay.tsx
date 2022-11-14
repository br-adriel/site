import React from 'react';
import errorIllustration from '../../assets/img/alert.svg';
import * as S from './ErrorDisplay.styled';

interface IProps {
  title?: string;
  message?: string;
}

const ErrorDisplay: React.FC<IProps> = ({
  title = 'Um erro ocorreu',
  message,
}) => {
  return (
    <S.Container>
      <S.ImgWrapper>
        <img src={errorIllustration} alt='' />
      </S.ImgWrapper>
      <h2>{title}</h2>
      {message ? <p>{message}</p> : null}
    </S.Container>
  );
};

export default ErrorDisplay;
