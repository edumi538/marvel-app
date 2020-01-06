import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
} from 'react-native';
import {StackActions} from '@react-navigation/routers';
import {useDispatch, useSelector} from 'react-redux';
import {AuthApi} from '../Actions/screenActions/HomeTItleAction';

export const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const arrayPersonagens = useSelector(state => state.HomeReducer.chars);

  useEffect(() => {
    dispatch(AuthApi());
  }, [dispatch]);

  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('DetailScreen', {
            heroes: item,
          });
        }}
        style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
        <Image
          style={{height: 70, width: 70, borderRadius: 25}}
          source={{
            uri: `${item.thumbnail.path}.${item.thumbnail.extension}`,
          }}
        />
        <Text style={{marginLeft: 30, color: '#FFF'}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ImageBackground
      source={require('../Image/marvel.jpeg')}
      style={{width: '100%', height: '100%'}}>
      <FlatList data={arrayPersonagens} renderItem={_renderItem} />
    </ImageBackground>
  );
};
export const DetailScreen = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require('../Image/marvel.jpeg')}
        style={{width: '100%', height: '100%'}}
      />
    </View>
  );
};

//https://gist.github.com/relferreira/a68fa3efe84567472776a564ec1a0123
//https://github.com/ecavalcanti/RNMarvel/blob/master/src/screens/Home.js#L29
