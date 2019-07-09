import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { connect } from 'react-redux'
import * as actions from '../../backend/store/actions'

import LandingPage from '../Landing'
import SignUpPage from '../SignUp'
import SignOut from '../SignOut'
import Home from '../Home'
import Menu from '../Menu'
import PasswordChangePage from '../Profile/password_change.js'
import ProfileChangePage from '../Profile/ProfileChange.js'
import Restaurants from '../Restaurants'
import About from '../About'
import Navbar from '../Navigation'
import Backdrop from '../Navigation/Backdrop.js'
// import Friends from '../Friends/Friend'
import EmailVerification from '../EmailVerification'
import AddFriendsPage from '../Friends/AddFriends'
import DisplayFriendsPage from '../Friends/DisplayFriends.js'
import PickFoodPage from '../Food/PickFood'

import '../../stylesheets/Landing.css'
import '../../stylesheets/SignUp.css'
import '../../stylesheets/Restaurants.css'
import '../../stylesheets/Menu.css'
import '../../stylesheets/Home.css'
import '../../stylesheets/SearchBar.css'
import '../../stylesheets/Backdrop.css'
import '../../stylesheets/DrawerToggleButton.css'
import '../../stylesheets/CheatingToolbar.css'
import '../../stylesheets/Loader.css'
import '../../stylesheets/Navbar.css'
import '../../stylesheets/Friends.css'
import '../../stylesheets/EmailVerification.css'
import '../../stylesheets/ProfileChange.css'
import '../../stylesheets/main-logo.css'
import '../../stylesheets/titles.css'
import '../../stylesheets/button.css'
import '../../stylesheets/form.css'
import '../../stylesheets/about.css'
import '../../stylesheets/PasswordChange.css'

const App = ({ loggedIn, sideDrawer, emailVerified, open, close }) => {
  let routes
  let backdrop

  if (sideDrawer) {
    backdrop = <Backdrop click = {close}/>
  }

  if (loggedIn && !emailVerified) {
    routes = (
      <>
        <Navbar drawerClickHandler = {open}/>
        <Menu show = {sideDrawer} />
        {backdrop}
        <Switch> 
            <Route exact path={ROUTES.EMAIL_VERIFICATION} component={EmailVerification} />
            <Route exact path={ROUTES.SIGN_OUT} component={SignOut} />
            <Redirect to={ROUTES.EMAIL_VERIFICATION} />
        </Switch>
      </>
    )
  } else if (loggedIn && emailVerified) {
    routes = (
      <>
        <Navbar drawerClickHandler = {open}/>
        <Menu show = {sideDrawer} />
        {backdrop}

        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.SIGN_OUT} component={SignOut} />
          <Route exact path={ROUTES.MENU} component={Menu} />
          <Route exact path={ROUTES.PASSWORD_CHANGE} component={PasswordChangePage} />
          <Route exact path={ROUTES.PROFILE_CHANGE} component={ProfileChangePage} />
          <Route exact path={ROUTES.RESTAURANTS} component={Restaurants} />
          <Route exact path={ROUTES.ABOUT} component={About} />
          {/* <Route exact path={ROUTES.FRIENDS} component={Friends} /> */}
          <Route exact path={ROUTES.ADD_FRIENDS} component={AddFriendsPage} />
          <Route exact path={ROUTES.EDIT_FRIENDS} component={DisplayFriendsPage} />
          <Route exact path={ROUTES.PICK_FOOD} component={PickFoodPage} />
          <Redirect to={ROUTES.HOME} />
        </Switch>
      </>
    )
  } else {
    routes = (
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.ABOUT} component={About} />
        <Route exact path={ROUTES.PASSWORD_CHANGE} component={PasswordChangePage} />
        <Redirect to={ROUTES.LANDING} />
      </Switch>
    )
  }

  return  <main> {routes} </main>
}

const mapStateToProps = ({ firebase, ui }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified,
  sideDrawer: ui.sideDrawerOpen,
})

const mapDispatchToProps = {
  open: actions.openSideDrawer,
  close: actions.closeSideDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(App)