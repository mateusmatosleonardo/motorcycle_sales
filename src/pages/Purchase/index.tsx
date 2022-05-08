import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import {api} from '../../utils/api';
import {useNavigation, useRoute} from '@react-navigation/native';
import {theme} from '../../styles/theme';
import {Header, TitleHeader, InvisibleAlign} from '../Details/styles';
import Container from '../../components/Container';
import ArrowLeftL from 'react-native-vector-icons/Fontisto';
import {
  CardPurchase,
  Color,
  InfoMotorcycle,
  InputArea,
  Main,
  NameMotorcycle,
  Price,
  TitleInput,
  TitleSection,
} from './styles';
import Input from '../../components/Input';

const Purchase = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params as {id: number};
  const [motorcycle, setMotorcycle] = React.useState({
    id: 0,
    price: 0,
    picture: '',
    name: '',
    color: '',
  });
  const [loading, setLoading] = React.useState<boolean>(true);
  const getData = React.useCallback(() => {
    api
      .get(`/motos?id=${id}`)
      .then(({data}) => {
        setMotorcycle(data[0]);
        setLoading(false);
      })
      .catch(err => console.log(err + 'Erro ao buscar dados'));
  }, [id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <>
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color={theme.colors.green} />
        </View>
      ) : (
        <Container>
          <Header style={[Platform.OS === 'ios' && {paddingTop: 35}]}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <ArrowLeftL
                name="arrow-left-l"
                size={22}
                color={theme.colors.white}
              />
            </TouchableOpacity>
            <TitleHeader>Pagamento</TitleHeader>
            <InvisibleAlign />
          </Header>

          <Main>
            <CardPurchase>
              <Image
                source={{uri: motorcycle.picture}}
                style={{
                  width: 170,
                  height: 120,
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  resizeMode: 'contain',
                }}
              />
              <InfoMotorcycle>
                <NameMotorcycle>{motorcycle.name}</NameMotorcycle>
                <Color>{motorcycle.color}</Color>
                <Price>R$ {motorcycle.price}</Price>
              </InfoMotorcycle>
            </CardPurchase>
            <TitleSection>Seus dados</TitleSection>
            <TitleInput>Nome</TitleInput>
            <InputArea>
              <Input styleInput={{paddingLeft: 10, color: '#313030'}} />
            </InputArea>
            <TitleInput>E-mail</TitleInput>
            <InputArea>
              <Input styleInput={{paddingLeft: 10, color: '#313030'}} />
            </InputArea>
            <TitleInput>Celular</TitleInput>
            <InputArea>
              <Input styleInput={{paddingLeft: 10, color: '#313030'}} />
            </InputArea>
            <TitleSection>Escolha a forma de pagamento</TitleSection>
          </Main>
        </Container>
      )}
    </>
  );
};

export default Purchase;
