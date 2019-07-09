import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';


import Friend from './Friend';
import Loader from '../Loader/index.js';

const DisplayFriends = ({friends, requests, userId, requested }) => {

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
        <p>You have no todos!</p>
      )
  }
  else
  {
    content = friends[userId].friends.map(friend => <Friend display={true} key={friend.id} friend={friend} />)
    content += friends[userId].requested.map(friend => <Friend display={false} key={friend.id} friend={friend} />)
  }
 

  return (
    <div className = "friends-change">
      <h1> Display Friends </h1>
        {
          friends && friends.map(friend => {
            return (
              <Friend friend={friend} key={friend.id} />
            )
          })
        }

        {
          requests && requests.map(request => {
            return (
              <Friend friend={request} key={request.id} />
            )
          })
        }

    </div>
  )
}

const mapStateToProps = ({ firebase, firestore, app }) => ({
  firebase,
  userId: firebase.auth.uid,
  friends: firestore.data.todos,
  requested: firestore.status.requested,
})

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [`friends/${props.userId}`]),
)(DisplayFriends)
