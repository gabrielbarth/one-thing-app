import React from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonText, LoadingIndicator } from './styles';

const Button = ({ children, loading, ...rest }) => {
  // console.log(...rest);
  return (
    <Container {...rest}>
      {loading ? (
        <LoadingIndicator size="small" color="#fff" />
      ) : (
          <ButtonText>{children}</ButtonText>
        )}
    </Container>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};

export default Button;
