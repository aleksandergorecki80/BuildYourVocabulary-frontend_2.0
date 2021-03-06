import { ActionTypes } from '../action-types/actionTypes';
import { SearchActions } from '../action-interfaces/searchActionInterfaces';

interface DefinitionsState {
  loading: boolean;
  error: string | null;
  data: {}[] | [];
}

const defaultState = {
  loading: false,
  error: null,
  data: [],
};

const definitionsReducer = (
  state: DefinitionsState = defaultState,
  action: SearchActions
): DefinitionsState => {
  switch (action.type) {
    case ActionTypes.SERCH_DEFINITIONS:
      return {
        loading: true,
        error: null,
        data: [],
      };

    case ActionTypes.SERCH_DEFINITIONS_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };

    case ActionTypes.SERCH_DEFINITIONS_ERROR:
      return {
        loading: false,
        error: action.payload,
        data: [],
      };

    case ActionTypes.RESET_DEFINITIONS:
      return {
        loading: false,
        error: null,
        data: [],
      }

    default:
      return state;
  }
};

export default definitionsReducer;
