import { ActionTypes } from '../action-types/actionTypes';
import { AppActions } from '../action-interfaces/appActionInterfaces';

interface AppState {
  word: string;
  answerCorrect: boolean;
  showAnswer: boolean;
  showMessage: boolean
}

const defaultState = {
  word: '',
  answerCorrect: false,
  showAnswer: false,
  showMessage: false,
};

const appReducer = (state: AppState = defaultState, action: AppActions) => {
  switch (action.type) {
    case ActionTypes.SET_WORD_SUCCESS: {
      return {
        ...state,
        word: action.payload,
      };
    }
    case ActionTypes.ANWERING_SUCCESS:
      return {
        ...state,
        showMessage: true,
        answerCorrect: true,
      };
    case ActionTypes.ANWERING_FALSE:
      return {
        ...state,
        showMessage: true,
        answerCorrect: false,
      };
    case ActionTypes.SHOW_ANSWER:
      return {
        ...state,
        showAnswer: true,
      };
    case ActionTypes.CLEAR_MESSAGE:
      return {
        ...state,
        showMessage: false
      }
    default:
      return state;
  }
};

export default appReducer;
