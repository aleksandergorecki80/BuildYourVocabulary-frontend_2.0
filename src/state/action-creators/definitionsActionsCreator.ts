import axios from "axios";
import { Dispatch } from "react";
import { ActionTypes } from "../action-types/actionTypes";
import { SearchActions } from "../action-interfaces/actionInterfaces";

export const fetchDefinitions = () => {
    return async (dispatch: Dispatch<SearchActions>) => {
        dispatch(
            { type: ActionTypes.SERCH_DEFINITIONS}
        );
        try {
            const result = await axios.get('/api/v1/words');

            const payload = result.data.data.map((dataSet: any) => {
                return {
                    partOfSpeech: dataSet.partOfSpeech,
                    word: dataSet.word,
                    definition: dataSet.text
                }
            })

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
