import React from 'react';
import {Button, TextInput, View, Alert, Text} from 'react-native';
import {Input, Label, Content, Item} from 'native-base';
import {Card} from 'react-native-elements';
import {Formik, isInteger} from 'formik';
import {useSelector, useDispatch} from 'react-redux';
import {SaveUpdateData} from '../Actions/screenActions/UpdateDataAction';
import * as Yup from 'yup';

const UpdateSchema = Yup.object().shape({
  name: Yup.string()
    .strict(true)
    .min(2, 'Nome Muito Pequeno!')
    .max(50, 'Nome Muito Grande!')
    .required('Esse campo é obrigatório *'),
  description: Yup.string()
    .min(10, 'Descrição muito curta!')
    .required('Esse campo é obrigatório *'),
});

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
    const arrayFilter = personagens.map(item => {
      if (item.id === personagem.id) {
        return heroi;
      } else {
        return item;
      }
    });
    dispatch(SaveUpdateData(arrayFilter));
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UpdateSchema}
      onSubmit={onSubmit}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <Content>
          <Item
            rounded
            style={{
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              backgroundColor: '#FFF',
            }}>
            <Label style={{paddingLeft: 5, paddingRight: -3}}>Nome:</Label>
            <Input
              placeholder="Nome"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
          </Item>
          {errors.name && touched.name ? (
            <Text style={{color: 'red', paddingLeft: 25, paddingTop: 20}}>
              {errors.name}
            </Text>
          ) : null}
          <Item
            rounded
            style={{
              marginLeft: 10,
              marginRight: 10,
              marginTop: 20,
              backgroundColor: '#FFF',
            }}>
            <Label style={{paddingLeft: 5, paddingRight: -3}}>Descrição:</Label>
            <Input
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
            />
          </Item>
          {errors.description && touched.description ? (
            <Text style={{color: 'red', paddingLeft: 25, paddingTop: 20}}>
              {errors.description}
            </Text>
          ) : null}
          <View style={{marginTop: 425}}>
            <Button onPress={handleSubmit} title="Editar" color="red" />
          </View>
        </Content>
      )}
    </Formik>
  );
};
