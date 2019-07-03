import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { connect } from 'react-redux'

const CheatingToolbar = ({ loggedIn }) => {
  let items
  
  if (loggedIn) {
    items = (
      <ul className = "toolbar-navigation">
        <li> <NavLink to={ROUTES.HOME}> Home </NavLink> </li>
        <li> <NavLink to={ROUTES.MENU}> Menu </NavLink> </li>
        <li> <NavLink to={ROUTES.PASSWORD_CHANGE}> Password Change </NavLink> </li>
        <li> <NavLink to={ROUTES.PROFILE_CHANGE}> Profile Change </NavLink> </li>
        <li> <NavLink to={ROUTES.RESTAURANTS}> Restaurants </NavLink> </li>
        <li> <NavLink to={ROUTES.ABOUT}> About </NavLink> </li>
        <li> <NavLink to={ROUTES.SIGN_OUT}> Sign Out </NavLink> </li>
      </ul>
    )
  } else {
    items = (
      <ul className = "toolbar-navigation">
        <li> <NavLink to={ROUTES.ABOUT}> About </NavLink> </li>
        <li> <NavLink to={ROUTES.LANDING}> Landing </NavLink> </li>
        <li> <NavLink to={ROUTES.SIGN_UP}> Sign Up </NavLink> </li>
      </ul>
    )
  }

  return (
    <header className = "toolbar">
      {items}
    </header>
  )
}

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
})

export default connect(mapStateToProps)(CheatingToolbar)
