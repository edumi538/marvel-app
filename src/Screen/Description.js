import React, {Component} from 'react';
import {
  ScrollView,
  Image,
  Dimensions,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export default class Description extends Component {
  static navigationOptions = {
    title: 'Description',
  };

  renderItem = item => {
    return <Text>{item.name}</Text>;
  };

  render() {
    const {hero} = this.props.navigation.state.params;
    console.tron.log(hero.comics.items);
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
        <Image
          source={{uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}`}}
          style={{width: SCREEN_WIDTH, height: SCREEN_WIDTH}}
        />
        <Text style={{padding: 10, fontSize: 20}}>{hero.name}</Text>
        <Text style={{padding: 10}}>{hero.description}</Text>
        <Text style={{textAlign: 'center', fontSize: 15, padding: 30}}>
          Quadrinhos dos quais participou:
        </Text>
        <ScrollView style={{flex: 1}}>
          <FlatList
            data={hero.comics.items}
            renderItem={({item}) => this.renderItem(item)}
            keyExtractor={(item, index) => index}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
}
