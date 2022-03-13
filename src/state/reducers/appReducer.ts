import { ActionTypes } from '../action-types/actionTypes';
import { AppActions } from '../action-interfaces/appActionInterfaces';

interface AppState {
  word: string;
  answerCorrect: boolean;
  isAnswerShown: boolean;
  showMessage: boolean
}

const defaultState = {
  word: '',
  amountOfLettersShown: 0,
  answerCorrect: false,
  isAnswerShown: false,
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
        isAnswerShown: true,
      };
    case ActionTypes.CLEAR_MESSAGE:
      return {
        ...state,
        showMessage: false
      }
    case ActionTypes.RESET_APP:
      return {
        word: '',
        answerCorrect: false,
        isAnswerShown: false,
        showMessage: false,
      }
    default:
      return state;
  }
};

export default appReducer;
