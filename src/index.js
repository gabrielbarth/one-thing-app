import React from 'react';
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native';


import Routes from '~/routes'
import Login from '~/pages/Login';

import theme from '~/styles/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
