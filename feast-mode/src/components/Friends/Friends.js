import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';


import Friend from './Friend';
import Loader from '../Loader/index.js';

const Friends = ({users, friends, userId, hasRequested }) => {

  let content;
  if(!friends)
  {
    content = (
      <Loader />
    );
  }
  else if( friends[userId].friends.length === 0 )
  {
      content = (
        <p>There are no users!</p>
      )
  }
  else
  {
    content = friends[userId].friends.map(user => <Friend display={true} key={user} friend={user} />)
    // content += friends[userId].requested.map(friend => <Friend display={false} key={friend.id} friend={friend} />)
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
