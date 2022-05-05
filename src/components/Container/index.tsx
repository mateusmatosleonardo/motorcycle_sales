import React from 'react';
import {Main} from './styles';
import {theme} from '../../styles/theme';

interface ContainerProps {
  children: React.ReactNode;
}

function Container({children}: ContainerProps) {
  return (
    <Main
      showsVerticalScrollIndicator={false}
      overScrollMode="never"
      style={{backgroundColor: theme.colors.white}}>
      {children}
    </Main>
  );
}

export default Container;
