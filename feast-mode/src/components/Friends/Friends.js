import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';


import Friend from './Friend';
import AcceptFriendButton from './Buttons/AcceptFriendButton'
import DeleteFriendButton from './Buttons/DeleteFriendButton'
import DeleteInviteButton from './Buttons/DeleteInviteButton'
import Loader from '../Loader/index.js';

const Friends = ({users, friends, userId, hasRequested }) => {

  let content ;
  
  if(!friends || !friends[userId]) 
  {
    content = (
      <Loader />
    );
  }

  else {
    if(!friends[userId].requests || friends[userId].requests.length === 0 )
    {
        content = (
            <p>No friends requests</p>
        )
    }

    else{
        content = (
            <>
                <h1>Friend Requests</h1>
                {friends[userId].requests.map(user =>
                <div className="friend">
                    <Friend display={true} key={user} friend={user} />
                    <AcceptFriendButton key={"a"+user} friend={user}/>
                    <DeleteInviteButton key={"d"+user} friend={user}/>
                </div>
                )}
            </>
        )
    } 

    if(!friends[userId].friends || friends[userId].friends.length === 0)
    {
        content = (
            <>
                {content}
                <p>You have no friends.</p>
            </>
        )
    }

    else
    {
        content = (
            <>
                {content}
                <h1>Your Friends</h1>
                {friends[userId].friends.map(user =>
                <div className="friend">
                    <Friend display={true} key={user} friend={user} />
                    <DeleteFriendButton key={"de"+user} friend={user}/>
                </div>
                )}
            </>
        )
        
        
    }


  }
  
  
  
 

  return (
    <div className = "friends-change">
      <h1></h1>
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
