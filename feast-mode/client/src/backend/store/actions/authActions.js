import * as actions from './actionTypes.js'
import { storage } from 'firebase'

// SignUp action
export const signUp = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    dispatch({ type: actions.AUTH_START })

    try {
        const res = await firebase
            .auth()
            .createUserWithEmailAndPassword(data.email, data.passwordOne)

        await firestore.collection('friends').doc(res.user.uid).set({
            friends: [],
            requests: [],
        })

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
            image: ["https://firebasestorage.googleapis.com/v0/b/feast-mode.appspot.com/o/images%2Fuser.png?alt=media&token=0465572a-6147-4017-8589-cd9b17e54f04", "user.png"]
        })

        dispatch({ type: actions.AUTH_SUCCESS })

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
    const firebase = getFirebase()
    dispatch({type: actions.RECOVERY_START})

    try{
        await firebase.auth().sendPasswordResetEmail(data.email)
        dispatch({type: actions.RECOVERY_SUCCESS})

    } catch(err) {
        dispatch({type: actions.RECOVERY_FAIL, payload: err.message})
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

        await firestore.collection("users").doc(userId).update({
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            phone: data.phone,
            creditCard: data.creditCard,
            expDate: data.expDate,
            secCode: data.secCode,
            creditCardType: data.creditCardType,
            apps: data.apps,
        })

        if (data.passwordOne.length > 0) {
            await user.updatePassword(data.passwordOne)
        }
        dispatch({ type: actions.PROFILE_EDIT_SUCCESS }) 

    } catch(err) {
        dispatch({ type: actions.PROFILE_EDIT_FAIL, payload: err.message })
    }
}


export const deleteProfile = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    dispatch({ type: actions.DELETE_PROFILE_START })

    try {
        const {uid: userId, email: userEmail} = getState().firebase.auth
        const user = firebase.auth().currentUser

        const allFriends = await firestore.collection('friends')

        data.map(id => async () => {
            allFriends.doc(id).set({
                friends: firestore.collection('friends').doc(id).get().data().requests.filter(user => user.friendId === userId),
                requests: firestore.collection('friends').doc(id).get().data().friends.filter(user => user.friendId === userId),
            })
            // const res = await firestore.collection('friends').doc(id).get();

            // let v = 1231231
            // console.log(res)
            // console.log(v)
        //     if(res)
        //     {
        //         console.log(res)
            //     const requests = res.data().requests
            //     const friends = res.data().friends

            //     if( requests && requests.length !== 0 )
            //     {
            //         requests = requests.filter(user => user.friendId == userId)
            //     }

            //     if( friends && friends.length !== 0)
            //     {
            //         friends = friends.filter(user => user.friendId == userId)
            //     }

            //     await firestore.collection('friends').doc(id).set({
            //         friends: friends,
            //         requests: requests,
            //     })
        //     }
        })

        // firestore.collection('friends').doc(userId).delete();
        // await firestore.collection('users').doc(userId).delete();
        // user.delete();
        
        dispatch({ type: actions.DELETE_PROFILE_SUCCESS }) 

    } catch(err) {
        dispatch({ type: actions.DELETE_PROFILE_FAIL, payload: err.message })
    }
}


// Update profile picture action
export const updateImageUrl = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore()
    dispatch({ type: actions.PFP_EDIT_START })

    try {
        const {uid: userId} = getState().firebase.auth
        const image = data.oldAvatar

        if (image !== "user.png") {
            storage().ref("images/").child(image).delete()
        }

        await firestore.collection("users").doc(userId).update({
            image: [data.avatarURL, data.avatar]
        })
        dispatch({ type: actions.PFP_EDIT_SUCCESS }) 

    } catch(err) {
        dispatch({ type: actions.PFP_EDIT_FAIL, payload: err.message })
    }
}