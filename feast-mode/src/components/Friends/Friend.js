import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';


const Friend = ({ friendId, friendFirst, friendLast, friendEmail, friendPhone }) => {

  return(
    <div className="friend">
      <p></p>
      <p>Image: </p>
      <p>Id: {friendId}</p>
      <p>Name: {friendFirst + " " + friendLast}</p>
      <p>E-mail: {friendEmail}</p>
      <p>Phone: {friendPhone}</p>
    </div>
  )
}


const mapStateToProps = ({ firebase, firestore, app }) => ({
  allUsers: firestore.data.users,
  requested: firestore.status.requested,
})


const mapDispatchToProps = {}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => ["users/"]),
)(Friend)










