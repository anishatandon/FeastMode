import React from 'react'
import * as ROUTES from '../../constants/routes'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

import SearchBar from './SearchBar.js'
import DrawerToggleButton from './DrawerToggleButton.js'

const Navbar = props => {
    let items
    let sideDrawerButton

    if (props.emailVerified) {
        items = (
            <ul>
                <li> <NavLink to={ROUTES.HOME}> Home </NavLink> </li>
                <li> <NavLink to={ROUTES.PASSWORD_RECOVERY}> Reset Password </NavLink> </li>
                <li> <NavLink to={ROUTES.PROFILE_EDIT}> Edit Profile </NavLink> </li>
                <li> <NavLink to={ROUTES.LOG_OUT}> Log Out </NavLink> </li>
                <li> <NavLink to={ROUTES.ABOUT}> About </NavLink> </li>
                <li> <NavLink to={ROUTES.ADD_FRIENDS}> Add Friends </NavLink> </li>
                <li> <NavLink to={ROUTES.EDIT_FRIENDS}> Edit Friends </NavLink> </li>
                <li> <NavLink to={ROUTES.PICK_FOOD}> Pick Food </NavLink> </li>
                <li> <SearchBar /> </li>
            </ul>
        )
        sideDrawerButton = (
            <DrawerToggleButton click = {props.drawerClickHandler}/>
        )
    } else {
        items = (
            <ul>
                <li> <NavLink to={ROUTES.LOG_OUT}> Log Out </NavLink> </li>
                <li> <NavLink to={ROUTES.ABOUT}> About </NavLink> </li>
            </ul>
        )
    }

    return(
        <header className = "navbar">
            <nav className = "navbar-navigation">
                <div className = "navbar-toggle-button">
                    {sideDrawerButton}
                </div>
                <div className = "spacer"></div>
                <div className = "navbar-navigation-items">
                    {items}
                </div>
            </nav>
        </header>
    )
}

const mapStateToProps = ({ firebase }) => ({
    emailVerified: firebase.auth.emailVerified,
})



export default connect(mapStateToProps, null)(Navbar)
