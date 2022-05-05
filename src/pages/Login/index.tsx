import React from 'react';
import Container from '../../components/Container';
import {ContainerInputs, ContainerLogo, Logo, Main} from './styles';
import LogoApp from '../../assets/logoMoto.png';

const Login: React.FC = () => {
  return (
    <Container>
      <Main>
        <ContainerLogo>
          <Logo source={LogoApp} />
        </ContainerLogo>
        <ContainerInputs />
      </Main>
    </Container>
  );
};

export default Login;
