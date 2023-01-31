import React from 'react';
import { SunFill, MoonStarsFill } from 'react-bootstrap-icons';
import * as S from './ThemeSwitch.style';

interface Props {
  useDarkTheme: boolean;
  setTheme: any;
}

const ThemeSwitch: React.FC<Props> = ({ useDarkTheme, setTheme }) => {
  return (
    <S.ThemeButton onClick={setTheme} title='Alterar tema' type='button'>
      {useDarkTheme ? <MoonStarsFill /> : <SunFill />}
    </S.ThemeButton>
  );
};

export default ThemeSwitch;
