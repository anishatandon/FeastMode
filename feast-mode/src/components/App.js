import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { connect } from 'react-redux'
import * as actions from '../backend/store/actions'
import styled from 'styled-components'

import Landing from './Auth/Landing'
import SignUp from './Auth/SignUp'
import LogOut from './Auth/LogOut'
import Home from './Home'
import Menu from './Menu'
import PasswordRecovery from './Auth/Profile/PasswordRecovery.js'
import ProfileEdit from './Auth/Profile/ProfileEdit.js'
import Restaurants from './Food/Restaurants'
import About from './About'
import Navbar from './Navigation'
import Backdrop from './Modal/Backdrop.js'
// import Friends from '../Friends/Friend'
import EmailVerification from './Auth/EmailVerification'
import AddFriends from './Friends/AddFriends'
import EditFriends from './Friends/EditFriends'
import PickFood from './Food/PickFood'

import '../style/Landing.css'
import '../style/SignUp.css'
import '../style/Restaurants.css'
import '../style/Menu.css'
import '../style/Home.css'
import '../style/SearchBar.css'
import '../style/Backdrop.css'
import '../style/CheatingToolbar.css'
import '../style/Loader.css'
import '../style/Friends.css'
import '../style/EmailVerification.css'
import '../style/ProfileChange.css'
import '../style/main-logo.css'
import '../style/titles.css'
import '../style/button.css'
import '../style/form.css'
import '../style/about.css'
import '../style/PasswordChange.css'

const MainWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 6rem);
  display: flex;
  align-items: center;
  justify-content: center;
`

const App = ({ loggedIn, sideDrawer, emailVerified, change, close }) => {
  let routes
  let backdrop

  if (sideDrawer) {
    backdrop = <Backdrop click = {close}/>
  }

  if (loggedIn && !emailVerified) {
    routes = (
      <>
        <Navbar/>
        <MainWrapper>
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
        <Navbar sideDrawerClickHandler = {change}/>
        <Menu show = {sideDrawer} />
        {backdrop}

        <MainWrapper>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route exact path={ROUTES.LOG_OUT} component={LogOut} />
            <Route exact path={ROUTES.MENU} component={Menu} />
            <Route exact path={ROUTES.PASSWORD_RECOVERY} component={PasswordRecovery} />
            <Route exact path={ROUTES.PROFILE_EDIT} component={ProfileEdit} />
            <Route exact path={ROUTES.RESTAURANTS} component={Restaurants} />
            <Route exact path={ROUTES.ABOUT} component={About} />
            {/* <Route exact path={ROUTES.FRIENDS} component={Friends} /> */}
            <Route exact path={ROUTES.ADD_FRIENDS} component={AddFriends} />
            <Route exact path={ROUTES.EDIT_FRIENDS} component={EditFriends} />
            <Route exact path={ROUTES.PICK_FOOD} component={PickFood} />
            <Redirect to={ROUTES.HOME} />
          </Switch>
        </MainWrapper>
      </>
    )
  } else {
    routes = (
      <MainWrapper>
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

  return <div>{ routes }</div>
}

const mapStateToProps = ({ firebase, ui }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified,
  sideDrawer: ui.sideDrawerOpen,
})

const mapDispatchToProps = {
  change: actions.changeSideDrawer,
  close: actions.closeSideDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(App)