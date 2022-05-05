import React, {useEffect} from 'react';
import {Text, View, Animated, Easing, Platform} from 'react-native';
import {theme} from '../../styles/theme';
import {Logo, Main} from './styles';
import LogoApp from '../../assets/logoMoto.png';

const Home = () => {
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

  function duration() {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
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
    <Main style={[Platform.OS ? {paddingTop: 60} : {}]}>
      <Text style={{color: '#222'}}>Home</Text>
    </Main>
  );
};

export default Home;
