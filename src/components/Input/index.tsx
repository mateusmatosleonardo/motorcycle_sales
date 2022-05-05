import React from 'react';
import {TextInput} from 'react-native';

interface InputProps {
  styleInput: any;
  secureText?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric';
  maxLength?: number;
  align?: 'center' | 'left' | 'right';
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: (e?: any) => void;
}

const Input = ({
  styleInput,
  secureText,
  keyboardType,
  maxLength,
  align,
  value,
  onChangeText,
}: InputProps) => {
  return (
    <TextInput
      style={styleInput}
      secureTextEntry={secureText}
      keyboardType={keyboardType}
      maxLength={maxLength}
      textAlign={align}
      value={value}
      onChangeText={onChangeText}
    />
  );
};

export default Input;
