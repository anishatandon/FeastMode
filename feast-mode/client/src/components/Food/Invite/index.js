import React, { useState } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';

import Modal from '../../Modal/Modal'
import Friend from '../../Friends/Friend.js'
import Button from '../../../style/FormUI/Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'


const InviteFriends = ({ userId, allFriends }) => {
    const [isOpened, setisOpened] = useState(false);
    if (!allFriends) return null
    
    let content = null
    let friendKeys = allFriends[userId].friends

    if (friendKeys && friendKeys.length !== 0) {
        content = (
            <div>
              {
                friendKeys.map(user => 
                <div key = {user.friendId}>
                <div className="friend">
                
                    <Friend 
                      display={true} 
                      friendId={user.friendId} 
                      friendFirst={user.friendFirst} 
                      friendLast={user.friendLast} 
                      friendEmail={user.friendEmail} 
                      friendPhone={user.friendPhone} 
                    />
                </div>
                <Button contain> INVITE </Button>
                </div>
              )}
            </div>
          )
    }
  
  return (
    <>
    <Button contain onClick={() => setisOpened(true)}>
        <FontAwesomeIcon icon = {faUsers} color = "white"/> &nbsp; | &nbsp; INVITE FRIENDS 
    </Button>
    <Modal opened = {isOpened} close = {() => setisOpened(false)}>
      <Button contain onClick = {() => setisOpened(false)}> Done </Button >
      <div className = "friends-change"> 
        <h1> Choose Your Friends </h1>
        {content}
      </div>
    </Modal>
    </>
  )
}

const mapStateToProps = ({ firebase, firestore }) => ({
  userId: firebase.auth.uid,
  allFriends: firestore.data.friends,
})

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => ["friends/"]),
)(InviteFriends)
