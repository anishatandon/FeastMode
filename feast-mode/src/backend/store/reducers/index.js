import { combineReducers } from 'redux'
import authReducer from './authReducer.js'
import { firebaseReducer } from 'react-redux-firebase'

export default combineReducers({
    auth: authReducer, // What will appear in our store
    firebase: firebaseReducer,
})