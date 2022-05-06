import React, {useEffect} from 'react';
import {View, Animated, Easing, Platform} from 'react-native';
import {Logo, Main} from './styles';

import LogoApp from '../../assets/logoMoto.png';
import {api} from '../../utils/api';
import SearchBar from '../../components/SearchBar';
import {theme} from '../../styles/theme';

const Home = () => {
  const [motorcycle, setMotorcycle] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const floatAnim = React.useRef(new Animated.Value(0)).current;
  const moveUp = React.useCallback(() => {
    Animated.timing(floatAnim, {
      toValue: -10,
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

  const getData = React.useCallback(() => {
    api
      .get('/motos')
      .then(({data}) => {
        setMotorcycle(data);
      })
      .catch(err => console.log(err + 'Erro ao buscar dados'));
  }, []);

  useEffect(() => {
    moveUp();
    floatAnim.addListener(({value}) => {
      if (value === 0) {
        moveUp();
      } else if (value === -10) {
        moveDown();
      }
    });
  }, [floatAnim, moveUp, moveDown]);

  useEffect(() => {
    getData();
  }, [getData]);

  function duration() {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  duration();

  console.log(motorcycle, 'data aqui');

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
    <Main style={[Platform.OS === 'ios' ? {paddingTop: 50} : {}]}>
      <SearchBar
        styleIcon={{color: theme.colors.black}}
        styleInput={{color: theme.colors.black}}
      />
    </Main>
  );
};

export default Home;
