import React, {useEffect} from 'react';
import {ConsumeApiPersonagens} from '../Actions/screenActions/GetPersonagensAction';
import {
  TouchableOpacity,
  Image,
  Text,
  ImageBackground,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
export const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const arrayPersonagens = useSelector(state => state.HomeReducer.chars);
  const page = useSelector(state => state.HomeReducer.page);

  // useEffect(() => {
  //   console.log(page);
  //   dispatch(ConsumeApiPersonagens(1));
  // }, [dispatch, page]);

  const onPageDown = () => {
    dispatch(ConsumeApiPersonagens(page + 3));
    console.log('PageDown:' + page);
  };

  // const onPageUp = () => {
  //   if (page >= 3) {
  //     dispatch(ConsumeApiPersonagens(page - 3));
  //     console.log('PageUp:' + page);
  //   }
  // };

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
        onScroll={({nativeEvent}) => {
          if (nativeEvent.contentInset.y === 0) {
            onPageDown();
          }
        }}
        // onEndReached={onPageDown}
        // onEndReachedThreshold={0.1}
        initialNumToRender={page}
        data={arrayPersonagens}
        renderItem={_renderItem}
      />
    </ImageBackground>
  );
};
