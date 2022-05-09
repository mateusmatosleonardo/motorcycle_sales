import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Platform,
  TouchableOpacity,
  View,
  Text,
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
  Diviser,
  FormOfPayment,
  Gratters,
  HeaderModal,
  InfoMotorcycle,
  InputArea,
  Main,
  ModalFinishPurchase,
  ModalInstallment,
  ModalPayment,
  NameMotorcycle,
  NumberOfInstallments,
  Price,
  PurchaseData,
  TitleFormOfPayment,
  TitleInput,
  TitleModal,
  TitleSection,
} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Purchase = () => {
  const [name, setName] = React.useState<string>('');
  const [email, setEmail] = React.useState<string>('');
  const [confirmPurchase, setConfirmPurchase] = React.useState<boolean>(false);
  const [visible, setVisible] = React.useState<boolean>(false);
  const [visibleInstallments, setVisibleInstallments] =
    React.useState<boolean>(false);
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
  const [selectInstallment, setSelectInstallment] = React.useState('');

  const [numberOfInstallments, setNumberOfInstallments] = useState<any>();

  const getData = React.useCallback(() => {
    api
      .get(`/motos?id=${id}`)
      .then(({data}) => {
        setMotorcycle(data[0]);
        setSelectInstallment(`1x de R$ ${data[0].price} sem juros`);
        setNumberOfInstallments([
          {
            number: '1x ',
            installments: data[0].price,
            diviser: true,
          },
          {
            number: '2x ',
            installments: data[0].price / 2,
            diviser: true,
          },
          {
            number: '3x ',
            installments: (data[0].price / 3).toFixed(3),
            diviser: true,
          },
          {
            number: '4x ',
            installments: (data[0].price / 4).toFixed(3),
            diviser: true,
          },
          {
            number: '5x ',
            installments: (data[0].price / 5).toFixed(3),
            diviser: true,
          },
          {
            number: '6x ',
            installments: (data[0].price / 6).toFixed(3),
            diviser: true,
          },
          {
            number: '7x ',
            installments: (data[0].price / 7).toFixed(3),
            diviser: true,
          },
          {
            number: '8x ',
            installments: (data[0].price / 8).toFixed(3),
            diviser: true,
          },
          {
            number: '9x ',
            installments: (data[0].price / 9).toFixed(3),
            diviser: true,
          },
          {
            number: '10x ',
            installments: (data[0].price / 10).toFixed(3),
            diviser: true,
          },
          {
            number: '11x ',
            installments: (data[0].price / 11).toFixed(3),
            diviser: true,
          },
          {
            number: '12x ',
            installments: (data[0].price / 12).toFixed(3),
          },
        ]);
        setLoading(false);
      })
      .catch(err => console.log(err + 'Erro ao buscar dados'));
  }, [id]);

  const icons = {
    PaperMoney: require('../../assets/icons/PaperMoney.png'),
    CreditCard: require('../../assets/icons/CreditCard.png'),
    BoletoBankario: require('../../assets/icons/BoletoBankario.png'),
    Card: require('../../assets/icons/Card.png'),
    Approval: require('../../assets/icons/Approval.png'),
  };

  let data = new Date();

  let day = String(data.getDate()).padStart(2, '0');

  let month = String(data.getMonth() + 1).padStart(2, '0');

  let yaer = data.getFullYear();

  let currentDay = day + '/' + month + '/' + yaer;

  const FinalizePurchase = () => {
    return (
      <Modal transparent animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ModalFinishPurchase>
            <Image
              source={icons.Approval}
              style={{width: 100, height: 100, resizeMode: 'contain'}}
            />
            <Gratters>PARÁBENS</Gratters>
            <Text
              style={{
                color: theme.colors.black,
                textAlign: 'center',
                paddingBottom: 10,
                fontSize: 15,
              }}>
              Sua compra acaba de ser finalizada com sucesso!
            </Text>
          </ModalFinishPurchase>
        </View>
      </Modal>
    );
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
              <Input
                styleInput={{paddingLeft: 10, color: '#313030'}}
                value={name}
                onChangeText={(text: string) => setName(text)}
              />
            </InputArea>
            <TitleInput>E-mail</TitleInput>
            <InputArea>
              <Input
                styleInput={{paddingLeft: 10, color: '#313030'}}
                value={email}
                onChangeText={(text: string) => setEmail(text)}
              />
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

            {confirmPurchase ? (
              <>
                <TitleSection style={{marginBottom: 18}}>
                  Dados da compra
                </TitleSection>
                <PurchaseData>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: '#414040',
                        fontSize: 15,
                        fontWeight: '500',
                        marginBottom: 6,
                      }}>
                      Nome:{' '}
                    </Text>
                    <Text style={{color: '#414040', fontSize: 15}}>{name}</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: '#414040',
                        fontSize: 15,
                        fontWeight: '500',
                        marginBottom: 6,
                      }}>
                      E-mail:{' '}
                    </Text>
                    <Text style={{color: '#414040', fontSize: 15}}>
                      {email}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: '#414040',
                        fontSize: 15,
                        fontWeight: '500',
                        marginBottom: 6,
                      }}>
                      Data da compra:{' '}
                    </Text>
                    <Text style={{color: '#414040', fontSize: 15}}>
                      {currentDay}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text
                      style={{
                        color: '#414040',
                        fontSize: 15,
                        fontWeight: '500',
                        marginBottom: 6,
                      }}>
                      Total:{' '}
                    </Text>
                    <Text style={{color: '#414040', fontSize: 15}}>
                      {selectInstallment}
                    </Text>
                  </View>
                </PurchaseData>
              </>
            ) : null}

            <Button
              style={{
                width: '100%',
                height: 45,
                marginTop: 20,
                borderRadius: 8,
                backgroundColor: theme.colors.green,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              textBtn="Finalizar compra"
              styleText={{
                color: theme.colors.white,
                fontSize: 16,
              }}
            />
          </Main>
          <Modal transparent visible={visible} animationType="fade">
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ModalPayment style={{elevation: 4}}>
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
                        placeholderTextColor="#717070"
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
                        placeholderTextColor="#717070"
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
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => setVisibleInstallments(!visibleInstallments)}>
                  <View
                    style={{
                      width: '100%',
                      height: 45,
                      borderColor: theme.colors.green,
                      borderRadius: 8,
                      borderWidth: 1,
                      justifyContent: 'center',
                      paddingLeft: 10,
                    }}>
                    <Text style={{color: '#717070'}}>{selectInstallment}</Text>
                    <TouchableOpacity
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
                  </View>
                </TouchableOpacity>
                <View
                  style={{
                    width: '100%',
                    marginTop: 12,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Button
                    action={() => {
                      setVisible(!visible);
                      setConfirmPurchase(!confirmPurchase);
                    }}
                    style={{
                      width: 150,
                      height: 37,
                      marginVertical: 10,
                      backgroundColor: theme.colors.green,
                      borderRadius: 8,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                    textBtn="Confirmar"
                    styleText={{color: '#fafafa', fontSize: 15}}
                  />
                </View>
              </ModalPayment>
            </View>
          </Modal>
          <Modal visible={visibleInstallments} transparent animationType="fade">
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <ModalInstallment style={{elevation: 4}}>
                {numberOfInstallments.map((item: any) => {
                  return (
                    <>
                      <TouchableOpacity
                        key={item.id}
                        activeOpacity={0.7}
                        onPress={() => {
                          setSelectInstallment(
                            `${item.number}R$${item.installments} sem juros`,
                          );
                          setVisibleInstallments(!visibleInstallments);
                        }}>
                        <NumberOfInstallments>
                          {item.number}
                          de {item.installments} sem juros
                        </NumberOfInstallments>
                      </TouchableOpacity>
                      {item.diviser ? <Diviser /> : null}
                    </>
                  );
                })}
              </ModalInstallment>
            </View>
          </Modal>
          <FinalizePurchase />
        </Container>
      )}
    </>
  );
};

export default Purchase;
