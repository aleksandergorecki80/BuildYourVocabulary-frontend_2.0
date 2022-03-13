import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { definitionsActions } from '../state';
import { appActions } from '../state';

export const useDefinitionsActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(definitionsActions, dispatch);
}

export const useAppActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(appActions, dispatch);
}

