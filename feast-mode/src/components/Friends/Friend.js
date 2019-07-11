import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';

import Loader from '../Loader/index.js';


<<<<<<< HEAD
const Friend = ({ firebase, friend, allUsers }) => {
  // const user = allUsers[friend];
=======
const Friend = ({ friend, allUsers }) => {
  let user;

  if(!allUsers || !allUsers[friend])
    return <Loader />;

  user = allUsers[friend];

>>>>>>> 7a55a04a52a96128078f30fd2b096ebf05844c6f
  return(
    
    <div className="friend">
      <p></p>
      <p>Image: </p>
      <p>Id: {friend}</p>
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










