import { ActionTypes } from '../action-types/actionTypes';
import { SetWordSuccess } from './appActionInterfaces';

interface SearchDefinitions {
  type: ActionTypes.SERCH_DEFINITIONS;
}

interface SearchDefinitionsSuccess {
  type: ActionTypes.SERCH_DEFINITIONS_SUCCESS;
  payload: {
    partOfSpeech: string;
    text: string;
  }[];
}

interface SearchDefinitionsError {
  type: ActionTypes.SERCH_DEFINITIONS_ERROR;
  payload: string;
}



export type SearchActions =
  | SearchDefinitions
  | SearchDefinitionsSuccess
  | SearchDefinitionsError
  | SetWordSuccess;
