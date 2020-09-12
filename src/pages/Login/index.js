import React from 'react';

import { Container, TitleContainer, Title, TitlePrimary } from './styles';

const Login = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Nem mais, {'\n'}Nem menos,</Title>
        <TitlePrimary>Apenas uma única coisa.</TitlePrimary>
      </TitleContainer>
    </Container>
  );
};

export default Login;
