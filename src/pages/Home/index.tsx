import React, {useEffect} from 'react';
import {View, Animated, Easing, Platform, Dimensions} from 'react-native';
import {Header, Logo, Main} from './styles';

import LogoApp from '../../assets/logoMoto.png';
import {api} from '../../utils/api';
import SearchBar from '../../components/SearchBar';
import {theme} from '../../styles/theme';
const {height} = Dimensions.get('window');

const Home = () => {
  const [motorcycle, setMotorcycle] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const floatAnim = React.useRef(new Animated.Value(0)).current;
  const moveUp = React.useCallback(() => {
    Animated.timing(floatAnim, {
      toValue: -8,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [floatAnim]);
  const moveDown = React.useCallback(() => {
    Animated.timing(floatAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [floatAnim]);

  // const getData = React.useCallback(() => {
  //   api
  //     .get('/motos')
  //     .then(({data}) => {
  //       setMotorcycle(data);
  //     })
  //     .catch(err => console.log(err + 'Erro ao buscar dados'));
  // }, []);

  useEffect(() => {
    moveUp();
    floatAnim.addListener(({value}) => {
      if (value === 0) {
        moveUp();
      } else if (value === -8) {
        moveDown();
      }
    });
  }, [floatAnim, moveUp, moveDown]);

  // useEffect(() => {
  //   getData();
  // }, [getData]);

  function duration() {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  duration();

  return isLoading ? (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={{
          translateY: floatAnim,
        }}>
        <Logo source={LogoApp} />
      </Animated.View>
    </View>
  ) : (
    <>
      <Header
        style={[
          {backgroundColor: theme.colors.green},
          Platform.OS === 'ios'
            ? {height: height / 10}
            : {height: height / 8.5},
        ]}>
        <SearchBar
          styleIcon={{color: theme.colors.white}}
          styleInput={{color: theme.colors.black}}
        />
      </Header>
      <Main
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        contentContainerStyle={{alignItems: 'center'}}
        style={[Platform.OS === 'ios' ? {paddingTop: 50} : {}]}>
        <View
          style={{
            width: '100%',
            height: 80,
            marginBottom: 30,
            backgroundColor: theme.colors.green,
          }}
        />
        <View
          style={{
            width: '100%',
            height: 80,
            marginBottom: 30,
            backgroundColor: theme.colors.green,
          }}
        />
        <View
          style={{
            width: '100%',
            height: 80,
            marginBottom: 30,
            backgroundColor: theme.colors.green,
          }}
        />
        <View
          style={{
            width: '100%',
            height: 80,
            marginBottom: 30,
            backgroundColor: theme.colors.green,
          }}
        />
        <View
          style={{
            width: '100%',
            height: 80,
            marginBottom: 30,
            backgroundColor: theme.colors.green,
          }}
        />
        <View
          style={{
            width: '100%',
            height: 80,
            marginBottom: 30,
            backgroundColor: theme.colors.green,
          }}
        />
        <View
          style={{
            width: '100%',
            height: 80,
            marginBottom: 30,
            backgroundColor: theme.colors.green,
          }}
        />
        <View
          style={{
            width: '100%',
            height: 80,
            marginBottom: 30,
            backgroundColor: theme.colors.green,
          }}
        />
        <View
          style={{
            width: '100%',
            height: 80,
            marginBottom: 30,
            backgroundColor: theme.colors.green,
          }}
        />
        <View
          style={{
            width: '100%',
            height: 80,
            marginBottom: 30,
            backgroundColor: theme.colors.green,
          }}
        />
        <View
          style={{
            width: '100%',
            height: 80,
            marginBottom: 30,
            backgroundColor: theme.colors.green,
          }}
        />
        <View
          style={{
            width: '100%',
            height: 80,
            marginBottom: 30,
            backgroundColor: theme.colors.green,
          }}
        />
      </Main>
    </>
  );
};

export default Home;
