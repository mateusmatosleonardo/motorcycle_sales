import React from 'react';
import {TouchableOpacity} from 'react-native';

interface ButtonProps {
  action?: () => void;
  style?: any;
}

const Button = ({action, style}: ButtonProps) => {
  return <TouchableOpacity style={style} onPress={action} />;
};

export default Button;
