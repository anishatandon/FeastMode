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
                <li> <NavLink to={ROUTES.PASSWORD_CHANGE}> Password Change </NavLink> </li>
                <li> <NavLink to={ROUTES.PROFILE_CHANGE}> Profile Change </NavLink> </li>
                <li> <NavLink to={ROUTES.SIGN_OUT}> Sign Out </NavLink> </li>
                <li> <NavLink to={ROUTES.ABOUT}> About </NavLink> </li>
                <li> <SearchBar /> </li>
            </ul>
        )
        sideDrawerButton = (
            <DrawerToggleButton click = {props.drawerClickHandler}/>
        )
    } else {
        items = (
            <ul>
                <li> <NavLink to={ROUTES.SIGN_OUT}> Sign Out </NavLink> </li>
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
