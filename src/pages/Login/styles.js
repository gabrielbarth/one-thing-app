import styled from 'styled-components/native';

import theme from '~/styles/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${theme.colors.background};
`;

export const TitleContainer = styled.View`
  width: 70%;
`;

export const Title = styled.Text`
  width: 100%;
  font-size: 20px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.dark};
  text-align: left;
`;

export const TitlePrimary = styled.Text`
  font-size: 20px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.primary};
  text-align: left;
`;
