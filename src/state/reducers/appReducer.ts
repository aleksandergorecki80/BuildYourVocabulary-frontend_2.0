import { ActionTypes } from '../action-types/actionTypes';
import { AppActions } from '../action-interfaces/appActionInterfaces';

interface AppState {
  answeringSuccess: boolean;
  showAnswer: boolean;
}

const defaultState = {
  answeringSuccess: false,
  showAnswer: false,
};

const appReducer = (state: AppState = defaultState, action: AppActions) => {
  switch (action.type) {
    case ActionTypes.ANWERING_SUCCESS:
      return {
        answeringSuccess: true,
        showAnswer: false,
      };
    case ActionTypes.SHOW_ANSWER:
      return {
        answeringSuccess: false,
        showAnswer: true,
      };
    default:
      return state;
  }
};

export default appReducer;
