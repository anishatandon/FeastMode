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
<<<<<<< HEAD
import PaymentInfo from '../SignUp/PaymentInfo';
=======
import Menu from '../Menu';

>>>>>>> 9e6f723553db6bf95284bfa512de8df7966701a8

import * as ROUTES from '../../constants/routes';

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
<<<<<<< HEAD
      <Route path={ROUTES.PAY} component={PaymentInfo} />
=======
      <Route path={ROUTES.MENU} component={Menu} />
>>>>>>> 9e6f723553db6bf95284bfa512de8df7966701a8
    </div>
  </Router>
);

export default App;
