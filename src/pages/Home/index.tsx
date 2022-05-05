import React from 'react';
import {Text, View} from 'react-native';
import {theme} from '../../styles/theme';

const Home: React.FC = () => {
  return (
    <View>
      <Text style={{color: theme.colors.black}}>Home</Text>
    </View>
  );
};

export default Home;
