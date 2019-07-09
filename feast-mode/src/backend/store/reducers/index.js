import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore';

// Reducers we made
import authReducer from './authReducer.js'
import appReducer from './appReducer.js';


export default combineReducers({
    auth: authReducer,
    app: appReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
})