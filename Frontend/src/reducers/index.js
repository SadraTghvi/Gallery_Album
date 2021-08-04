import { combineReducers } from "redux";
import getinfo from "./getUser";

const rootReducer = combineReducers({
    getinfo: getinfo
})

export default rootReducer;