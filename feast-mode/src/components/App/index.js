import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import LandingPage from '../Landing';
import SignUpPage from '../SignUp/index.js';
import SignOut from '../SignOut';
import Home from '../Home';
import Success from '../SignUp/Success';
import AppsYouHave from '../SignUp/AppsYouHave';
import PaymentInfo from '../SignUp/PaymentInfo';
import Menu from '../Menu';
import PasswordChangePage from '../Profile/password_change.js';
import ProfileChangePage from '../Profile/profile_change.js';
import Restaurants from '../Restaurants';
import About from '../About';
import Toolbar from '../Navigation/Toolbar'; //test
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import Friends from '../Friends';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../../backend/Session';

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
import '../../stylesheets/Loader.css'
import '../../stylesheets/main-logo.css'
import '../../stylesheets/titles.css'
import '../../stylesheets/button.css'
import '../../stylesheets/form.css'
import '../../stylesheets/about.css'
import { format } from 'path';
import { auth } from 'firebase';


const App = ({ loggedIn, sideDrawerOpen }) => {

  // drawerToggleClickHandler = () => {
  //   this.setState(prevState => {
  //     return { sideDrawerOpen: !prevState.sideDrawerOpen }
  //   })
  // }

  // backdropClickHandler = () => {
  //   this.setState({ sideDrawerOpen: false })
  // }

  let backdrop;

    // if (this.state.sideDrawerOpen) {
    //   backdrop = <Backdrop click={this.backdropClickHandler} />
  //}

  let routes
  if (loggedIn) {
    routes = (
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
    )
  } else {
    routes = (
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route exact path={ROUTES.PAY} component={PaymentInfo} />
        <Route exact path={ROUTES.APPS_YOU_HAVE} component={AppsYouHave} />
        <Route exact path={ROUTES.SUCCESS} component={Success} />
        <Route exact path={ROUTES.ABOUT} component={About} />
        <Redirect to={ROUTES.LANDING} />
      </Switch>
    )
  }

  return (
    <div style={{height: '100%'}}>

      <Toolbar /* drawerClickHandler={this.drawerToggleClickHandler} */ />
      {/* <SideDrawer show={this.state.sideDrawerOpen} /> */}
      {/* {backdrop} */}

      <main style={{ marginTop: '100px' }}> {routes} </main>

    </div>
  )
}


const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  sideDrawerOpen: false,
})

// export default withAuthentication(App);
export default connect(mapStateToProps)(App)