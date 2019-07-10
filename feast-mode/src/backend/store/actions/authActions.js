import * as actions from './actionTypes.js'
import { useReducer } from 'react';

// SignUp action
export const signUp = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    dispatch({ type: actions.AUTH_START })
    try {
        const res = await firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.passwordOne)

        // Send verification email
        const user = firebase.auth().currentUser;
        await user.sendEmailVerification();

        await firestore.collection('users').doc(res.user.uid).set({ 
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            email: data.email,
            phone: data.phone,
            creditCard: data.creditCard,
            creditCardType: data.creditCardType,
            expDate: data.expDate,
            secCode: data.secCode,
            apps: data.apps,
            friends: [],
            requests: [],
        });

        dispatch({ type: actions.AUTH_SUCCESS });

    } catch(err) {
        dispatch({ type: actions.AUTH_FAIL, payload: err.message })
    }
}

// LogOut action
export const logOut = () => async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    try {
        await firebase.auth().signOut()

    } catch (err) {
        console.log(err.message)
    }
}

// SignIn action
export const logIn = data => async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    dispatch({ type: actions.AUTH_START })
    try {
        await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        dispatch({ type: actions.AUTH_SUCCESS })

    } catch(err) {
        dispatch({ type: actions.AUTH_FAIL, payload: err.message })
    }
}

// Clean up error messages action
export const clean = () => ({
    type: actions.CLEAN_UP,
})

// Send recover password action
export const recoverPassword = data => async (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    dispatch({type: actions.RECOVERY_START});
    try{
        await firebase.auth().sendPasswordResetEmail(data.email);
        dispatch({type: actions.RECOVERY_SUCCESS});

    } catch(err) {
        dispatch({type: actions.RECOVERY_FAIL, payload: err.message});
    }
}

// Verify email action
export const verifyEmail = () => async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    dispatch({ type: actions.VERIFY_START })
    try {
        const user = firebase.auth().currentUser
        await user.sendEmailVerification()
        dispatch({ type: actions.VERIFY_SUCCESS }) 

    } catch(err) {
        dispatch({ type: actions.VERIFY_FAIL, payload: err.message })
    }
}

// Edit profile action
export const editProfile = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    dispatch({ type: actions.PROFILE_EDIT_START })
    try {
        const user = firebase.auth().currentUser
        const {uid: userId, email: userEmail} = getState().firebase.auth
        if (data.email !== userEmail) {
            await user.updateEmail(data.email) 
        }

        await firestore.collection("users").doc(userId).set({
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            phone: data.phone,
            creditCard: data.creditCard,
            expDate: data.expiry,
            secCode: data.cvc,
            creditCardType: data.creditCardType,
            apps: data.apps, 
            picture: data.picture, 
        })

        if (data.passwordOne.length > 0) {
            await user.updatePassword(data.passwordOne)
        }
        dispatch({ type: actions.PROFILE_EDIT_SUCCESS }) 

    } catch(err) {
        dispatch({ type: actions.PROFILE_EDIT_FAIL, payload: err.message })
    }
}
