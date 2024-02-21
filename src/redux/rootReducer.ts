import { combineReducers } from "redux";

import repoReducer from "./repo/repoReducer";

const rootReducer = combineReducers({
    repo: repoReducer
});

export default rootReducer;