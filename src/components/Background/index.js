import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

const Background = ({ children }) => {
  return <Container>{children}</Container>;
};

Background.propTypes = {
  /** Componente react-native que será envolvido. */
  children: PropTypes.element.isRequired,
};

export default Background;
