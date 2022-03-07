import { ActionTypes } from '../action-types/actionTypes';

interface SearchDefinitions {
  type: ActionTypes.SERCH_DEFINITIONS;
}

interface SearchDefinitionsSuccess {
  type: ActionTypes.SERCH_DEFINITIONS_SUCCESS;
  payload: string[];
}

interface SearchDefinitionsError {
  type: ActionTypes.SERCH_DEFINITIONS_ERROR;
  payload: string;
}

export type SearchActions =
  | SearchDefinitions
  | SearchDefinitionsSuccess
  | SearchDefinitionsError;
