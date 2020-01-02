import {combineReducers} from 'redux';
import HomeReducer from './apiReducer';
import DescriptionReducer from './description_title';

export default combineReducers({
  HomeReducer,
  DescriptionReducer,
});
