import React from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import * as actions from '../../../../backend/store/actions'
import { connect } from 'react-redux';
import { compose } from 'redux';

const DeleteProfile = ({deleteProfile, users}) => {
    const onClick = () => {
        const keys = Object.keys(users)
        deleteProfile(keys);
    }

    return (
        <UnderLink>
            <span> No longer want FeastMode? </span>
            <button  onClick = {onClick}> Delete Profile </button>
        </UnderLink>
    )
}

const mapStateToProps = ({ auth, firestore }) => ({
    loading: auth.loading,
    error: auth.error,
    users: firestore.data.users,
})

const mapDispatchToProps = {
    deleteProfile: actions.deleteProfile,
    cleanUp: actions.clean,
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect(props => ["users/"]),
  )(DeleteProfile)