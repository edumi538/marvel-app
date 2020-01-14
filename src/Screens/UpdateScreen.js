import React from 'react';
import {View, Text, ImageBackground, Button, TextInput} from 'react-native';
import {Formik} from 'formik';
import {withTheme} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {FormUpdate} from '../Components/FormUpdate';
export const UpdateScreen = ({route}) => {
  const {update} = route.params;
  console.tron.log(update);

  return <FormUpdate personagem={update} />;
};
