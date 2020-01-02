import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ComponentTestApi} from '../Components/homeText';
import {ComponenteDescription} from '../Components/descriptionText';

export class Home extends Component {
  render() {
    return <ComponentTestApi />;
  }
}
export class Description extends Component {
  render() {
    return <ComponenteDescription />;
  }
}
