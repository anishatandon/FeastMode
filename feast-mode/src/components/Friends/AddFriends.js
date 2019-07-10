import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';


import Friend from './Friend';
import AddFriendButton from './Buttons/AddFriendButton';
import Loader from '../Loader/index.js';
import './AddFriends.css';

const AddFriends = ({users, hasRequested }) => {

  let content;
  if(!users)
  {
    content = (
      <Loader />
    );
  }
  else if( users.length === 0 )
  {
      content = (
        <p>There are no users!</p>
      )
  }
  else
  {
    content = (
      <div>
        {Object.keys(users).map(user => 
          <div className="friend">
            <Friend display={true} key={user} friend={user} />
            <AddFriendButton key={"b"+user} friend={user}/>
          </div>
        )}
        
      </div>
      
    )
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
  users: firestore.data.users,
  hasRequested: firestore.status.requested,
})

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => ["users/"]),
)(AddFriends)
