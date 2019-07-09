import * as actions from './actionTypes.js'


export const sendInvite = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    const inviteId = data.uid;
    const userId = getState().firebase.auth.uid;

    dispatch({ type: actions.SEND_INVITE_START })
    try {

        await firestore.collection("friends").doc(inviteId).update({
            requests: firestore.FieldValue.arrayUnion(userId),
        })

        dispatch({ type: actions.SEND_INVITE_SUCCESS }) 

    } catch(err) {
        dispatch({ type: actions.SEND_INVITE_FAIL, payload: err.message })
    }
}


export const acceptInvite = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    const inviteId = data.uid;
    const userId = getState().firebase.auth.uid;

    dispatch({ type: actions.ACCEPT_INVITE_START })
    try {

        await firestore.collection("friends").doc(inviteId).update({
            friends: firestore.FieldValue.arrayUnion(userId),
        })

        await firestore.collection("friends").doc(userId).set({
            friends: firestore.FieldValue.arrayUnion(inviteId),
        })

        dispatch({ type: actions.ACCEPT_INVITE_SUCCESS }) 

    } catch(err) {
        dispatch({ type: actions.ACCEPT_INVITE_FAIL, payload: err.message })
    }
}


export const deleteInvite = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    const inviteId = data.uid;
    const userId = getState().firebase.auth.uid;

    dispatch({ type: actions.DELETE_INVITE_START })
    try {

        await firestore.collection("friends").doc(inviteId).update({
            requests: firestore.FieldValue.arrayRemove(userId),
        })

        dispatch({ type: actions.DELETE_INVITE_SUCCESS }) 

    } catch(err) {
        dispatch({ type: actions.DELETE_INVITE_FAIL, payload: err.message })
    }
}