import {homeTitle, Api} from '../../Reducers/apiReducer';
import {createStore} from 'redux';
import {createAction} from 'redux-actions';
import {store} from '../../Store/index';
import {
  PERSON_ON_REQUEST,
  PERSON_ON_SUCCESS,
  PERSON_ON_FAILED,
  PERSON_ON_PAGE,
  PERSON_ON_LOADING_PAGE,
} from '../../Types/ActionTypes';
import Axios from 'axios';
import md5 from 'js-md5';
import {Alert} from 'react-native';

const PUBLIC_KEY = '0a91ae0d737326d0980b58bd11529aff';
const PRIVATE_KEY = '97e6ba85c784f341cf968e222a0194b9551804e7';

const timestamp = Number(new Date());
const hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

export const ConsumeApiPersonagens = page => async dispatch => {
  dispatch(LoadingOnPageSuccess(true));
  dispatch(ApiRequest(page));
  await Axios.get(
    `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=204&offset=${page}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
  )
    .then(response => {
      dispatch(ApiSuccess(response));
      setTimeout(() => dispatch(LoadingOnPageSuccess(false)), 700);
    })
    .catch(error => dispatch(ApiFailure(error)));
};

export const ApiRequest = page => {
  return {
    type: PERSON_ON_PAGE,
    page: page,
  };
};

export const ApiSuccess = response => {
  return {
    type: PERSON_ON_SUCCESS,
    payload: response.data.data.results,
  };
};
export const ApiFailure = error => {
  return {
    type: PERSON_ON_FAILED,
    error: error,
  };
};
export const LoadingOnPageSuccess = loading => {
  return {
    type: PERSON_ON_LOADING_PAGE,
    loadingMore: loading,
  };
};
