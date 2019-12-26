import React, {useEffect} from 'react';
import {
  ScrollView,
  Image,
  Dimensions,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

export default function(props) {
  const nav = props.navigation;

  // const renderItem = item => {
  //   return <Text>{item.name}</Text>;
  // };

  useEffect()

  const renderizado = () => {
    const {hero} = nav.state.params;
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'red'}}>
        <Image
          source={{uri: `${hero.thumbnail}`}}
          style={{width: SCREEN_WIDTH, height: SCREEN_WIDTH}}
        />
        <Text style={{padding: 10, fontSize: 20}}>{hero.name}</Text>
        {/* <Text style={{padding: 10}}>{hero.description}</Text> */}
        <Text style={{textAlign: 'center', fontSize: 15, padding: 30}}>
          Quadrinhos dos quais participou:
        </Text>
        <ScrollView style={{flex: 1}}>
          {/* <FlatList
            data={hero.comics.items}
            renderItem={({item}) => renderItem(item)}
            keyExtractor={(item, index) => index}
          /> */}
        </ScrollView>
      </SafeAreaView>
    );
  };
  renderizado;
}
