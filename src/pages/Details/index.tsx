import React from 'react';
import Container from '../../components/Container';
import ArrowLeftL from 'react-native-vector-icons/Fontisto';
import Motorcycle from 'react-native-vector-icons/FontAwesome';
import Calendar from 'react-native-vector-icons/FontAwesome';
import Drop from 'react-native-vector-icons/Feather';
import Gas from 'react-native-vector-icons/FontAwesome5';
import {Image, Platform, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../routes';
import {
  Main,
  Header,
  TitleHeader,
  InvisibleAlign,
  PurchaseInformation,
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
import Button from '../../components/Button';

type DetailsScreenProps = NavigationProp<RootStackParamList, 'Purchase'>;

const Details = () => {
  const navigation = useNavigation<DetailsScreenProps>();
  const routes = useRoute();
  const {item} = routes.params as {item: any};

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
              <Description>{item.year}</Description>
            </CardDescription>
            <CardDescription>
              <Drop name="droplet" size={30} color={theme.colors.green} />
              <Description>{item.color}</Description>
            </CardDescription>
            <CardDescription>
              <Gas name="gas-pump" size={30} color={theme.colors.green} />
              <Description>{item.typesOfFuel}</Description>
            </CardDescription>
          </CardsDescription>
          <DetailedDescription>
            <TitleDescription>Cilindrada: </TitleDescription>
            <ValueDescription>{item.cc}</ValueDescription>
          </DetailedDescription>
          <DetailedDescription>
            <TitleDescription>Transmissão: </TitleDescription>
            <ValueDescription>{item.transmission}</ValueDescription>
          </DetailedDescription>
          <DetailedDescription>
            <TitleDescription>Sistema de partida: </TitleDescription>
            <ValueDescription>{item.startingSystem}</ValueDescription>
          </DetailedDescription>
          <DetailedDescription>
            <TitleDescription>Tanque de Combustível: </TitleDescription>
            <ValueDescription>{item.fuelTank}</ValueDescription>
          </DetailedDescription>
          <DetailedDescription>
            <TitleDescription>Óleo do Motor: </TitleDescription>
            <ValueDescription>
              {item.motorOil ? item.motorOil : 'Não informado'}
            </ValueDescription>
          </DetailedDescription>
          <DetailedDescription>
            <TitleDescription>Peso Seco: </TitleDescription>
            <ValueDescription>{item.dryWeight}</ValueDescription>
          </DetailedDescription>
          <View
            style={{
              width: '100%',
              height: 100,
              marginBottom: 50,
            }}
          />
        </Main>
      </Container>

      <PurchaseInformation>
        <InfoPurchase>
          <Text style={{color: theme.colors.black, fontSize: 14}}>
            A partir de
          </Text>
          <Price style={{color: theme.colors.green}}>R$ {item.price}</Price>
        </InfoPurchase>
        <Button
          action={() => navigation.navigate('Purchase', {id: item.id} as any)}
          style={{
            width: 180,
            height: 44,
            backgroundColor: theme.colors.green,
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          textBtn="Comprar"
          styleText={{color: theme.colors.white, fontSize: 15}}
        />
      </PurchaseInformation>
    </>
  );
};

export default Details;
