import { combineReducers } from "redux";

import definitionsReducer from './definitionsReducer';

const rootReducer = combineReducers({
    definitions: definitionsReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;