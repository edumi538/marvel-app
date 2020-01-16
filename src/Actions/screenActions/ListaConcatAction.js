import React from 'react';
import {ApiRequest, LoadingOnPageSuccess} from './GetPersonagenApiAction';
import {ON_CONCAT_DATA} from '../../Types/ActionTypes';
import Api from '../../Requests/charactersApi';

export const ConcatData = offset => (dispatch, getState) => {
  dispatch(LoadingOnPageSuccess(true));
  dispatch(ApiRequest(offset));
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
