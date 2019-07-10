import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';

import Friend from './Friend';
import AddFriendButton from './Buttons/AddFriendButton';
import Loader from '../Loader/index.js';
import './AddFriends.css';


const AddFriends = ({users, userId, allFriends, hasRequested }) => {
  console.log("wh")
  let content;
  
  if(!users)
  {
    console.log("if")
    content = (
      <Loader />
    );
  }

  
  else if( users.length === 0 )
  {
    console.log("elif")
    content = (
      <p>There are no users!</p>
    )
  }
  else
  {
    console.log("else")
    
    users = Object.keys(users).filter(user => user !== userId)
  
    let friends = [];
    // console.log(friends)
    
    if(allFriends.friends)
    {
      friends += allFriends.friends
    }
      
    if(allFriends.requests) 
    {
      friends += allFriends.requests
    }
      

    console.log(!friends.includes(userId))

    users = users.filter(user => !friends.includes(user) && user !== userId )
    content = (
      <div>
        {
          users.map(user => 
          <div className="friend" key={user}>
            <Friend display={true} friend={user} />
            <AddFriendButton friend={user}/>
          </div>
        )}
        
      </div>
      
    )
    console.log("over here")
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
  allFriends: firestore.data.users,
  hasRequested: firestore.status.requested,
})

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => ["users/"]),
  firestoreConnect(props => ["friends/"]),
)(AddFriends)
