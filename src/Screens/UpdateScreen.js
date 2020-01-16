import React from 'react';
import {View, Text, ImageBackground, Button, TextInput} from 'react-native';
import {Formik} from 'formik';
import {withTheme} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {Card, Divider} from 'react-native-elements';
import {FormUpdate} from '../Components/FormUpdate';
export const UpdateScreen = ({route}) => {
  const {update} = route.params;
  console.tron.log(update);

  return (
    <ImageBackground
      source={require('../Image/marvel.jpeg')}
      style={{width: '100%', height: '100%'}}>
      <FormUpdate personagem={update} />
    </ImageBackground>
  );
};
