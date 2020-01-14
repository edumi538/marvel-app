import React from 'react';
import {Button, TextInput, View} from 'react-native';
import {Formik} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import {UpdateSuccess} from '../Actions/screenActions/UpdateDataAction';
import {} from 'react-redux';
export const FormUpdate = ({personagem}) => {
  const dispatch = useDispatch();
  const personagens = useSelector(state => state.HomeReducer.chars);

  const initialValues = {
    name: personagem.name || '',
    description: personagem.description || '',
  };

  function onSubmit(values) {
    const heroi = {
      ...personagem,
      name: values.name,
      description: values.description,
    };
    const teste = [...personagens, heroi];
    dispatch(UpdateSuccess(teste));
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <TextInput
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          <TextInput
            onChangeText={handleChange('description')}
            onBlur={handleBlur('description')}
            value={values.description}
          />
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};
