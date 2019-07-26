import React, { useState } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import ProfileEdit from './ProfileEdit/index.js'
import ProfileNavbar from './ProfileNavbar.js'
import Friends from '../Friends/index.js'

const Heading = styled.div`
    width: 100%;
    height: 8rem;
    background-color: var(--color-main)
`
const Wrapper = styled.div`
    width: 60%;
    transition: display 2s;
    display: ${({ open }) => open ? "flex" : "none"};
    flex-direction: column;
    align-items: center;
`

const Profile = ({ profile }) => {
    const [open, setOpen] = useState([true, false, false])
    if (!profile.isLoaded) return null

    const handleClick = index => {
        let state = [false, false, false]
        state[index] = true
        setOpen(state)
    }

    return (
        <>
            <Heading/>
            <ProfileNavbar display = {index => handleClick(index)}/>
            <Wrapper open = {open[1]}> <Friends/> </Wrapper>
            <Wrapper open = {open[2]}> <ProfileEdit/> </Wrapper>
        </>
    )
}

const mapStateToProps = ({ firebase }) => ({
    profile: firebase.profile,
})

export default connect(mapStateToProps)(Profile);