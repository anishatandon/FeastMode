import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import * as actions from '../../../../backend/store/actions'
import { connect } from 'react-redux';
import styled from 'styled-components'
// import * as ROUTES from '../../../../constants/routes'

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

const DeleteProfile = ({deleteProfile}) => {
    const onClick = () => {
        deleteProfile();
    }

    return (
        <div>
            {/* <span> No longer want FeastMode? </span>
            <DeleteLink onClick={onClick}> Delete Profile </DeleteLink> */}
        </div>
    )
}




const mapStateToProps = ({ auth }) => ({
    loading: auth.loading,
    error: auth.error,
})

const mapDispatchToProps = {
    deleteProfile: actions.deleteProfile,
    cleanUp: actions.clean,
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProfile)