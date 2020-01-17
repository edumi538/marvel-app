import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {SearchBar} from 'react-native-elements';
import {
  searchData,
  ResetList,
} from '../Actions/screenActions/GetPersonagenApiAction';
export const Searchbar = ({setTextFilter}) => {
  const [text, setText] = useState('');

  return (
    <SearchBar
      containerStyle={{width: '100%', height: 45}}
      inputContainerStyle={{height: 1}}
      placeholder="Busca por nome"
      lightTheme
      round
      onChangeText={value => {
        setText(value);
        setTextFilter(value.toUpperCase());
      }}
      value={text}
      autoCorrect={false}
    />
  );
};
