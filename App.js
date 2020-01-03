import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider, useSelector} from 'react-redux';
import {AuthScreen} from './src/Screen/screens';
import {store, persistor} from './src/Store/index';
import Routes from './src/Routes/routes';
import FirebaseConfig from './src/config/firebaseConfig';
// import {store} from './src/Actions/screenActions/HomeTItleAction';
import * as firebase from 'firebase';

if (__DEV__) {
  import('./src/config/Reactotron');
}
class App extends Component {
  componentDidMount() {
    FirebaseConfig;
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Routes />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
