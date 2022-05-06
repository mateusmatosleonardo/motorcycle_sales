import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {SeachBarArea, SearchBarInput} from './styles';

interface SearchBarProps {
  styleSearchBar?: any;
  styleIcon?: any;
  value?: string;
  onChangeText?: (text: string) => void;
  styleInput?: any;
  placeholder?: string | undefined;
}

const SearchBar = ({
  styleSearchBar,
  styleIcon,
  value,
  onChangeText,
  styleInput,
  placeholder,
}: SearchBarProps) => {
  return (
    <SeachBarArea style={styleSearchBar}>
      <Icon name="search1" size={20} style={styleIcon} />
      <SearchBarInput
        style={styleInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
    </SeachBarArea>
  );
};

export default SearchBar;
