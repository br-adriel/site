import React from 'react';
import * as S from './TechListItem.styled';

interface IProps {
  active?: boolean;
  children: any;
}

const TechListItem: React.FC<IProps> = ({ active = false, children }) => {
  return (
    <>
      {active ? (
        <S.ActiveListItem>{children}</S.ActiveListItem>
      ) : (
        <S.ListItem>{children}</S.ListItem>
      )}
    </>
  );
};

export default TechListItem;
