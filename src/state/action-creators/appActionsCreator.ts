import { Dispatch } from 'react';
import { AppActions } from '../action-interfaces/appActionInterfaces';
import { ActionTypes } from '../action-types/actionTypes';

export const answeringSuccess = () => {
  return (dispatch: Dispatch<AppActions>) => {
    dispatch({
      type: ActionTypes.ANWERING_SUCCESS,
    });
    setTimeout(() => {
      dispatch({
        type: ActionTypes.CLEAR_MESSAGE,
      });
    }, 2000);
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
    }, 2000);
  };
};
