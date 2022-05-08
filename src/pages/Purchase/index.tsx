import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import {api} from '../../utils/api';
import {useNavigation, useRoute} from '@react-navigation/native';
import {theme} from '../../styles/theme';
import {Header, TitleHeader, InvisibleAlign} from '../Details/styles';

import Container from '../../components/Container';
import ArrowLeftL from 'react-native-vector-icons/Fontisto';
import Down from 'react-native-vector-icons/Feather';

import {
  CardPurchase,
  Color,
  ContainerValidate,
  FormOfPayment,
  HeaderModal,
  InfoMotorcycle,
  InputArea,
  Main,
  ModalPayment,
  NameMotorcycle,
  Price,
  TitleFormOfPayment,
  TitleInput,
  TitleModal,
  TitleSection,
} from './styles';
import Input from '../../components/Input';

const Purchase = () => {
  const [visible, setVisible] = React.useState<boolean>(false);
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

  const icons = {
    PaperMoney: require('../../assets/icons/PaperMoney.png'),
    CreditCard: require('../../assets/icons/CreditCard.png'),
    BoletoBankario: require('../../assets/icons/BoletoBankario.png'),
    Card: require('../../assets/icons/Card.png'),
  };

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
            <TitleSection style={{marginBottom: 18}}>
              Escolha a forma de pagamento
            </TitleSection>
            <FormOfPayment activeOpacity={0.6}>
              <Image
                source={icons.PaperMoney}
                style={{width: 40, height: 40, resizeMode: 'contain'}}
              />
              <TitleFormOfPayment>Dinheiro</TitleFormOfPayment>
            </FormOfPayment>
            <FormOfPayment
              activeOpacity={0.6}
              onPress={() => setVisible(!visible)}>
              <Image
                source={icons.CreditCard}
                style={{width: 40, height: 40, resizeMode: 'contain'}}
              />
              <TitleFormOfPayment>Cartão de crédito</TitleFormOfPayment>
            </FormOfPayment>
            <FormOfPayment activeOpacity={0.6}>
              <Image
                source={icons.BoletoBankario}
                style={{width: 40, height: 40, resizeMode: 'contain'}}
              />
              <TitleFormOfPayment>Boleto bancário</TitleFormOfPayment>
            </FormOfPayment>
          </Main>
          <Modal transparent visible={visible} animationType="fade">
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ModalPayment>
                <HeaderModal>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setVisible(!visible)}>
                    <ArrowLeftL
                      name="arrow-left-l"
                      size={22}
                      color={theme.colors.green}
                    />
                  </TouchableOpacity>
                  <TitleModal>Cartão de crédito</TitleModal>
                  <InvisibleAlign />
                </HeaderModal>
                <TitleInput>Número do cartão</TitleInput>
                <InputArea>
                  <Input
                    keyboardType="numeric"
                    styleInput={{paddingLeft: 10, color: '#313030'}}
                    maxLength={19}
                  />
                </InputArea>
                <TitleInput>Nome impresso no cartão</TitleInput>
                <InputArea>
                  <Input
                    styleInput={{paddingLeft: 10, color: '#313030'}}
                    maxLength={30}
                  />
                </InputArea>
                <ContainerValidate>
                  <View style={{width: '48%'}}>
                    <TitleInput>Validade</TitleInput>
                    <InputArea>
                      <Input
                        keyboardType="numeric"
                        styleInput={{paddingLeft: 10, color: '#313030'}}
                        placeholder="Mês"
                        placeholderTextColor="#ccc"
                        maxLength={2}
                      />
                    </InputArea>
                  </View>
                  <View style={{width: '48%'}}>
                    <TitleInput />
                    <InputArea>
                      <Input
                        keyboardType="numeric"
                        styleInput={{paddingLeft: 10, color: '#313030'}}
                        placeholder="Ano"
                        placeholderTextColor="#ccc"
                        maxLength={4}
                      />
                    </InputArea>
                  </View>
                </ContainerValidate>
                <TitleInput>Código de segurança</TitleInput>
                <InputArea>
                  <Input
                    keyboardType="numeric"
                    styleInput={{paddingLeft: 10, color: '#313030'}}
                    maxLength={3}
                  />
                  <Image
                    source={icons.Card}
                    style={{
                      width: 24,
                      height: 18,
                      resizeMode: 'contain',
                      position: 'absolute',
                      right: 10,
                      top: 12,
                    }}
                  />
                </InputArea>
                <TitleInput>Parcelas</TitleInput>
                <InputArea>
                  <Input
                    keyboardType="numeric"
                    styleInput={{paddingLeft: 10, color: '#313030'}}
                    maxLength={3}
                    placeholder={`1x de R$${motorcycle.price}`}
                    placeholderTextColor="#919090"
                  />
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      width: 30,
                      height: 30,
                      position: 'absolute',
                      right: 8,
                      top: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Down name="chevron-down" color="#919090" size={28} />
                  </TouchableOpacity>
                </InputArea>
              </ModalPayment>
            </View>
          </Modal>
          <Modal transparent animationType="fade">
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            />
          </Modal>
        </Container>
      )}
    </>
  );
};

export default Purchase;
