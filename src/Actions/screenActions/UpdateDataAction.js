import {UPDATE_ON_SUCCESS} from '../../Types/ActionTypes';

export const UpdateSuccess = ListNew => {
  return {
    type: UPDATE_ON_SUCCESS,
    payload: ListNew,
  };
};
