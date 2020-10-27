import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: ${(props) => (props.isSmall ? '48%' : '100%')};
  height: 50px;
  background: ${(props) => props.theme.colors.input};
  padding: 0 15px;
  border-radius: 6px;
  margin-bottom: 15px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
