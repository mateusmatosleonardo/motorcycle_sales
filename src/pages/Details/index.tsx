import React from 'react';
import Container from '../../components/Container';
import ArrowLeftL from 'react-native-vector-icons/Fontisto';
import {Platform, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Main,
  Header,
  TitleHeader,
  InvisibleAlign,
  CompletePurchase,
  InfoPurchase,
  Price,
} from './styles';
import {theme} from '../../styles/theme';

const Details = () => {
  const navigation = useNavigation();
  const routes = useRoute();
  const {item} = routes.params;

  return (
    <>
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
          <TitleHeader>Detalhes</TitleHeader>
          <InvisibleAlign />
        </Header>
      </Container>
      <Main />
      <CompletePurchase>
        <InfoPurchase>
          <Text style={{color: theme.colors.black, fontSize: 14, marginTop: 8}}>
            A partir de
          </Text>
          <Price style={{color: theme.colors.green}}>R$ {item.price}</Price>
        </InfoPurchase>
      </CompletePurchase>
    </>
  );
};

export default Details;
