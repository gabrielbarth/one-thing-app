import React from 'react';
import PropTypes from 'prop-types';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

import { Container, PickerText, Icon } from './styles';

const DatePicker = ({
  onPress,
  onConfirm,
  onCancel,
  textValue,
  isVisible,
  icon,
  isSmall,
}) => {
  return (
    <>
      <Container onPress={onPress} isSmall={isSmall}>
        <PickerText>{textValue}</PickerText>
        <Icon name={icon} size={20} />
        <DateTimePickerModal
          isVisible={isVisible}
          mode="date"
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      </Container>
    </>
  );
};

DatePicker.propTypes = {
  /** Função que será executada ao pressionar o component DatePicker. */
  onPress: PropTypes.func.isRequired,
  /** Função que será executada ao selecionar uma data e pressionar 'Confirmar'. */
  onConfirm: PropTypes.func.isRequired,
  /** Função que será executada ao abrir o DatePicker e pressionar 'Cancelar'. */
  onCancel: PropTypes.func.isRequired,
  /** Valor string que será convertido do tipo Date após o usuário selecionar uma data. */
  textValue: PropTypes.string.isRequired,
  /** Valor booleano que indica se o component DatePicker está visível ou não. */
  isVisible: PropTypes.bool.isRequired,
  /** Valor string que representa um ícone (Feather) para o componente (opcional). */
  icon: PropTypes.string,
  /** Valor booleano que permite renderizar o componente com diferentes tamanhos (width): 100% (ChooseRoute) ou 50% (Payment) */
  isSmall: PropTypes.bool,
};

DatePicker.defaultProps = {
  isVisible: false,
  isSmall: false,
  icon: 'calendar',
};

export default DatePicker;
