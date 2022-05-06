import React, {useEffect} from 'react';
import {
  View,
  Animated,
  Easing,
  Platform,
  Dimensions,
  StyleSheet,
  Image,
  Text,
} from 'react-native';
import {
  BgMoto,
  Cc,
  Header,
  ListCard,
  Logo,
  Main,
  NameMoto,
  Price,
} from './styles';

import LogoApp from '../../assets/logoMoto.png';
import Biz from '../../assets/biz.png';
import Pop from '../../assets/pop.png';
import Cg from '../../assets/cg.png';
import {api} from '../../utils/api';
import SearchBar from '../../components/SearchBar';
import Button from '../../components/Button';
import {theme} from '../../styles/theme';
import Card from '../../components/Card';
import Right from 'react-native-vector-icons/AntDesign';
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
      } else if (value === -8) {
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

  console.log(motorcycle);

  return isLoading ? (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white,
      }}>
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
        <ListCard>
          {motorcycle.map(
            (
              item: {
                id: number;
                name: string;
                cc: string;
                price: string;
                picture: string;
              },
              index,
            ) => (
              <Card key={index} style={styles.cardStyle}>
                <BgMoto>
                  <Image
                    source={{uri: item.picture}}
                    style={{width: 135, height: 94}}
                    resizeMode="contain"
                  />
                </BgMoto>
                <NameMoto>{item.name}</NameMoto>
                <Cc>{item.cc}</Cc>
                <Text
                  style={{
                    color: theme.colors.black,
                    fontSize: 10,
                    marginTop: 8,
                  }}>
                  A partir de
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Price>R$ 12.730</Price>
                  <Button
                    style={{
                      width: 46,
                      height: 28,
                      backgroundColor: theme.colors.green,
                      borderRadius: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    textBtn={
                      <Right
                        name="right"
                        size={16}
                        color={theme.colors.white}
                      />
                    }
                  />
                </View>
              </Card>
            ),
          )}
        </ListCard>
      </Main>
    </>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    width: '100%',
    maxWidth: 165,
    height: 208,
    marginBottom: 20,
    backgroundColor: theme.colors.white,
    elevation: 1.5,
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
});

export default Home;
