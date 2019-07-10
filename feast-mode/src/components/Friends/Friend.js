import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';


import Loader from '../Loader/index.js';


const Friend = ({ friend, allUsers }) => {
  // const user = allUsers[friend];
  return(
    <div className="friend">
      <p></p>
      <p>Image: </p>
      <p>Id: {friend}</p>
      {/* <p>Name: {user.firstName + " " + user.lastName}</p>
      <p> E-mail: {user.email}</p> */}

    </div>
  )
}

const mapStateToProps = ({ firebase, firestore, app }) => ({
  firebase,
  allUsers: firestore.data.users,
  requested: firestore.status.requested,
})

const mapDispatchToProps = {}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => ["users/"]),
)(Friend)










