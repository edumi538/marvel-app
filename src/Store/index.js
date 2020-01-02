import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';

import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';

import tron from '../config/Reactotron';
import reducers from '../Reducers/reducerCombine';

const middlewares = [multi, thunk];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const enhancers =
  __DEV__ === true
    ? compose(
        applyMiddleware(...middlewares),
        tron.createEnhancer(),
      )
    : compose(applyMiddleware(...middlewares));

const store =
  __DEV__ === true
    ? createStore(persistedReducer, {}, enhancers)
    : createStore(persistedReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

export {store, persistor};
