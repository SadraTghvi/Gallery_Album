import { combineReducers } from "redux";

import getinfo from "./getUser";

import getPics from "./getPics";
import info from "./info";

const rootReducer = combineReducers({
    getinfo: getinfo,
    getPics: getPics,
    info:info
})

export default rootReducer;