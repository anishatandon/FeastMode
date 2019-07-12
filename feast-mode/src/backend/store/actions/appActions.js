import * as actions from './actionTypes.js'


export const sendInvite = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
    
    const firebase = getFirebase()
    const firestore = getFirestore()
    const inviteId = data;
    const userId = getState().firebase.auth.uid;

    dispatch({ type: actions.SEND_INVITE_START })
    try {
        const newRequest = {
            friendId: userId,
            friendFirst: getState().firebase.profile.firstName,
            friendLast: getState().firebase.profile.lastName, 
            friendEmail: getState().firebase.auth.email, 
            friendPhone: getState().firebase.profile.phone, 
        }

        const res = await firestore
            .collection('friends')
            .doc(inviteId)
            .get();
            
        if (!res.data() || !res.data().requests) {
            firestore
            .collection('friends')
            .doc(inviteId)
            .set({
                requests: [newRequest],
            });
        } 

        
        else { 
            if(res.data().requests.indexOf(userId) === -1 && userId !== inviteId ){
                firestore
                .collection('friends')
                .doc(inviteId)
                .update({
                    requests: [...res.data().requests, newRequest],
                });
            }
        }

        dispatch({ type: actions.SEND_INVITE_SUCCESS }) 

    } catch(err) {
        dispatch({ type: actions.SEND_INVITE_FAIL, payload: err.message })
    }
}


export const acceptInvite = data => async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase()
    const firestore = getFirestore()
    const inviteId = data.friendId;
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

        const newUser = {
            friendId: userId,
            friendFirst: getState().firebase.profile.firstName,
            friendLast: getState().firebase.profile.lastName, 
            friendEmail: getState().firebase.auth.email, 
            friendPhone: getState().firebase.profile.phone, 
        }

        const newInvite = {
            friendId: inviteId, 
            friendFirst: data.friendFirst,
            friendLast: data.friendLast,
            friendEmail: data.friendEmail,
            friendPhone: data.friendPhone,
        }
            
        const userPrevious = resUser.data().requests.filter(request => request.friendId !== inviteId);
        
        if (!resUser.data() || !resUser.data().friends) {
            firestore
            .collection('friends')
            .doc(userId)
            .set({
                friends: [newInvite],
                requests: userPrevious,
            });
        } 

        else { 
            if(resUser.data().friends.indexOf(inviteId) === -1 ){
                firestore
                .collection('friends')
                .doc(userId)
                .update({
                    friends: [...resUser.data().friends, newInvite],
                    requests: userPrevious,
                });
            }
        }

        if (!resInvite.data() || !resInvite.data().friends) {
            firestore
            .collection('friends')
            .doc(inviteId)
            .set({
                friends: [newUser],
                requests: [...resInvite.data().requests],
            });
        } 
        
        else { 
            if(resInvite.data().friends.indexOf(userId) === -1 ){
                firestore
                .collection('friends')
                .doc(inviteId)
                .update({
                    friends: [...resInvite.data().friends, newUser],
                    requests: [...resInvite.data().requests],
                });
            }
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

        const userPrevious = resUser.data().requests.filter(request => request.friendId !== inviteId);
        // console.log(userPrevious)
        firestore
            .collection('friends')
            .doc(userId)
            .update({
                requests: userPrevious,
            });
        // console.log("past")
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

        console.log(resUser)

        // console.log(userPrevious)
        // console.log(invitePrevious)
        // console.log(!resUser.data() )
        if (resUser.data() ) {
            const userPrevious = resUser.data().friends.filter(friend => friend.friendId !== inviteId);
            firestore
            .collection('friends')
            .doc(userId)
            .update({
                friends: userPrevious,
            });
        } 
        
        if (resInvite.data() ) {
            const invitePrevious = resInvite.data().friends.filter(friend => friend.friendId !== userId);
            firestore
            .collection('friends')
            .doc(inviteId)
            .update({
                friends: invitePrevious,
            });
        } 

        dispatch({ type: actions.DELETE_FRIEND_SUCCESS }) 

    } catch(err) {
        dispatch({ type: actions.DELETE_FRIEND_FAIL, payload: err.message })
    }
}