import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  width: ${(props) => (props.isSmall ? '48%' : '100%')};
  height: 50px;
  background: #e8eced;
  padding: 0 15px;
  border-radius: 6px;
  margin-bottom: 15px;

  flex-direction: row;
  align-items: center;
`;

export const PickerText = styled.Text`
  color: #636161;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
  position: absolute;
  right: 0;
`;
