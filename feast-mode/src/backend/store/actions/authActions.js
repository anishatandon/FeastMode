import * as actions from './actionTypes.js'

// SignUp action
export const signUp = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    dispatch({ type: actions.AUTH_START })
    try {
        const res = await firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.passwordOne)

        console.log(res.user.uid)

        await firestore.collection('users').doc(res.user.uid).set({ 
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            phone: data.phone,
            creditCard: data.creditCard,
            expDate: data.expDate,
            secCode: data.secCode,
            creditCardType: data.creditCardType,
            apps: data.apps,
        })
        dispatch({ type: actions.AUTH_SUCCESS })
    } catch(err) {
        dispatch({ type: actions.AUTH_FAIL, payload: err.message })
    }
    dispatch({ type: actions.AUTH_END })
}

// SignOut action
export const signOut = () => async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    try {
        await firebase.auth().signOut()
    } catch (err) {
        console.log(err.message)
    }
}

// SignIn action
export const signIn = data => async (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase()
    dispatch({ type: actions.AUTH_START })
    try {
        await firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        dispatch({ type: actions.AUTH_SUCCESS })
    } catch(err) {
        console.log(err.message)
        dispatch({ type: actions.AUTH_FAIL, payload: err.message })
    }
    dispatch({ type: actions.AUTH_END })
}

// Clean up messages
export const clean = () => ({
    type: actions.CLEAN_UP,
})