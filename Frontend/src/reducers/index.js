import { combineReducers } from "redux";
import ifPrint from "./account";
import loggedIn from "./isLogged";
import getinfo from "./getUser";

const rootReducer = combineReducers({
    ifPrint:ifPrint,
    isLogged: loggedIn,
    getinfo: getinfo
})

export default rootReducer;