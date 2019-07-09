import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import * as ROUTES from '../../constants/routes.js'

import NavItem from './NavItem.js';

const Nav = styled.nav`
  display: flex;
  margin-top: ${props => (props.mobile ? '-8rem' : null)};
`
const Ul = styled.ul`
  display: flex;
  flex-direction: ${props => (props.mobile ? 'column' : 'row')};
  align-items: center;
  height: 100%;
`

const NavItems = ({ mobile, clicked, emailVerified }) => {
    let links
    
    if (emailVerified) {
        links = (
            <Ul mobile = {mobile}>
                <NavItem mobile = {mobile} clicked = {clicked} link = {ROUTES.HOME}> Home </NavItem>
                <NavItem mobile = {mobile} clicked = {clicked} link = {ROUTES.PASSWORD_RECOVERY}> Reset Password </NavItem>
                <NavItem mobile = {mobile} clicked = {clicked} link = {ROUTES.PROFILE_EDIT}> Edit Profile </NavItem>
                <NavItem mobile = {mobile} clicked = {clicked} link = {ROUTES.LOG_OUT}> Log Out </NavItem>
                <NavItem mobile = {mobile} clicked = {clicked} link = {ROUTES.ABOUT}> About </NavItem>
                <NavItem mobile = {mobile} clicked = {clicked} link = {ROUTES.ADD_FRIENDS}> Add Friends </NavItem>
                <NavItem mobile = {mobile} clicked = {clicked} link = {ROUTES.DISPLAY_FRIENDS}> Edit Friends </NavItem>
                <NavItem mobile = {mobile} clicked = {clicked} link = {ROUTES.PICK_FOOD}> Pick Food </NavItem>
            </Ul>
        )
    } else {
        links = (
            <Ul mobile = {mobile}>
                <NavItem mobile = {mobile} clicked = {clicked} link = {ROUTES.LOG_OUT}> Log Out </NavItem>
                <NavItem mobile = {mobile} clicked = {clicked} link = {ROUTES.ABOUT}> About </NavItem>
            </Ul>
        )
    }
    
    return <Nav mobile = {mobile}>{ links }</Nav>
}

const mapStateToProps = ({ firebase }) => ({
    emailVerified: firebase.auth.emailVerified,
})

export default connect(mapStateToProps, null)(NavItems)