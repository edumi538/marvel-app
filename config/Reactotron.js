import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';

let tron;

if (__DEV__) {
  tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({
      name: 'Marvel App',
    })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  console.tron = tron;
  tron.clear();
}

export default tron;
