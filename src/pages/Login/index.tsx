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
import Brand from '../../assets/Brand.png';
import Input from '../../components/Input';
import {
  StyleSheet,
  ActivityIndicator,
  Text,
  TouchableOpacity,
} from 'react-native';
import {theme} from '../../styles/theme';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../routes';
import EncryptedStorage from 'react-native-encrypted-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import * as yup from 'yup';
import Button from '../../components/Button';
import {api} from '../../utils/api';
import {AxiosResponse} from 'axios';

type LoginScreenProps = NavigationProp<RootStackParamList, 'Home'>;

const Login: React.FC = () => {
  const navigation = useNavigation<LoginScreenProps>();
  const [hidePass, setHidePass] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string>('');
  const validateSchema = yup.object({
    email: yup.string().email('E-mail inválido').required('Informe seu email!'),
    password: yup.string().required('Informe sua senha!'),
  });
  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors, isSubmitting},
  } = useForm({
    resolver: yupResolver(validateSchema),
  });

  function handleSignIn(): Promise<void> {
    const {email, password} = getValues();
    return api
      .get('/user', {params: {email}})
      .then((response: AxiosResponse) => {
        if (response.data.length === 0) {
          setError('E-mail ou senha inválidos!');
        } else if (response.data[0].password === password) {
          storeUserSession('user', email);
          navigation.navigate('Home');
        } else {
          setError('E-mail ou senha inválidos!');
        }
      });
  }

  async function storeUserSession(key: string, value: any) {
    try {
      await EncryptedStorage.setItem(key, value);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Main>
        <ContainerLogo>
          <Logo source={Brand} />
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
                  secureText={hidePass}
                />

                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => setHidePass(!hidePass)}
                  style={{position: 'absolute', right: 10, top: 13}}>
                  <Icon
                    name={hidePass ? 'eye-outline' : 'eye-off-outline'}
                    color={theme.colors.black}
                    size={22}
                  />
                </TouchableOpacity>
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
          textBtn={
            isSubmitting ? (
              <ActivityIndicator color={theme.colors.white} size="small" />
            ) : (
              'Login'
            )
          }
          action={handleSubmit(handleSignIn)}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: 48,
            backgroundColor: theme.colors.green,
            marginTop: 25,
            borderRadius: 4,
          }}
          styleText={{color: theme.colors.white, fontSize: 16}}
        />
        <Text style={{color: '#f00', marginTop: 10}}>{error}</Text>
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
    backgroundColor: '#f1f1f1',
  },
});

export default Login;
