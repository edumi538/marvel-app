import React, {useEffect, createRef} from 'react';
import {
  ConsumeApiPersonagens,
  Reset,
} from '../Actions/screenActions/GetPersonagenApiAction';
import {
  TouchableOpacity,
  Image,
  Text,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {View} from 'native-base';
import {colors} from 'react-native-elements';

export const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const arrayPersonagens = useSelector(state => state.HomeReducer.chars);
  const page = useSelector(state => state.HomeReducer.page);
  const flatList = createRef();

  const onPageDown = () => {
    dispatch(ConsumeApiPersonagens(page + 20));
    console.tron.log('PageDown:' + page);
  };

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
      <FlatList
        onEndReached={onPageDown}
        onEndReachedThreshold={0.1}
        data={arrayPersonagens}
        renderItem={_renderItem}
      />
    </ImageBackground>
  );
};
