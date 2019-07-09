import * as actions from './actionTypes.js'


export const sendInvite = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    const inviteId = data;
    const userId = getState().firebase.auth.uid;

    dispatch({ type: actions.SEND_INVITE_START })
    try {
        console.log(inviteId)
        console.log(userId)
        await firestore.collection("friends").doc(inviteId).set({
            requests: firestore.FieldValue.arrayUnion(userId),
        })
        // try {
        //     const res = await firestore
        //       .collection('friends')
        //       .doc(inviteId)
        //       .get();
        //     if (!res.data()) {
        //       firestore
        //         .collection('friends')
        //         .doc(inviteId)
        //         .set({
        //           requested: [userId]
        //         });
               
        //     } else { 
        //       firestore
        //         .collection('friends')
        //         .doc(inviteId)
        //         .update({
        //           requested: [...res.data().requested, userId],
        //         });
        //     }

        dispatch({ type: actions.SEND_INVITE_SUCCESS }) 

    } catch(err) {
        dispatch({ type: actions.SEND_INVITE_FAIL, payload: err.message })
    }
}


export const acceptInvite = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    const inviteId = data;
    const userId = getState().firebase.auth.uid;

    dispatch({ type: actions.ACCEPT_INVITE_START })
    try {

        await firestore.collection("friends").doc(inviteId).set({
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
    const inviteId = data;
    const userId = getState().firebase.auth.uid;

    dispatch({ type: actions.DELETE_INVITE_START })
    try {

        await firestore.collection("friends").doc(inviteId).set({
            requests: firestore.FieldValue.arrayRemove(userId),
        })

        dispatch({ type: actions.DELETE_INVITE_SUCCESS }) 

    } catch(err) {
        dispatch({ type: actions.DELETE_INVITE_FAIL, payload: err.message })
    }
}