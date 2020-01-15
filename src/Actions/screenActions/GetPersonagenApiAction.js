import {
  PERSON_ON_REQUEST,
  PERSON_ON_SUCCESS,
  PERSON_ON_FAILED,
  PERSON_ON_PAGE,
  PERSON_ON_LOADING_PAGE,
  ON_INFINITE_SCROLL,
  SET_TO_RESET_LIST,
  ON_SEARCH_DATA,
} from '../../Types/ActionTypes';
import Axios from 'axios';
import md5 from 'js-md5';
import {Alert} from 'react-native';

const PUBLIC_KEY = '0a91ae0d737326d0980b58bd11529aff';
const PRIVATE_KEY = '97e6ba85c784f341cf968e222a0194b9551804e7';

const timestamp = Number(new Date());
const hash = md5.create();
hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY);

export const ConsumeApiPersonagens = page => async (dispatch, getState) => {
  dispatch(LoadingOnPageSuccess(true));
  dispatch(ApiRequest(page));
  await Axios.get(
    `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=20&offset=${page}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`,
  )
    .then(response => {
      const {data} = response.data;
      const results = data.results;
      const personagens = getState().HomeReducer.chars;
      if (personagens.length <= 0) {
        dispatch(ApiSuccess(results));
      } else {
        const arrayFinal = [...personagens, ...results];
        dispatch(ApiSuccess(arrayFinal));
      }
      setTimeout(() => dispatch(LoadingOnPageSuccess(false)), 700);
    })
    .catch(error => dispatch(ApiFailure(error)));
};

export const Reset = value => dispatch => {
  dispatch(ResetList(value));
};

export const ApiRequest = page => {
  return {
    type: PERSON_ON_PAGE,
    payload: page,
  };
};

export const ApiSuccess = response => {
  return {
    type: PERSON_ON_SUCCESS,
    payload: response,
  };
};

export const ApiFailure = error => {
  return {
    type: PERSON_ON_FAILED,
    payload: error,
  };
};
export const LoadingOnPageSuccess = loading => {
  return {
    type: PERSON_ON_LOADING_PAGE,
    payload: loading,
  };
};
export const ResetList = () => {
  return {
    type: SET_TO_RESET_LIST,
  };
};
