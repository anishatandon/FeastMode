import React from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import { NavLink } from 'react-router-dom'
import * as actions from '../../../../backend/store/actions'
import { connect } from 'react-redux';
import { compose } from 'redux';
import styled from 'styled-components'

const UnderLink = styled(NavLink)`
    text-transform: uppercase;
    border-bottom: 2px solid transparent;
    color: var(--color-title);
    font-weight: 700;
    transition: all 0.2s;

    :hover {
    border-bottom: 2px solid var(--color-main);
    }
`
const DeleteLink = styled(UnderLink)`
    text-transform: capitalize;
`

const DeleteProfile = ({deleteProfile, users}) => {
    const onClick = () => {
        const keys = Object.keys(users)
        deleteProfile(keys);
    }

    return (
        <div>
            <span> No longer want FeastMode? </span>
            <button  onClick = {onClick}> Delete Profile </button>
        </div>
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