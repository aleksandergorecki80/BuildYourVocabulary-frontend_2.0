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
        return (
          element.text &&
          element.partOfSpeech &&
          element.attributionText &&
          element.attributionUrl
        );
      });

      const keyword = filteredResult[0].word;

      const removedKeywordArr = filteredResult.filter((sentence: Payload) => {
        return sentence.text.indexOf(`${keyword}`) === -1;
      });

      if (removedKeywordArr.length === 0) {
        return dispatch({
          type: ActionTypes.SERCH_DEFINITIONS_ERROR,
          payload: 'Something went wrong, try again',
        });
      }

      const payload = removedKeywordArr.map((dataSet: Payload) => {
        return {
          partOfSpeech: dataSet.partOfSpeech,
          text: dataSet.text,
          attributionText: dataSet.attributionText,
          attributionUrl: dataSet.attributionUrl,
        };
      });

      dispatch({
        type: ActionTypes.SERCH_DEFINITIONS_SUCCESS,
        payload: payload,
      });

      dispatch({
        type: ActionTypes.SET_WORD_SUCCESS,
        payload: keyword,
      });
    } catch (err: any) {
      dispatch({
        type: ActionTypes.SERCH_DEFINITIONS_ERROR,
        payload: 'Something went wrong, try again',
      });
    }
  };
};
