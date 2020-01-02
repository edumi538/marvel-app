import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {AuthApi} from '../Actions/screenActions/HomeTItleAction';
import md5 from 'js-md5';

const PUBLIC_KEY = '0a91ae0d737326d0980b58bd11529aff';
const PRIVATE_KEY = '97e6ba85c784f341cf968e222a0194b9551804e7';

export const ComponentTestApi = () => {
  const dispatch = useDispatch();

  function HandleSubmit() {
    dispatch(AuthApi());
  }
  return (
    <View>
      <Button onPress={() => HandleSubmit()} title="Teste" />
    </View>
  );
};
