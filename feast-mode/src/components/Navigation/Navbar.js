import React from 'react'
import * as ROUTES from '../../constants/routes'
import { NavLink } from 'react-router-dom'

import SearchBar from './SearchBar.js'
import DrawerToggleButton from './DrawerToggleButton.js'

const Navbar = props => (
    <header className = "navbar">
        <nav className = "navbar-navigation">
            <div className = "navbar-toggle-button">
                <DrawerToggleButton click = {props.drawerClickHandler}/>
            </div>
            <div className = "spacer"></div>
            <div className = "navbar-navigation-items">
                <ul>
                    <li> <NavLink to={ROUTES.HOME}> Home </NavLink> </li>
                    <li> <NavLink to={ROUTES.PASSWORD_CHANGE}> Password Change </NavLink> </li>
                    <li> <NavLink to={ROUTES.PROFILE_CHANGE}> Profile Change </NavLink> </li>
                    <li> <NavLink to={ROUTES.ABOUT}> About </NavLink> </li>
                    <li> <NavLink to={ROUTES.SIGN_OUT}> Sign Out </NavLink> </li>
                    <li style = {{ float: "right" }}> <SearchBar /> </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default Navbar
