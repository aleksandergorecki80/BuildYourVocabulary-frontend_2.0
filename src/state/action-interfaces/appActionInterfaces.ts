import { ActionTypes } from '../action-types/actionTypes';

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

export interface SetWordSuccess {
  type: ActionTypes.SET_WORD_SUCCESS;
  payload: string;
}

export type AppActions =
  | AnsweringSuccess
  | AnsweringFalse
  | ClearMessage
  | ShowAnswer
  | SetWordSuccess;
