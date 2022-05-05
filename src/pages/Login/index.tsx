import React from 'react';
import Container from '../../components/Container';
import {
  ContainerError,
  ContainerInputs,
  ContainerLogo,
  InputArea,
  Logo,
  Main,
  TitleInput,
} from './styles';
import LogoApp from '../../assets/logoMoto.png';
import Input from '../../components/Input';
import {theme} from '../../styles/theme';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers';
import * as yup from 'yup';
import Button from '../../components/Button';

const Login: React.FC = () => {
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

  function handleSignIn(data) {
    console.log(data);
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
              <InputArea style={{backgroundColor: theme.colors.gray}}>
                <Input
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  keyboardType="email-address"
                />
              </InputArea>
            )}
          />
          <ContainerError />
          <TitleInput>Password</TitleInput>
          <Controller
            control={control}
            name="password"
            render={({field: {onChange, onBlur, value}}) => (
              <InputArea style={{backgroundColor: theme.colors.gray}}>
                <Input onChangeText={onChange} onBlur={onBlur} value={value} />
              </InputArea>
            )}
          />
          <ContainerError />
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

export default Login;
