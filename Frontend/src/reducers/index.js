import { combineReducers } from "redux";
import ifPrint from "./account";
import loggedIn from "./isLogged";

const rootReducer = combineReducers({
    ifPrint:ifPrint,
    isLogged: loggedIn
})

export default rootReducer;