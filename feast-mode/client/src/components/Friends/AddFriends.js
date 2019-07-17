import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';

import Friend from './Friend';
import AddFriendButton from './Buttons/AddFriendButton';
import Loader from '../Loader/index.js';
import Modal from '../Modal/Modal'
import Button from '../../style/FormUI/Buttons'
import './AddFriends.css';


import * as ROUTES from '../../constants/routes'
import { NavLink } from 'react-router-dom'


const AddFriends = ({ users, userId, allFriends }) => {
  const [isOpened, setisOpened] = useState(false);
  if(!users || !allFriends) return null
  
  let content;
  
  if( users.length === 0 ) {
    content = (
      <p>There are no users!</p>
    )
  }

  else {
    let userKeys = Object.keys(users).filter(user => user !== userId)
    let friendKeys = allFriends[userId].friends
    if(friendKeys && friendKeys.length !== 0)
    {
      friendKeys = friendKeys.map(user => user.friendId)
      userKeys = userKeys.filter(key => friendKeys.indexOf(key) === -1)
    }
  
    content = (
      <div>
        {
          userKeys.map(user => 
            
          <div className="friend" key={user}>
          
              <Friend 
                display={true} 
                friendId={user} 
                friendFirst={users[user].firstName} 
                friendLast={users[user].lastName} 
                friendEmail={users[user].email} 
                friendPhone={users[user].phone} 
              />
              <AddFriendButton friend = {user}/>
          </div>
        )}
        
      </div>
    )
  }

  return (
    <>
    <Button color="main" contain onClick={() => setisOpened(true)}>
      Add Friends
    </Button>
    <Modal opened = {isOpened} close = {() => setisOpened(false)}>
      <Button color = "main" contain onClick = {() => setisOpened(false)}>
        Done
      </Button >
      <div className = "friends-change"> 
      <h1> All Users </h1>
      {content}
      </div>
    </Modal>
    {/* <NavLink to = {ROUTES.TWILIO}><Button> twilio -> </Button></NavLink> TWILIO LINK HIDE FOR NOW */}
    </>
  )
}


const mapStateToProps = ({ firebase, firestore, app }) => ({
  userId: firebase.auth.uid,
  users: firestore.data.users,
  allFriends: firestore.data.friends,
  hasRequested: firestore.status.requested,
})


const mapDispatchToProps = {}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => ["users/"]),
  firestoreConnect(props => ["friends/"]),
)(AddFriends)
