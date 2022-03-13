import { combineReducers } from "redux";

import definitionsReducer from './definitionsReducer';
import appReducer from "./appReducer";

const rootReducer = combineReducers({
    definitions: definitionsReducer,
    app: appReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;