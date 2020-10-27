import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '~/pages/Login';
import Goals from '~/pages/Goals';
import Habits from '~/pages/Habits';
import Menu from '~/pages/Menu';
import Principles from '~/pages/Principles';
import Todo from '~/pages/Todo';
import Settings from '~/pages/Settings';

const Stack = createStackNavigator();

export default function Routes() {
  const signed = false;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {signed ? (
          <>
            <Stack.Screen
              name="Menu"
              options={{ headerShown: false }}
              component={Menu}
            />
            <Stack.Screen
              name="Goals"
              options={{ headerShown: false }}
              component={Goals}
            />
            <Stack.Screen
              name="Habits"
              options={{ headerShown: false }}
              component={Habits}
            />
            <Stack.Screen
              name="Principles"
              options={{ headerShown: false }}
              component={Principles}
            />
            <Stack.Screen
              name="Todo"
              options={{ headerShown: false }}
              component={Todo}
            />
            <Stack.Screen
              name="Settings"
              options={{ headerShown: false }}
              component={Settings}
            />

          </>
        ) : (
            <Stack.Screen
              name="Login"
              options={{ headerShown: false }}
              component={Login}
            />
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
