import { combineReducers } from "redux";
import authReducer from "./auth";
import {currentUserReducer} from './currentUser'
import {questionsReducer} from './questions'
import usersReducer from "./users";
// import questionReducer from './'

export default combineReducers({
    authReducer,currentUserReducer, questionsReducer, usersReducer
})

