import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  background: ${(props) => props.theme.colors.button};
  height: 50px;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.background};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
`;

export const LoadingIndicator = styled.ActivityIndicator``;
