import React from 'react';
import Container from '../../components/Container';
import ArrowLeftL from 'react-native-vector-icons/Fontisto';
import Motorcycle from 'react-native-vector-icons/FontAwesome';
import Calendar from 'react-native-vector-icons/FontAwesome';
import Drop from 'react-native-vector-icons/Feather';
import Gas from 'react-native-vector-icons/FontAwesome5';
import {Image, Platform, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  Main,
  Header,
  TitleHeader,
  InvisibleAlign,
  CompletePurchase,
  InfoPurchase,
  Price,
  ContainerPicture,
  ContainerDescription,
  NameMotor,
  CardDescription,
  Description,
  CardsDescription,
  DetailedDescription,
  TitleDescription,
  ValueDescription,
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
        <Main>
          <ContainerPicture style={{elevation: 1}}>
            <Image
              source={{uri: item.picture}}
              style={{
                resizeMode: 'contain',
                width: '100%',
                height: 150,
              }}
            />
          </ContainerPicture>
          <ContainerDescription>
            <NameMotor>{item.name}</NameMotor>
          </ContainerDescription>
          <CardsDescription>
            <CardDescription>
              <Motorcycle
                name="motorcycle"
                size={30}
                color={theme.colors.green}
              />
              <Description>{item.brand}</Description>
            </CardDescription>
            <CardDescription>
              <Calendar
                name="calendar-o"
                size={30}
                color={theme.colors.green}
              />
              <Description>{item.brand}</Description>
            </CardDescription>
            <CardDescription>
              <Drop name="droplet" size={30} color={theme.colors.green} />
              <Description>{item.brand}</Description>
            </CardDescription>
            <CardDescription>
              <Gas name="gas-pump" size={30} color={theme.colors.green} />
              <Description>{item.brand}</Description>
            </CardDescription>
          </CardsDescription>
          <DetailedDescription>
            <TitleDescription>Cilindrada: </TitleDescription>
            <ValueDescription>{item.cc}</ValueDescription>
          </DetailedDescription>
          <DetailedDescription>
            <TitleDescription>Transmissão: </TitleDescription>
          </DetailedDescription>
          <DetailedDescription>
            <TitleDescription>Sistema de partida: </TitleDescription>
          </DetailedDescription>
          <DetailedDescription>
            <TitleDescription>Tanque de Combustível: </TitleDescription>
          </DetailedDescription>
          <DetailedDescription>
            <TitleDescription>Óleo do Motor: </TitleDescription>
          </DetailedDescription>
          <DetailedDescription>
            <TitleDescription>Óleo do Motor: </TitleDescription>
          </DetailedDescription>
        </Main>
      </Container>

      <CompletePurchase>
        <InfoPurchase>
          <Text style={{color: theme.colors.black, fontSize: 14, marginTop: 8}}>
            A partir de
          </Text>
          <Price style={{color: theme.colors.green}}>R${item.price}</Price>
        </InfoPurchase>
      </CompletePurchase>
    </>
  );
};

export default Details;
