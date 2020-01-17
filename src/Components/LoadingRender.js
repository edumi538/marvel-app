import React from 'react';
import {View, ActivityIndicator} from 'react-native';

export const LoadingRender = ({loading}) => {
  if (!loading) {
    return null;
  }
  return (
    <ActivityIndicator
      animating
      size="large"
      color="#FFF"
      style={{paddingRight: 10}}
    />
  );
};
