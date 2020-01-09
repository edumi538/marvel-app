import {PERSON_ON_REQUEST, PERSON_ON_SUCCESS} from '../Types/ActionTypes';

const INITIAL_STATE = {
  chars: [],
  fetching: false,
  page: 1,
};

export default function Api(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PERSON_ON_REQUEST:
      return {
        ...state,
        fetching: true,
        page: action.page,
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
