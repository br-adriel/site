import { selectTheme, switchTheme } from '@/features/themeSlice';
import React from 'react';
import { SunFill, MoonStarsFill } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './ThemeSwitch.style';

const ThemeSwitch = () => {
  const { useDark } = useSelector(selectTheme);
  const dispatch = useDispatch();

  const changeTheme = () => {
    dispatch(switchTheme());
  };

  return (
    <S.ThemeButton onClick={changeTheme} title='Alterar tema' type='button'>
      {useDark ? <MoonStarsFill /> : <SunFill />}
    </S.ThemeButton>
  );
};

export default ThemeSwitch;
