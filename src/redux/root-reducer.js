import useReducer from "./user/user.reducer"
import { combineReducers } from "redux";

export default combineReducers({
    user:useReducer
})