import React from 'react';
import {Text, View, FlatList, YellowBox} from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';

export const ListCollapseQuadrinhos = ({heroes}) => {
  YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
  const _renderItem = heroes => {
    return (
      <View style={{flex: 1}}>
        <Text>{heroes.item.name}</Text>
      </View>
    );
  };

  return (
    <Collapse style={{borderBottomWidth: 1, borderTopWidth: 1, marginTop: 10}}>
      <CollapseHeader
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
          color: 'white',
          backgroundColor: '#FFF',
        }}>
        <View>
          <Text style={{color: '#2e2e1f'}}>⚡ Quadrinhos Presentes</Text>
        </View>
      </CollapseHeader>
      <CollapseBody
        style={{
          backgroundColor: '#e0e0d1',
          paddingLeft: 10,
          paddingBottom: 5,
          paddingTop: 5,
        }}>
        <FlatList
          data={heroes.comics.items}
          renderItem={_renderItem}
          keyExtractor={item => item.id}
        />
      </CollapseBody>
    </Collapse>
  );
};
