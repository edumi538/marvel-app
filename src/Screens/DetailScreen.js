import React, {useEffect} from 'react';
import {View, ImageBackground, Text, Picker} from 'react-native';
import {Separator} from 'native-base';
import {Card, Divider} from 'react-native-elements';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
  AccordionList,
} from 'accordion-collapse-react-native';
export const DetailScreen = ({route, navigation}) => {
  const {heroes} = route.params;
  const teste = heroes.stories.items.map(storie => {
    return storie.name;
  });

  console.tron.log(teste);

  return (
    <View>
      <ImageBackground
        source={require('../Image/marvel.jpeg')}
        style={{width: '100%', height: '100%'}}>
        <Card
          title={'Detalhes sobre:' + heroes.name}
          image={{
            uri: `${heroes.thumbnail.path}.${heroes.thumbnail.extension}`,
          }}
          imageStyle={{width: '100%', height: 300}}
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
          <Divider style={{marginTop: 10}} />
          <Collapse>
            <CollapseHeader>
              <Separator bordered>
                <Text>Series</Text>
              </Separator>
            </CollapseHeader>
            <CollapseBody>
              <Text>Funcionou</Text>
            </CollapseBody>
          </Collapse>
        </Card>
      </ImageBackground>
    </View>
  );
};
