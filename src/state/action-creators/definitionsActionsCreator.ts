import axios from "axios";
import { Dispatch } from "react";
import { ActionTypes } from "../action-types/actionTypes";
import { SearchActions } from "../action-interfaces/searchActionInterfaces";


interface Payload {
    partOfSpeech: string;
    word: string;
    text: string;
}

export const fetchDefinitions = () => {
    return async (dispatch: Dispatch<SearchActions>) => {
        dispatch(
            { type: ActionTypes.SERCH_DEFINITIONS}
        );
        try {
            const result = await axios.get('/api/v1/words');

            const filteredResult = result.data.data.filter((element: Payload) => {
                return element.text && element.partOfSpeech;
              });

            const payload = filteredResult.map((dataSet: Payload) => {
                return  {
                    partOfSpeech: dataSet.partOfSpeech,
                    word: dataSet.word,
                    text: dataSet.text
                }
            });

            dispatch({
                type: ActionTypes.SERCH_DEFINITIONS_SUCCESS,
                payload: payload
            })

        } catch (err: any ) {
            dispatch({
                type: ActionTypes.SERCH_DEFINITIONS_ERROR,
                payload: err.message
            })
        }
    };
}
