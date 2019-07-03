import { combineReducers } from 'redux'
import authReducer from './authReducer.js'
import uiReducer from './uiReducer.js'
import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
    auth: authReducer,
    ui: uiReducer,
    firebase: firebaseReducer,
})