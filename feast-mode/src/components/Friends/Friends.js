import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';


import Friend from './Friend';
import AcceptFriendButton from './AcceptFriendButton'
import Loader from '../Loader/index.js';

const Friends = ({users, friends, userId, hasRequested }) => {

  let content;
  if(!friends ) 
  {
    content = (
      <Loader />
    );
  }

//   if(!friends.requests )
//   {

//   }

//   if(!friends.friends)
//   {

//   }

  else if( friends[userId].requests.length === 0 )
  {
      content = (
        <p>There are no users!</p>
      )
  }
  else
  {
      content = 
      (
        <div>
            <h1>Friend Requests</h1>
            {friends[userId].requests.map(user =>
            <div className="friend">
                <Friend display={true} key={user} friend={user} />
                <AcceptFriendButton key={"b"+user} friend={user}/>
            </div>
            )}
            <h1>Your Friends</h1>
            {/* {friends[userId].friends.map(user =>
            <div className="friend">
                <Friend display={true} key={user} friend={user} />
            </div>
            )} */}
        
        </div>
      )
    
    
  }
 

  return (
    <div className = "friends-change">
      <h1> All Users </h1>
      {content}
    </div>
  )
}

const mapStateToProps = ({ firebase, firestore, app }) => ({
  firebase,
  userId: firebase.auth.uid,
  users: firestore.data.users,
  friends: firestore.data.friends,
  hasRequested: firestore.status.requested,
})

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => ["friends/"]),
  firestoreConnect(props => ["users/"]),
)(Friends)
