import React from 'react';
import Background from '~/components/Background';
import Button from '~/components/Button';
import Input from '~/components/Input';

import { Container, CenterContainer, BottomContainer, TitleContainer, Title, TitlePrimary } from './styles';

const Login = () => {
  return (
    <Background>
      <Container>
        <TitleContainer>
          <Title>Nem mais, {'\n'}Nem menos,</Title>
          <TitlePrimary>Apenas uma única coisa.</TitlePrimary>
        </TitleContainer>

        <CenterContainer>
          <Input placeholder="Seu e-mail" />
          <Input placeholder="Sua senha secreta" />
          <Button>Entrar</Button>
          <Button>Entrar com o google</Button>
        </CenterContainer>

        <BottomContainer>
          <Button>Criar conta</Button>
        </BottomContainer>

      </Container>
    </Background>


  );
};

export default Login;
