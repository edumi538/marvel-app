import {UPDATE_ON_SUCCESS} from '../../Types/ActionTypes';
import {ResetList} from '../screenActions/GetPersonagenApiAction';
import React, {useState} from 'react';
export const SaveUpdateData = value => dispatch => {
  dispatch(ResetList());
  dispatch(UpdateSuccess(value));
};

export const UpdateSuccess = ListNew => {
  return {
    type: UPDATE_ON_SUCCESS,
    payload: ListNew,
  };
};
