import {
  PERSON_ON_PAGE,
  PERSON_ON_FAILED,
  PERSON_ON_SUCCESS,
  PERSON_ON_LOADING_PAGE,
  UPDATE_ON_SUCCESS,
  SET_TO_RESET_LIST,
  ON_SEARCH_DATA,
  ON_CONCAT_DATA,
} from '../Types/ActionTypes';

const INITIAL_STATE = {
  chars: [],
  page: 1,
  loadingMore: true,
};

export default function Api(state = INITIAL_STATE, action) {
  switch (action.type) {
    case PERSON_ON_SUCCESS:
      return {
        ...state,
        chars: action.payload,
      };
    case PERSON_ON_LOADING_PAGE:
      return {
        ...state,
        loadingMore: action.payload,
      };
    case PERSON_ON_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case UPDATE_ON_SUCCESS:
      return {
        ...state,
        chars: action.payload,
      };
    case PERSON_ON_FAILED:
      return {
        ...state,
        chars: action.payload,
      };
    case SET_TO_RESET_LIST:
      return {
        ...state,
        chars: [],
      };
    case ON_CONCAT_DATA:
      return {
        ...state,
        chars: action.payload,
      };
    default:
      return state;
  }
}
