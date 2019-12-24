import React from 'react';
import axios from 'axios';
import {TouchableOpacity, View, FlatList, Text, Image} from 'react-native';
import md5 from 'js-md5';

const PUBLIC_KEY = '0a91ae0d737326d0980b58bd11529aff';
const PRIVATE_KEY = '97e6ba85c784f341cf968e222a0194b9551804e7';

export default class Home extends React.PureComponent {
  static navigationOptions = {
    title: 'Heroes',
  };

  state = {
    dados: [],
  };

  async componentDidMount() {
    const timestamp = Number(new Date());
    const hash = md5.create();
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

    const response = await fetch(
      `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
    );
    const responseJson = await response.json();
    this.setState({dados: responseJson.data.results});
  }

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

  _onItemPress = item => {
    this.props.navigation.navigate('Description', {hero: item});
  };

  render() {
    return (
      <FlatList
        data={this.state.dados}
        renderItem={this._renderItem}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => (
          <View style={{height: 1, backgroundColor: '#f7f7f7'}} />
        )}
      />
    );
  }
}
