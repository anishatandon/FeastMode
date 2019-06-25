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
import PaymentInfo from '../SignUp/PaymentInfo';
import Menu from '../Menu';
import PasswordChangePage from '../Profile/password_change.js';


import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

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
      <Route path={ROUTES.MENU} component={Menu} />
      <Route path={ROUTES.PASSWORD_CHANGE} component={PasswordChangePage} />
    </div>
  </Router>
);

export default withAuthentication(App);
