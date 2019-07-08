import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

// Reducers we made
import authReducer from './authReducer.js'

export default combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
})