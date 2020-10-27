import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const CenterContainer = styled.View`
  width: 100%;
  height: 50%;
`;

export const TitleContainer = styled.View`
  width: 70%;
  height: 30%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  width: 100%;
  font-size: 20px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.text};
  text-align: left;
`;

export const TitlePrimary = styled.Text`
  font-size: 20px;
  font-family: ${props => props.theme.fonts.regular};
  color: ${props => props.theme.colors.primary};
  text-align: left;
`;
