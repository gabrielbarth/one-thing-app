import React, { forwardRef } from 'react';
//import PropTypes from 'prop-types';

import { Container, TextInput, Icon } from './styles';

const Input = ({ icon, isSmall, ...rest }, ref) => {
  return (
    <Container isSmall={isSmall}>
      {icon && <Icon name={icon} size={20} />}
      <TextInput placeholderTextColor="#636161" ref={ref} {...rest} />
    </Container>
  );
};


export default forwardRef(Input);
