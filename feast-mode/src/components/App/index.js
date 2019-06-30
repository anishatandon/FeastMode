import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

import LandingPage from '../Landing';
import SignUpPage from '../SignUp/index.js';
import SignInPage from '../SignIn';
import SignOutPage from '../SignOut';
import HomePage from '../Home';
import Success from '../SignUp/Success';
import AppsYouHave from '../SignUp/AppsYouHave';
import PaymentInfo from '../SignUp/PaymentInfo';
import Menu from '../Menu';
import PasswordChangePage from '../Profile/password_change.js';
import ProfileChangePage from '../Profile/profile_change.js';
import Restaurants from '../Restaurants'
import About from '../About'
import Toolbar from '../Navigation/Toolbar' //test
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../Backdrop/Backdrop'

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

import '../../stylesheets/Landing.css'
import '../../stylesheets/SignUp.css'
import '../../stylesheets/Restaurants.css'
import '../../stylesheets/Menu.css'
import '../../stylesheets/Home.css'
import '../../stylesheets/SearchBar.css'
import '../../stylesheets/Backdrop.css'
import '../../stylesheets/DrawerToggleButton.css'
import '../../stylesheets/SideDrawer.css'
import '../../stylesheets/Toolbar.css'
import '../../stylesheets/main-logo.css'
import '../../stylesheets/titles.css'
import '../../stylesheets/button.css'
import '../../stylesheets/form.css'


class App extends Component {
  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div style={{height: '100%'}}>
        <Router>

          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <main style={{ marginTop: '100px' }} />

            <Route exact path={ROUTES.LANDING} component={LandingPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.SIGN_OUT} component={SignOutPage} />
            <Route path={ROUTES.HOME} component={HomePage} />
            <Route path={ROUTES.SUCCESS} component={Success} />
            <Route path={ROUTES.PAY} component={PaymentInfo} />
            <Route path={ROUTES.APPS_YOU_HAVE} component={AppsYouHave} />
            <Route path={ROUTES.MENU} component={Menu} />
            <Route path={ROUTES.PASSWORD_CHANGE} component={PasswordChangePage} />
            <Route path={ROUTES.PROFILE_CHANGE} component={ProfileChangePage} />
            <Route path={ROUTES.RESTAURANTS} component={Restaurants} />
            <Route path={ROUTES.ABOUT} component={About} />
            <Redirect to={ROUTES.LANDING} />

        </Router>
      </div>


    )
  }
}

export default withAuthentication(App);
