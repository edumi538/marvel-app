import {homeTitle, Api} from '../../Reducers/apiReducer';
import {createStore} from 'redux';
import {createAction} from 'redux-actions';
import {store} from '../../Store/index';
import {
  PERSON_ON_FETCHING,
  PERSON_ON_SUCCESS,
  PERSON_ON_FAILED,
} from '../../Types/ActionTypes';
import Axios from 'axios';
import md5 from 'js-md5';
import {Alert} from 'react-native';

const PUBLIC_KEY = '0a91ae0d737326d0980b58bd11529aff';
const PRIVATE_KEY = '97e6ba85c784f341cf968e222a0194b9551804e7';

const timestamp = Number(new Date());
const hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

export const ConsumeApiPersonagens = offset => async dispatch => {
  console.tron.log(offset);
  try {
    const response = await Axios.get(
      `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=10&offset=${offset}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
    );

    if (response.status !== 200) {
      dispatch({
        type: PERSON_ON_FETCHING,
      });
    }
    dispatch({
      type: PERSON_ON_SUCCESS,
      payload: response.data.data.results,
    });
  } catch (error) {
    Alert.alert('Error', 'Houve um erro que impediu o consumo dos dados');
    dispatch({
      type: PERSON_ON_SUCCESS,
      payload: [],
    });
  }
  // console.tron.log(getState());
};
