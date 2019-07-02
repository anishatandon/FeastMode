import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../../backend/Session';
import { connect } from 'react-redux'

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = ({ loggedIn }) => {
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
        <li> <NavLink to={ROUTES.PAY}> Pay </NavLink> </li>
        <li> <NavLink to={ROUTES.APPS_YOU_HAVE}> Apps You Have </NavLink> </li>
        <li> <NavLink to={ROUTES.SUCCESS}> Success </NavLink> </li>
      </ul>
    )
  }

  return (
    <header className = "toolbar">
      {items}
    </header>
  )
}

const Toolbar2 = props => (
  <div>

    <header className = "toolbar">
      <nav className="toolbar_navigation">

        <AuthUserContext.Consumer>
          {authUser =>
            authUser ?
              <div className="toolbar_navigation">
                <div className="toolbar__toggle-button">
                  <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="toolbar__logo"><NavLink to={ROUTES.HOME}>The Logo</NavLink></div>
              </div>
             :
             <div className="toolbar__logo"><NavLink to={ROUTES.LANDING}>The Logo</NavLink></div>
          }
        </AuthUserContext.Consumer>


        <div className="spacer"> </div>
        <div className="toolbar_navigation-items">
        <AuthUserContext.Consumer>
          {authUser =>
            authUser ? 
            <ToolbarAuth /> 
            : 
            <div className="toolbar_navigation-about">
            <ul>
              <li>
                <NavLink to={ROUTES.ABOUT}>About</NavLink>
              </li>
            </ul>
            </div>
          }
        </AuthUserContext.Consumer>
        </div>

      </nav>
    </header>
  </div>
);



const ToolbarAuth = () => (
  <ul>
    <li>
      <NavLink to={ROUTES.LANDING}>Landing</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.HOME}>Home</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.MENU}>Menu</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.PASSWORD_CHANGE}>Password Change</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.PROFILE_CHANGE}>Profile Change</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.RESTAURANTS}>Restaurants</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.APPS_YOU_HAVE}>Apps you have</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.PAY}>Payment</NavLink>
    </li>
    <li>
      <NavLink to={ROUTES.ABOUT}>About</NavLink>
    </li>
  </ul>
);


const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
})


export default connect(mapStateToProps)(Toolbar)
