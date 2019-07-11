import * as actions from './actionTypes.js'


export const sendInvite = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
    
    const firebase = getFirebase()
    const firestore = getFirestore()
    const inviteId = data;
    const userId = getState().firebase.auth.uid;

    dispatch({ type: actions.SEND_INVITE_START })
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
                requests: [userId],
            });
            
        } else { 
            console.log(userId !== inviteId);
            if(res.data().requests.indexOf(userId) === -1 && userId !== inviteId ){
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
            
        const userPrevious = resUser.data().requests.filter(request => request !== inviteId);
        if (!resUser.data() || !resUser.data().friends) {
            console.log('resuser in here')
            firestore
            .collection('friends')
            .doc(userId)
            .set({
                friends: [inviteId],
                requests: userPrevious,
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
                    requests: userPrevious,
                });
            }
        }


        if (!resInvite.data() || !resInvite.data().friends) {
            console.log("resinvite in here")
            firestore
            .collection('friends')
            .doc(inviteId)
            .set({
                friends: [userId],
                requests: [...resInvite.data().requests],
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
                    requests: [...resInvite.data().requests],
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
        const resUser = await firestore
            .collection('friends')
            .doc(userId)
            .get();
        const userPrevious = resUser.data().requests.filter(request => request !== inviteId);
        firestore
            .collection('friends')
            .doc(userId)
            .update({
                requests: [userPrevious],
                friends: [...resUser.data().friends]
            });
            
        dispatch({ type: actions.DELETE_INVITE_SUCCESS }) 

    } catch(err) {
        dispatch({ type: actions.DELETE_INVITE_FAIL, payload: err.message })
    }
}


export const deleteFriend = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    const inviteId = data;
    const userId = getState().firebase.auth.uid;

    dispatch({ type: actions.DELETE_FRIEND_START })
    try {

        const resUser = await firestore
            .collection('friends')
            .doc(userId)
            .get();
        const resInvite = await firestore
            .collection('friends')
            .doc(inviteId)
            .get();
            

        const userPrevious = resUser.data().requests.filter(request => request !== inviteId);
        const invitePrevious = resInvite.data().requests.filter(request => request !== userId);

        if (!resUser.data() ) {
            firestore
            .collection('friends')
            .doc(userId)
            .set({
                friends: userPrevious,
                requests: [...resUser.data().requests],
            });
        } 
        
        if (!resInvite.data() ) {
            firestore
            .collection('friends')
            .doc(inviteId)
            .set({
                friends: invitePrevious,
                requests: [...resInvite.data().requests],
            });
            
        } 

        dispatch({ type: actions.DELETE_FRIEND_SUCCESS }) 

    } catch(err) {
        dispatch({ type: actions.DELETE_FRIEND_FAIL, payload: err.message })
    }
}