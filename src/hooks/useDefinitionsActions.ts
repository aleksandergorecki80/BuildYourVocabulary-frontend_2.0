import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { definitionsActions } from '../state';

export const useDefinitionsActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(definitionsActions, dispatch);
}