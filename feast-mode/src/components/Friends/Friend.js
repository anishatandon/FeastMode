import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';

import Loader from '../Loader/index.js';


const Friend = ({ friendId, allUsers }) => {
  let user;

  if(!allUsers || !allUsers[friendId])
    return <Loader />;

  user = allUsers[friendId];

  return(
    
    <div className="friend">
      <p></p>
      <p>Image: </p>
      <p>Id: {friendId}</p>
      <p>Name: {user.firstName + " " + user.lastName}</p>
      <p> E-mail: {user.email}</p>

    </div>
  )
}

const mapStateToProps = ({ firebase, firestore, app }) => ({
  // firebaseGood: firebase,
  // userId: firebase.auth.uid,
  allUsers: firestore.data.users,
  requested: firestore.status.requested,
})

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => ["users/"]),
)(Friend)










