import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {TouchableOpacity, View, FlatList, Text, Image} from 'react-native';
import md5 from 'js-md5';

const PUBLIC_KEY = '0a91ae0d737326d0980b58bd11529aff';
const PRIVATE_KEY = '97e6ba85c784f341cf968e222a0194b9551804e7';

export default function Home(props) {
  const [dados, setDados] = useState(null);

  const nav = props.navigation;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const timestamp = Number(new Date());
    const hash = md5.create();
    hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

    const response = await axios.get(
      `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
    );

    const responseJson = response.data.data.results.map(Hero => ({
      name: `${Hero.name}`,
      thumbnail: `${Hero.thumbnail.path}.${Hero.thumbnail.extension}`,
    }));
    setDados(responseJson);
    console.tron.log(dados);
  };
  // eslint-disable-next-line no-undef
  const _renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={nav.navigate('Description', {hero: item})}
        style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
        <Image
          style={{height: 50, width: 50, borderRadius: 25}}
          source={{uri: `${item.thumbnail}`}}
        />
        <Text style={{marginLeft: 10}}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={dados}
      renderItem={_renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => (
        <View style={{height: 1, backgroundColor: '#f7f7f7'}} />
      )}
    />
  );
}
