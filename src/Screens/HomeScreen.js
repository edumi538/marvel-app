import React, {useEffect, createRef, useState} from 'react';
import {Searchbar} from '../Components/SearchBar';
import {
  ConsumeApiInit,
  ResetList,
} from '../Actions/screenActions/GetPersonagenApiAction';
import {ConcatData} from '../Actions/screenActions/ListaConcatAction';
import {
  TouchableOpacity,
  Image,
  Text,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  YellowBox,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export const HomeScreen = ({navigation}) => {
  YellowBox.ignoreWarnings([
    'Warning: Failed child context type: Invalid child context',
  ]);
  const [search, setSearch] = useState(null);
  const [onScreenInit, setOnScreenInit] = useState(1);
  const dispatch = useDispatch();
  const arrayPersonagens = useSelector(state => state.HomeReducer.chars);
  const page = useSelector(state => state.HomeReducer.page);
  const flatList = createRef();

  useEffect(() => {
    dispatch(ConsumeApiInit());
    console.tron.log('renderizei');
    return () => {
      dispatch(ResetList());
    };
  }, []);

  const onPageDown = () => {
    dispatch(ConcatData(page + 20));
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
    <React.Fragment>
      <Searchbar setTextFilter={setSearch} />
      <ImageBackground
        source={require('../Image/marvel.jpeg')}
        style={{width: '100%', height: '100%'}}>
        <FlatList
          onEndReached={onPageDown}
          onEndReachedThreshold={0.1}
          data={
            search
              ? arrayPersonagens.filter(item =>
                  item.name.toUpperCase().includes(search),
                )
              : arrayPersonagens
          }
          renderItem={_renderItem}
        />
      </ImageBackground>
    </React.Fragment>
  );
};
