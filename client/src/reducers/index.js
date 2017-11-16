import { combineReducers } from 'redux'
import login from './login'
import currentSession from './currentSession'

export default combineReducers({
    login, currentSession
})