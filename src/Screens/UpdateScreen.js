import React from 'react';
import {View, Text, ImageBackground, Button} from 'react-native';
import {useFormik} from 'formik';
import {TextInput} from 'react-native-gesture-handler';
import {withTheme} from 'react-native-elements';

export const UpdateScreen = ({route}) => {
  const {update} = route.params;
  console.tron.log(update);

  const formik = useFormik({
    initialValues: {
      name: update.name,
      description: update.description,
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <ImageBackground
      source={require('../Image/marvel.jpeg')}
      style={{width: '100%', height: '100%'}}>
      <View>
        <TextInput
          style={{color: 'white'}}
          name="name"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <Button title="Submit" />
      </View>
    </ImageBackground>
  );
};
