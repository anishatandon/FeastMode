import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Landing from './Auth/Landing'
import SignUp from './Auth/SignUp'
import LogOut from './Auth/LogOut'
import Home from './Home'
import SideDrawer from './Navigation/SideDrawer.js'
import PasswordReset from './Profile/PasswordReset.js'
import Profile from './Profile/index.js'
import ProfileEdit from './Profile/ProfileEdit/index.js'
import About from './About'
import Navbar from './Navigation'
import EmailVerification from './Auth/EmailVerification'
import DisplayFriends from './Friends'
import PickFood from './Food/Restaurants'
import Menu from './Food/Menu/index.js'
import DisplayMap from './Location/index.js'
// import Twilio from '../backend/server_twilio/src/App.js'

import '../style/Backdrop.css'
import '../style/EmailVerification.css'
import '../style/about.css'
import '../style/Card.css'
import '../style/AppsFormWrapper.css'

export const MainWrapper = styled.main`
  position: absolute;
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  padding: 8rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ loggedIn, path }) => !loggedIn || path === "/profile_edit" || path === "/email_verification" ? 'var(--color-background)' : 'var(--color-white)'};
`

const App = ({ loggedIn, emailVerified, location }) => {
  let routes
  
  if (loggedIn && !emailVerified) {
    routes = (
      <>
        <Navbar path = {location.pathname}/>
        <MainWrapper loggedIn = {loggedIn} path = {location.pathname}>
          <Switch> 
            <Route exact path={ROUTES.EMAIL_VERIFICATION} component={EmailVerification} />
            <Route exact path={ROUTES.ABOUT} component={About} />
            <Route exact path={ROUTES.LOG_OUT} component={LogOut} />
            <Redirect to={ROUTES.EMAIL_VERIFICATION} />
          </Switch>
        </MainWrapper>
      </>
    )
    } else if (loggedIn && emailVerified) {
    routes = (
      <>
        <Navbar path = {location.pathname}/>
        <SideDrawer path = {location.pathname}/>

        <MainWrapper loggedIn = {loggedIn} path = {location.pathname}>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.LOG_OUT} component={LogOut} />
            <Route exact path={ROUTES.SIDEDRAWER} component={SideDrawer} />
            <Route exact path={ROUTES.PROFILE} component={Profile}/>
            <Route exact path={ROUTES.PROFILE_EDIT} component={ProfileEdit}/>
            <Route exact path={ROUTES.ABOUT} component={About} />
            <Route exact path={ROUTES.DISPLAY_FRIENDS} component={DisplayFriends} />
            <Route exact path={ROUTES.PICK_FOOD} component={PickFood} />
            <Route exact path={ROUTES.MENU} component={Menu} />
            <Route exact path={ROUTES.MAP} component={DisplayMap} />
            {/* <Route exact path={ROUTES.TWILIO} component={Twilio} /> */}
            <Redirect to={ROUTES.HOME} />
          </Switch>
          
        </MainWrapper>
      </>
    )
  } else {
    routes = (
      <MainWrapper loggedIn = {loggedIn}>
        <Switch>
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <Route exact path={ROUTES.PASSWORD_RESET} component={PasswordReset} />
          <Redirect to={ROUTES.LANDING} />
        </Switch>
      </MainWrapper>
    )
  }

  return <>{ routes }</>
}

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified,
})

export default withRouter(connect(mapStateToProps)(App))