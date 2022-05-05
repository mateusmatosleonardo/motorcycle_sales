import React from 'react';
import Container from '../../components/Container';
import {
  ContainerError,
  ContainerInputs,
  ContainerLogo,
  InputArea,
  Logo,
  Main,
  TextError,
  TitleInput,
} from './styles';
import LogoApp from '../../assets/logoMoto.png';
import Input from '../../components/Input';
import {StyleSheet} from 'react-native';
import {theme} from '../../styles/theme';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../routes';
import * as yup from 'yup';
import Button from '../../components/Button';

type LoginScreenProps = NavigationProp<RootStackParamList, 'Home'>;

const Login: React.FC = () => {
  const navigation = useNavigation<LoginScreenProps>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const validateSchema = yup.object({
    email: yup.string().email('E-mail inválido').required('Informe seu email!'),
    password: yup
      .string()
      .min(8, 'A senha deve conter no mínimo 8 caracteres!')
      .required('Informe sua senha!'),
  });
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(validateSchema),
  });

  function handleSignIn(data: any) {
    if (data.email === 'me2@test.com' && data.password === '87654321') {
      setIsLoading(true);
      setInterval(() => {
        setIsLoading(false);
        navigation.navigate('Home');
      }, 1200);
    } else {
      console.log('Erro ao logar!');
    }
  }

  return (
    <Container>
      <Main>
        <ContainerLogo>
          <Logo source={LogoApp} />
        </ContainerLogo>
        <ContainerInputs>
          <TitleInput>E-mail</TitleInput>
          <Controller
            control={control}
            name="email"
            render={({field: {onChange, onBlur, value}}) => (
              <InputArea
                style={[
                  styles.input,
                  {
                    borderWidth: errors.email && 1,
                    borderColor: errors.email && '#f00',
                  },
                ]}>
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  keyboardType="email-address"
                  styleInput={{color: theme.colors.black, paddingLeft: 10}}
                />
              </InputArea>
            )}
          />
          <ContainerError>
            {errors.email && <TextError>{errors.email?.message}</TextError>}
          </ContainerError>
          <TitleInput>Password</TitleInput>
          <Controller
            control={control}
            name="password"
            render={({field: {onChange, onBlur, value}}) => (
              <InputArea
                style={[
                  styles.input,
                  {
                    borderWidth: errors.password && 1,
                    borderColor: errors.password && '#f00',
                  },
                ]}>
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  styleInput={{color: theme.colors.black, paddingLeft: 10}}
                />
              </InputArea>
            )}
          />
          <ContainerError>
            {errors.password && (
              <TextError>{errors.password?.message}</TextError>
            )}
          </ContainerError>
        </ContainerInputs>
        <Button
          action={handleSubmit(handleSignIn)}
          style={{
            width: '100%',
            height: 48,
            backgroundColor: theme.colors.green,
            marginTop: 25,
            borderRadius: 4,
          }}
        />
      </Main>
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 48,
    borderRadius: 4,
    marginTop: 10,
    backgroundColor: '#dedede',
  },
});

export default Login;
