import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Description} from '../Screen/screens';
import {NavigationNativeContainer} from '@react-navigation/native';
export default function() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationNativeContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Description" component={Description} />
      </Tab.Navigator>
    </NavigationNativeContainer>
  );
}
