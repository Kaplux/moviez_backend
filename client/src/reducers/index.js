import { combineReducers } from 'redux'
import login from './login'
import session from './session'

export default combineReducers({
    login, session
})