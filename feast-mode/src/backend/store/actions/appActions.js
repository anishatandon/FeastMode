import * as actions from './actionTypes.js'


export const sendInvite = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
    
    const firebase = getFirebase()
    const firestore = getFirestore()
    const inviteId = data;
    const userId = getState().firebase.auth.uid;

    dispatch({ type: actions.SEND_INVITE_START })
    // try {
        // console.log(inviteId)
        // console.log(userId)
        // await firestore.collection("friends").doc(inviteId).set({
        //     requests: firestore.FieldValue.arrayUnion(userId),
        // })
    try {
        const res = await firestore
            .collection('friends')
            .doc(inviteId)
            .get();
        console.log(res);
        if (!res.data() ) {
            console.log('in here')
            firestore
            .collection('friends')
            .doc(inviteId)
            .set({
                requests: [userId]
            });
            
        } else { 
            console.log(userId != inviteId);
            if(res.data().requests.indexOf(userId) === -1 && userId != inviteId ){
                firestore
                .collection('friends')
                .doc(inviteId)
                .update({
                    requests: [...res.data().requests, userId],
                });
            }
            
            console.log("complete")
        }

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
        const resUser = await firestore
            .collection('friends')
            .doc(userId)
            .get();
        const resInvite = await firestore
            .collection('friends')
            .doc(inviteId)
            .get();
            
        if (!resUser.data() ) {
            console.log('resuser in here')
            firestore
            .collection('friends')
            .doc(userId)
            .set({
                friends: [inviteId]
            });
            
        } 
        else { 
            console.log("resuser")
            if(resUser.data().friends.indexOf(inviteId) === -1 ){
                firestore
                .collection('friends')
                .doc(userId)
                .update({
                    friends: [...resUser.data().friends, inviteId],
                });
            }
        }


        if (!resInvite.data() ) {
            console.log("resinvite in here")
            firestore
            .collection('friends')
            .doc(inviteId)
            .set({
                friends: [userId]
            });
            
        } 
        
        else { 
            console.log("resinvite")
            if(resInvite.data().friends.indexOf(userId) === -1 ){
                firestore
                .collection('friends')
                .doc(inviteId)
                .update({
                    friends: [...resInvite.data().friends, userId],
                });
            }
            
            console.log("complete")
        }

        dispatch({ type: actions.SEND_INVITE_SUCCESS }) 

    } catch(err) {
        dispatch({ type: actions.SEND_INVITE_FAIL, payload: err.message })
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