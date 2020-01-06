import React, {Component, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ComponenteDescription} from '../Components/descriptionText';
import {ComponentTestApi} from '../Components/listaPersonagens';
import {useDispatch, useSelector} from 'react-redux';
import {AuthApi} from '../actions/screenActions/HomeTItleAction';
import {Lista} from '../Components/listaPersonagens';

export const HomeScreen = () => {
  const dispatch = useDispatch();
  const [personagens] = useSelector(state => state.chars);

  useEffect(() => {
    dispatch(AuthApi());
  }, []);

  _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => this._onItemPress(item)}
        style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
        <Image
          style={{height: 50, width: 50, borderRadius: 25}}
          source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}`}}
        />
        <Text style={{marginLeft: 10}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return <FlatList data={personagens} renderItem={this._renderItem} />;
};
export class DescriptionScreen extends Component {
  render() {
    return <ComponenteDescription />;
  }
}

//https://gist.github.com/relferreira/a68fa3efe84567472776a564ec1a0123
//https://github.com/ecavalcanti/RNMarvel/blob/master/src/screens/Home.js#L29