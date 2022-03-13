import { ActionTypes } from '../action-types/actionTypes';
import { ResetDefinitions } from './searchActionInterfaces';

interface AnsweringSuccess {
  type: ActionTypes.ANWERING_SUCCESS;
}

interface AnsweringFalse {
  type: ActionTypes.ANWERING_FALSE;
}

interface ShowAnswer {
  type: ActionTypes.SHOW_ANSWER;
}

interface ClearMessage {
  type: ActionTypes.CLEAR_MESSAGE
}

interface ResetApp {
  type: ActionTypes.RESET_APP
}

export interface SetWordSuccess {
  type: ActionTypes.SET_WORD_SUCCESS;
  payload: string;
}

export type AppActions =
  | AnsweringSuccess
  | AnsweringFalse
  | ClearMessage
  | ShowAnswer
  | SetWordSuccess
  | ResetDefinitions
  | ResetApp
  ;
