import React from 'react';
import {View} from 'react-native';

interface CardProps {
  children?: React.ReactNode;
  style?: {} | Array<{}>;
}

const Card = ({children, style}: CardProps) => {
  return <View style={style}>{children}</View>;
};

export default Card;
