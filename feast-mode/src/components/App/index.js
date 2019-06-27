import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from '../Navigation';
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


import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

import '../../stylesheets/Landing.css'
import '../../stylesheets/SignUp.css'
import '../../stylesheets/Restaurants.css'
import '../../stylesheets/Menu.css'
import '../../stylesheets/Home.css'
import '../../stylesheets/SearchBar.css'
import '../../stylesheets/main-logo.css'
import '../../stylesheets/titles.css'
import '../../stylesheets/button.css'
import '../../stylesheets/form.css'

const App = () => (
  <Router>
    <div>

      <Navigation />

      <hr />

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

    </div>
  </Router>
);

export default withAuthentication(App);
