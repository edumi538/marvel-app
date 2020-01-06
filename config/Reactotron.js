import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';

let tron;

if (__DEV__) {
  tron = Reactotron.configure({
    // host: '192.168.10.107',
    // host: '192.168.10.245',
    // host: '192.168.200.15',
    // host: '192.168.10.245',
    // host: '192.168.42.141',
    host: '192.168.25.234', // Miranda
    name: 'Marvel App',
  })
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  console.tron = tron;
  tron.clear();
}

export default tron;
