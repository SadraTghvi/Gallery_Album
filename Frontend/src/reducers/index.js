import { combineReducers } from "redux";

import getinfo from "./getUser";

import getPics from "./getPics";

const rootReducer = combineReducers({
    getinfo: getinfo,
    getPics: getPics
})

export default rootReducer;