import {
  PERSON_ON_PAGE,
  PERSON_ON_FAILED,
  PERSON_ON_SUCCESS,
} from '../Types/ActionTypes';

const INITIAL_STATE = {
  chars: [],
  page: 1,
  fetching: false,
};

export default function Api(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PERSON_ON_SUCCESS:
      return {
        ...state,
        fetching: false,
        chars: action.payload,
      };
    case PERSON_ON_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case PERSON_ON_FAILED:
      return {
        ...state,
        fetching: false,
        chars: action.payload,
      };
    default:
      return state;
  }
}
