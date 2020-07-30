import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '~/pages/Login';

const Stack = createStackNavigator();

export default function Routes() {
  const signed = false;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {signed ? (
          ''
        ) : (
          <Stack.Screen
            name="Login"
            options={{headerShown: false}}
            component={Login}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
