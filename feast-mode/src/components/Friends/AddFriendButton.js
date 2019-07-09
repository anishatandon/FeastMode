import React, { useState } from 'react';
import * as actions from '../../backend/store/actions'
import { connect } from 'react-redux';


const AddFriendButton = ({friend, sendInvite, cleanUp, error, loading}) => {
    const onClick = () => {
        sendInvite(friend);
    }

    return(
        <div className="">
            <button onClick={onClick}>
                +
            </button>
        </div>
        
    );
};


const mapStateToProps = ({ auth }) => ({
    loading: auth.loading,
    error: auth.error,
})

const mapDispatchToProps = {
    sendInvite: actions.sendInvite,
    cleanUp: actions.clean,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendButton)









// import { connect } from 'react-redux'
// import { firestoreConnect } from 'react-redux-firebase'
// import { compose } from 'redux'
// import Friend from './Friend.js';
// import Loader from '../Loader/index.js';

// const AddFriends = ({ allUsers, requesting, requested, userId }) => {
//     let content;
//     if (!allUsers) {
//       content = (
//           <Loader  />
//       );
//     } else if (!allUsers[userId] && requested[`users/${userId}`]) {
//       content = (
//           <h2 color="white" size="h2">
//             You have no friends!
//           </h2>
//       );
//     } else {
//       content = (
//         //   {allUsers[userId].users.map(user => (
//         //     <Friend key={user.id} friend={user} />
//         //   ))}
//         <div></div>
//       );
//     }
  
//     return (
//         <div className="add-friends">
//             <h2>Add Friends</h2>
//             {content}
//         </div>
      
//     );
//   };
  
//   const mapStateToProps = ({ firebase, firestore }) => ({
//     userId: firebase.auth.uid,
//     allUsers: firestore.data.users,
//     requesting: firestore.status.requesting,
//     requested: firestore.status.requested,
//   });
  
//   const mapDispatchToProps = {};
  
//   export default compose(
//     connect(
//       mapStateToProps,
//       mapDispatchToProps
//     ),
//     firestoreConnect(props => [`users/${props.userId}`])
//   )(AddFriends);




