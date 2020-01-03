import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, HomeScreen, Description} from '../Screen/screens';
import {NavigationNativeContainer} from '@react-navigation/native';
export default function() {
  const Stack = createStackNavigator();
  return (
    <NavigationNativeContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}
