import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  ImageBackground,
  Text,
  Picker,
} from 'react-native';
import {Separator} from 'native-base';
import {Card, Divider} from 'react-native-elements';
import {ListCollapseSeries} from '../Components/CollapseListSeries';
import {ListCollapseQuadrinhos} from '../Components/CollapseListQuadrinhos';
export const DetailScreen = ({route, navigation}) => {
  const {heroes} = route.params;
  console.tron.log(heroes);
  return (
    <ScrollView>
      <SafeAreaView contentInsetAdjustmentBehavior="automatic">
        <ImageBackground
          source={require('../Image/marvel.jpeg')}
          style={{width: '100%', height: '100%'}}>
          <Card
            title={'Detalhes sobre:' + '\t' + heroes.name}
            image={{
              uri: `${heroes.thumbnail.path}.${heroes.thumbnail.extension}`,
            }}
            imageStyle={{width: '100%', height: 350}}
            containerStyle={{backgroundColor: '#1e2c3b'}}
            titleStyle={{
              fontFamily: 'AmericanCaptain-MdEY',
              fontSize: 15,
              color: '#f2f5f7',
            }}>
            <Text
              style={{
                fontFamily: 'AmericanCaptain-MdEY',
                fontSize: 13,
                color: '#f2f5f7',
              }}>
              {heroes.description}
            </Text>
            <Divider style={{marginTop: 10, marginBottom: 10}} />
            <ListCollapseSeries heroes={heroes} />
            <ListCollapseQuadrinhos heroes={heroes} />
          </Card>
        </ImageBackground>
      </SafeAreaView>
    </ScrollView>
  );
};
