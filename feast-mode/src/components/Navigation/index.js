import React from 'react'
import * as ROUTES from '../../constants/routes'
import { connect } from 'react-redux'
import styled from 'styled-components'

import SideDrawerToggleButton from './SideDrawerToggleButton.js'
import NavItem from './NavItem.js'

const FixedWrapper = styled.header`
    position: fixed;
    background-color: var(--color-main);
    padding: 0rem 2rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 6rem;
`
const Container = styled.div`
    width: 100%;
    max-width: 140rem;
    margin: 0 auto;
    height: 100%;
`
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
    align-items: center;

    @media ${props => props.theme.mediaQueries.small} {
        justify-content: flex-start;
    }
`
const Ul = styled.ul`
    display: flex;
    margin-top: null;
    flex-direction: row;
    align-items: center;
    height: 100%;
    
    @media ${props => props.theme.mediaQueries.small} {
        display: none;
    }
`

const Navbar = ({ emailVerified, sideDrawerClickHandler }) => {
    let items
    let sideDrawerButton

    if (emailVerified) {
        items = (
            <Ul>
                <NavItem link = {ROUTES.HOME}> Home </NavItem>
                <NavItem link = {ROUTES.PASSWORD_RECOVERY}> Reset Password </NavItem>
                <NavItem link = {ROUTES.PROFILE_EDIT}> Edit Profile </NavItem>
                <NavItem link = {ROUTES.LOG_OUT}> Log Out </NavItem>
                <NavItem link = {ROUTES.ABOUT}> About </NavItem>
                <NavItem link = {ROUTES.ADD_FRIENDS}> Add Friends </NavItem>
                <NavItem link = {ROUTES.DISPLAY_FRIENDS}> Friends </NavItem>
                <NavItem link = {ROUTES.PICK_FOOD}> Pick Food </NavItem>
            </Ul>
        )
        sideDrawerButton = (
            <SideDrawerToggleButton click = {sideDrawerClickHandler}/>
        )
    } else {
        items = (
            <Ul>
                <NavItem link = {ROUTES.LOG_OUT}> Log Out </NavItem>
                <NavItem link = {ROUTES.ABOUT}> About </NavItem>
            </Ul>
        )
    }

    return(
        <FixedWrapper>
            <Container>
                <Wrapper>
                    {sideDrawerButton}
                    {items}
                </Wrapper>
            </Container>
        </FixedWrapper>
    )
}

const mapStateToProps = ({ firebase }) => ({
    emailVerified: firebase.auth.emailVerified,
})

export default connect(mapStateToProps, null)(Navbar)