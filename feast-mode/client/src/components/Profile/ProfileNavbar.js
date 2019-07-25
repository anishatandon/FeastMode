import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const FixedWrapper = styled.header`
    position: sticky;
    z-index: 10;
    top: 8rem;
    width: 100%;
    height: 14rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid var(--color-border);
    margin-bottom: 3rem;
`
const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 80%;
`
const Li = styled.li`
    display: flex;
    height: 100%;
    align-items: flex-end;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 0.7px;
    color: var(--color-title);
    padding: 0rem 5rem;
`
const StyledImage = styled.img`
    position: relative;
    border-radius: 50%; 
    align-items: center;
    display: block;
    top: -5rem;
    width: 18rem;
    height: 18rem;
    object-fit: cover;
`

const ProfileNavbar = ({ profile }) => {
    return (
        <FixedWrapper>
            <Ul>
                
                <Li> Orders </Li>
                <Li> Friends </Li>
                
            </Ul>
            <StyledImage src = {profile.image[0]} alt = "Profile" />
        </FixedWrapper>
    )
}

const mapStateToProps = ({ firebase }) => ({
    profile: firebase.profile,
})

export default connect(mapStateToProps)(ProfileNavbar);