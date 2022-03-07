import axios from "axios";
import { Dispatch } from "react";
import { ActionTypes } from "../action-types/actionTypes";
import { SearchActions } from "../action-interfaces/actionInterfaces";

const tempResult = ['this', 'is','a', 'temp', 'arr'];

export const fetchDefinitions = () => {
    return async (dispatch: Dispatch<SearchActions>) => {
        dispatch(
            { type: ActionTypes.SERCH_DEFINITIONS}
        );
        try {
            const result = await axios.get('/api/v1/words');

            // ---  FORMAT PAYLOAD !!!   ---
            dispatch({
                type: ActionTypes.SERCH_DEFINITIONS_SUCCESS,
                payload: tempResult
            })

            console.log(result)
        } catch (err: any ) {
            dispatch({
                type: ActionTypes.SERCH_DEFINITIONS_ERROR,
                payload: err.message
            })
        }
    };
}
