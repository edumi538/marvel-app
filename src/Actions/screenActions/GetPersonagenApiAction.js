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
import Api from '../../Requests/charactersApi';
import React, {useState} from 'react';
export const ConsumeApiInit = () => dispatch => {
  dispatch(ApiRequest(1));
  Api(1)
    .then(response => {
      const {data} = response.data;
      const results = data.results;
      dispatch(ApiSuccess(results));
    })
    .catch(error => dispatch(ApiFailure(error)));
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
