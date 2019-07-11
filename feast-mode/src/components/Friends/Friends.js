import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';


import Friend from './Friend';
import AcceptFriendButton from './Buttons/AcceptFriendButton';
import DeleteFriendButton from './Buttons/DeleteFriendButton';
import DeleteInviteButton from './Buttons/DeleteInviteButton';
import AddFriends from './AddFriends';
import Loader from '../Loader/index.js';

const Friends = ({users, friends, userId, hasRequested }) => {

  let content ;
  
  if(!friends || !friends[userId]) 
  {
    content = ( <Loader /> );
  }

  else {
    if(!friends[userId].requests || friends[userId].requests.length === 0 ) {
        content = (<p>No friends requests</p>)
    }

    else {
        content = (
            <>
                <h1>Friend Requests</h1>
                {friends[userId].requests.map(user =>
                <div className="friend" key={user}>
                    <Friend display={true} friend={user} />
                    <AcceptFriendButton friend={user}/>
                    <DeleteInviteButton friend={user}/>
                </div>
                )}
            </>
        )
    } 

    if(!friends[userId].friends || friends[userId].friends.length === 0) {
        content = (
            <>
                {content}
                <p>You have no friends.</p>
            </>
        )
    }

    else {
        content = (
            <>
                {content}
                <h1>Your Friends</h1>
                {friends[userId].friends.map(user =>
                <div className="friend" key={user}>
                    <Friend display={true} friend={user} />
                    <DeleteFriendButton friend={user}/>
                </div>
                )}
            </>
        )
    }
  }
  
  
  return (
    <div className = "friends-change">
        <AddFriends />
      {content}
    </div>
  )
}

const mapStateToProps = ({ firebase, firestore, app }) => ({
  firebase,
  userId: firebase.auth.uid,
  friends: firestore.data.friends,
  hasRequested: firestore.status.requested,
})

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => ["friends/"]),
  firestoreConnect(props => ["users/"]),
)(Friends)
