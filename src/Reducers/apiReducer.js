import {PERSON_ON_FETCHING, PERSON_ON_SUCCESS} from '../Types/ActionTypes';

const INITIAL_STATE = {
  chars: [],
  fetching: false,
};

export default function Api(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PERSON_ON_FETCHING:
      return {
        ...state,
        fetching: true,
      };
    case PERSON_ON_SUCCESS:
      return {
        ...state,
        fetching: false,
        chars: action.payload,
      };
    default:
      return state;
  }
}
