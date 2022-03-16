import axios from 'axios';
import { Dispatch } from 'react';
import { ActionTypes } from '../action-types/actionTypes';
import { SearchActions } from '../action-interfaces/searchActionInterfaces';
import { Payload } from '../interfaces/interfaces';

export const fetchDefinitions = (level: string) => {

  return async (dispatch: Dispatch<SearchActions>) => {
    dispatch({ type: ActionTypes.SERCH_DEFINITIONS });
    try {
      const result = await axios.get(`/api/v1/words/${level}`);

      const filteredResult = result.data.data.filter((element: Payload) => {
        return element.text && element.partOfSpeech;
      });

      const payload = filteredResult.map((dataSet: Payload) => {
        return {
          partOfSpeech: dataSet.partOfSpeech,
          text: dataSet.text,
        };
      });

      dispatch({
        type: ActionTypes.SERCH_DEFINITIONS_SUCCESS,
        payload: payload,
      });

      dispatch({
        type: ActionTypes.SET_WORD_SUCCESS,
        payload: filteredResult[0].word,
      });
    } catch (err: any) {
      dispatch({
        type: ActionTypes.SERCH_DEFINITIONS_ERROR,
        payload: err.message,
      });
    }
  };
};
