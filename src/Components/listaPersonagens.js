import React, {Component, useEffect} from 'react';
import {View, FlatList} from 'react-native';

// Componente para consumo de API
export const Lista = ({ personagens, renderItem}) => {
  return (
    <View>
      <FlatList
        data={personagens}
        renderItem={() => renderItem()}></FlatList>
    </View>
  );
};
