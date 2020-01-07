import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider, useSelector} from 'react-redux';
import {store, persistor} from './src/Store/index';
import Routes from './src/Routes/routes';
// import {store} from './src/Actions/screenActions/HomeTItleAction';

if (__DEV__) {
  import('./src/config/Reactotron');
}
class App extends Component {
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
