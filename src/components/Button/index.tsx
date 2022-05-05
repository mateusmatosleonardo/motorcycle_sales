import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  action?: () => void;
  style?: any;
  textBtn?: any;
  styleText?: any;
}

const Button = ({action, style, textBtn, styleText}: ButtonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={style} onPress={action}>
      <Text style={styleText}>{textBtn}</Text>
    </TouchableOpacity>
  );
};

export default Button;
