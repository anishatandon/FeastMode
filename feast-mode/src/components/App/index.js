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
import ProfileChangePage from '../Profile/profile_change.js'
import Restaurants from '../Restaurants'
import About from '../About'
import CheatingToolbar from '../Navigation/CheatingToolbar'
import Navbar from '../Navigation'
import Backdrop from '../Navigation/Backdrop.js'
import Friends from '../Friends'
import EmailVerification from '../EmailVerification'

import '../../stylesheets/Landing.css'
import '../../stylesheets/SignUp.css'
import '../../stylesheets/Restaurants.css'
import '../../stylesheets/Menu.css'
import '../../stylesheets/Home.css'
import '../../stylesheets/SearchBar.css'
import '../../stylesheets/Backdrop.css'
import '../../stylesheets/DrawerToggleButton.css'
import '../../stylesheets/SideDrawer.css'
import '../../stylesheets/CheatingToolbar.css'
import '../../stylesheets/Loader.css'
import '../../stylesheets/Navbar.css'
import '../../stylesheets/Friends.css'
import '../../stylesheets/EmailVerification.css'
import '../../stylesheets/main-logo.css'
import '../../stylesheets/titles.css'
import '../../stylesheets/button.css'
import '../../stylesheets/form.css'
import '../../stylesheets/about.css'

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
          <Route exact path={ROUTES.FRIENDS} component={Friends} />
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
        <Redirect to={ROUTES.LANDING} />
      </Switch>
    )
  }

  return (
    <div>

      <CheatingToolbar/>

      <main> {routes} </main>

    </div>
  )
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