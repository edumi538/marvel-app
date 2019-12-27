import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Home, Description} from './src/Screen/screens';
import {NavigationNativeContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
if (__DEV__) {
  import('./config/Reactotron');
}
class App extends Component {
  render() {
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
}

export default App;
