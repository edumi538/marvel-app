import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {Button} from 'react-native';
import {HomeScreen} from '../Screens/HomeScreen';
import {DetailScreen} from '../Screens/DetailScreen';
import {NavigationNativeContainer} from '@react-navigation/native';

export default function() {
  const Stack = createStackNavigator();
  return (
    <NavigationNativeContainer>
      <Stack.Navigator
        screenOptions={{
          title: 'Marvel APP',
          headerTitleStyle: {
            fontFamily: 'AmericanCaptain-MdEY',
            // fontWeight: '',
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'red',
          },
        }}
        initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}
