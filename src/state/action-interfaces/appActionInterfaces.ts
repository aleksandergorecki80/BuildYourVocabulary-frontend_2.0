import { ActionTypes } from '../action-types/actionTypes';

interface AnsweringSuccess {
  type: ActionTypes.ANWERING_SUCCESS;
}

interface ShowAnswer {
  type: ActionTypes.SHOW_ANSWER;
}

export type AppActions = AnsweringSuccess | ShowAnswer;
