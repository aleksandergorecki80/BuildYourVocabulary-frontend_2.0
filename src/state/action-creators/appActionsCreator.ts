import { Dispatch } from 'react';
import { AppActions } from '../action-interfaces/appActionInterfaces';
import { ActionTypes } from '../action-types/actionTypes';
import { variables } from '../../utils/variables';

export const answeringSuccess = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch({
      type: ActionTypes.ANWERING_SUCCESS,
    });

    setTimeout(() => {
      dispatch({
        type: ActionTypes.CLEAR_MESSAGE,
      });
    }, variables.delay);

    setTimeout(() => {
      dispatch({
        type: ActionTypes.RESET_DEFINITIONS,
      });
    }, variables.delay);

    setTimeout(() => {
      dispatch({
        type: ActionTypes.RESET_APP,
      });
    }, variables.delay);

  };
};

export const answeringFalse = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch({
      type: ActionTypes.ANWERING_FALSE,
    });
    setTimeout(() => {
      dispatch({
        type: ActionTypes.CLEAR_MESSAGE,
      });
    }, variables.delay);
  };
};

export const showAnswer = () => {
  return (dispatch: Dispatch<AppActions>) => {
        dispatch({
      type: ActionTypes.SHOW_ANSWER
    });
  }
}

export const resetGame = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch({
      type: ActionTypes.RESET_DEFINITIONS,
    });
    dispatch({
      type: ActionTypes.RESET_APP,
    });
  }
}
