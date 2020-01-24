import React from 'react';
import {PERSON_ON_PAGE_DOWN} from '../../Types/ActionTypes';
import {LoadingOnPageSuccess} from './GetPersonagenApiAction';
import {ON_CONCAT_DATA} from '../../Types/ActionTypes';
import Api from '../../Requests/charactersApi';

export const ConcatData = offset => (dispatch, getState) => {
  dispatch(LoadingOnPageSuccess(true));
  dispatch(ApiRequest());
  Api(offset).then(response => {
    const {data} = response.data;
    const results = data.results;
    const personagens = getState().HomeReducer.chars;
    const arrayFinal = [...personagens, ...results];
    dispatch(SetConcat(arrayFinal));
    dispatch(LoadingOnPageSuccess(false));
  });
};

export const SetConcat = response => {
  return {
    type: ON_CONCAT_DATA,
    payload: response,
  };
};

export const ApiRequest = page => {
  return {
    type: PERSON_ON_PAGE_DOWN,
  };
};
