import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Landing from './Auth/Landing'
import SignUp from './Auth/SignUp'
import LogOut from './Auth/LogOut'
import Home from './Home'
import SideDrawer from './Navigation/SideDrawer.js'
import PasswordRecovery from './Auth/Profile/PasswordRecovery.js'
import ProfileEdit from './Auth/Profile/ProfileEdit.js'
import Restaurants from './Food/Restaurants'
import About from './About'
import Navbar from './Navigation'
import Backdrop from './Modal/Backdrop.js'
import EmailVerification from './Auth/EmailVerification'
import AddFriends from './Friends/AddFriends'
import DisplayFriends from './Friends/Friends'
import PickFood from './Food/PickFood'

import '../style/Landing.css'
import '../style/Restaurants.css'
import '../style/Home.css'
import '../style/Backdrop.css'
import '../style/Loader.css'
import '../style/Friends.css'
import '../style/EmailVerification.css'
import '../style/ProfileChange.css'
import '../style/about.css'
import '../style/PasswordChange.css'

const MainWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 8rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ loggedIn }) => (loggedIn ? 'var(--color-white)' : 'var(--color-background)')};
`

const App = ({ loggedIn, emailVerified }) => {
  let routes

  if (loggedIn && !emailVerified) {
    routes = (
      <>
        <Navbar/>
        <MainWrapper loggedIn = {loggedIn}>
          <Switch> 
            <Route exact path={ROUTES.EMAIL_VERIFICATION} component={EmailVerification} />
            <Route exact path={ROUTES.LOG_OUT} component={LogOut} />
            <Redirect to={ROUTES.EMAIL_VERIFICATION} />
          </Switch>
        </MainWrapper>
      </>
    )
  } else if (loggedIn && emailVerified) {
    routes = (
      <>
        <Navbar/>
        <SideDrawer/>

        <MainWrapper loggedIn = {loggedIn}>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.LOG_OUT} component={LogOut} />
            <Route exact path={ROUTES.SIDEDRAWER} component={SideDrawer} />
            <Route exact path={ROUTES.PASSWORD_RECOVERY} component={PasswordRecovery} />
            <Route exact path={ROUTES.PROFILE_EDIT} component={ProfileEdit} />
            <Route exact path={ROUTES.RESTAURANTS} component={Restaurants} />
            <Route exact path={ROUTES.ABOUT} component={About} />
            {/* <Route exact path={ROUTES.FRIENDS} component={Friends} /> */}
            <Route exact path={ROUTES.ADD_FRIENDS} component={AddFriends} />
            <Route exact path={ROUTES.DISPLAY_FRIENDS} component={DisplayFriends} />
            {/* <Route exact path={ROUTES.PICK_FOOD} component={PickFood} /> */}
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
          <Route exact path={ROUTES.ABOUT} component={About} />
          <Route exact path={ROUTES.PASSWORD_RECOVERY} component={PasswordRecovery} />
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

export default connect(mapStateToProps)(App)