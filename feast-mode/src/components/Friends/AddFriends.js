
import React from 'react'
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';


const AddFriends = ({ friends, requested, userId }) => {
    console.log(userId)


    return (
        <div className = "add-friends">
            <h1> Add Friends </h1>

            {/* {friends[userId].friends
            .map(friend => (
                <div key={friend.id} friend={friend} >
                    hello
                </div>
            ))} */}



        </div>
    )
}



const mapStateToProps = ({ firebase, firestore, app }) => ({
  firebase,
  userId: firebase.auth.uid,
  friends: firestore.data.friends,
  requested: firestore.status.requested,
  
})

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [`friends/${props.userId}`]),
)(AddFriends)

