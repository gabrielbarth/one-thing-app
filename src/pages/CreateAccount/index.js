import React from 'react';
import Background from '~/components/Background';
import Button from '~/components/Button';
import Input from '~/components/Input';

import { Container, CenterContainer, BottomContainer, TitleContainer, Title, TitlePrimary } from './styles';

const CreateAccount = () => {
  return (
    <Background>
      <Container>
        <TitleContainer>
          <Title>Nem mais, {'\n'}Nem menos,</Title>
          <TitlePrimary>Apenas uma única coisa.</TitlePrimary>
        </TitleContainer>

        <CenterContainer>
          <Input placeholder="Seu e-mail" />
          <Input placeholder="Senha secreta" />
          <Button>Cadastrar-se</Button>
          <Button>Cadastrar-se com Google</Button>
        </CenterContainer>

      </Container>
    </Background>


  );
};

export default CreateAccount;
