import React from 'react'
import { NavLink } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Button from '../../style/FormUI/Buttons.js'
import ProfileNavbar from './ProfileNavbar.js'

const Heading = styled.div`
    width: 100%;
    height: 10rem;
    background-color: var(--color-main)
`
const Wrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
const InnerWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Profile = ({ profile }) => {
    if (!profile.isLoaded) return null

    return (
        <>
            <Heading/>
            <Wrapper>
                <ProfileNavbar/>
                <InnerWrapper>
                    <div> Code goes here </div>
                    <NavLink to = {ROUTES.PROFILE_EDIT}><Button contain> Edit Profile </Button></NavLink>
                </InnerWrapper>
            </Wrapper>
        </>
    )
}

const mapStateToProps = ({ firebase }) => ({
    profile: firebase.profile,
})

export default connect(mapStateToProps)(Profile);