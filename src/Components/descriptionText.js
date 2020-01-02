import {View, Text} from 'react-native';
import React from 'react';
import {DescriptionAction} from '../Actions/screenActions/DescriptionTitleAction';

export const ComponenteDescription = () => {
  return (
    <View>
      <Text>
        <DescriptionAction descriptionAction="DESCRIPTION PAGE" />
      </Text>
    </View>
  );
};
