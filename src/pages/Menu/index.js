import React from 'react';
import Background from '~/components/Background';
import Button from '~/components/Button';
import Input from '~/components/Input';

import {
  Container,
  CenterContainer,
  BottomContainer,
  TitleContainer,
  Title,
  TitlePrimary,
} from './styles';

const CreateAccount = () => {
  return (
    <Background>
      <Container>
        <TitleContainer>
          <Title>Nem mais, {'\n'}Nem menos,</Title>
          <TitlePrimary>Apenas uma única coisa.</TitlePrimary>
        </TitleContainer>

        <CenterContainer>
          <Button>Lista do sucesso</Button>
          <Button>Metas</Button>
          <Button>Hábitos</Button>
          <Button>Princípios</Button>
          <Button>Configurações</Button>
        </CenterContainer>
      </Container>
    </Background>
  );
};

export default CreateAccount;
