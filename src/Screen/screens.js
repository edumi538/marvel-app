import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ComponentTestApi} from '../Components/homeText';
import {ComponenteDescription} from '../Components/descriptionText';
import {LoginComp} from '../Components/LoginComponent';

export class LoginScreen extends Component {
  render() {
    return <LoginComp />;
  }
}
export class HomeScreen extends Component {
  render() {
    // return <ComponentTestApi />;
    return null;
  }
}
export class DescriptionScreen extends Component {
  render() {
    return <ComponenteDescription />;
  }
}
