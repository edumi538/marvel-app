import React from 'react';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {Button} from 'react-native';
import {HomeScreen} from '../Screens/HomeScreen';
import {DetailScreen} from '../Screens/DetailScreen';
import {UpdateScreen} from '../Screens/UpdateScreen';
import {NavigationNativeContainer} from '@react-navigation/native';
import {LoadingRender} from '../Components/LoadingRender';
import {useSelector} from 'react-redux';
import {Searchbar} from '../Components/SearchBar';
export default function() {
  const loadingMore = useSelector(state => state.HomeReducer.loadingMore);
  const Stack = createStackNavigator();
  return (
    <NavigationNativeContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontFamily: 'AmericanCaptain-MdEY',
            // fontWeight: '',
            color: 'white',
          },
          headerStyle: {
            backgroundColor: 'red',
          },
          headerRight: () => <LoadingRender loading={loadingMore} />,
        }}
        initialRouteName="HomeScreen">
        <Stack.Screen
          options={{
            title: 'Marvel App\t\t\t\t\t\t\t\t\t\t\t\t\tPersonagens',
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen
          name="DetailScreen"
          options={{
            title:
              'Marvel App\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tDetalhes',
          }}
          component={DetailScreen}
        />
        <Stack.Screen
          name="UpdateScreen"
          options={{
            title:
              'Marvel App\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tAtualizar dados',
          }}
          component={UpdateScreen}
        />
      </Stack.Navigator>
    </NavigationNativeContainer>
  );
}
