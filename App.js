import React from 'react';
import {StatusBar, Platform} from 'react-native';
import Home from './src/Screen/Home';
import Description from './src/Screen/Description';
// import Description from './src/Screen/Description';
import {createDrawerNavigator} from 'react-navigation';

if (__DEV__) {
  import('./config/Reactotron');
}

export default createDrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    Description: {
      screen: Description,
    },
  },
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    },
  },
);
