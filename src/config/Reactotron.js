import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';

let tron;

if (__DEV__) {
  tron = Reactotron.configure({
    // host: '192.168.10.107',
    // host: '192.168.10.245',
    // host: '192.168.200.15',
    // host: '192.168.10.245',
    // host: '192.168.42.141',
    host: '192.168.10.229', // Miranda
    name: 'Marvel App',
  })
    .useReactNative()
    .setAsyncStorageHandler(AsyncStorage)
    .use(reactotronRedux())
    .connect();

  console.tron = tron;
  tron.clear();
}

export default tron;
