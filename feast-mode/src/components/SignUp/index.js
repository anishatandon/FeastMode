import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import logo from '../../images/logo.png'


const SignUpLink = () => (
  <pre className = "signup-text">
    New to FeastMode?   <Link to={ROUTES.SIGN_UP} id = "sign-up-link">Sign Up</Link>
  </pre>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink, INITIAL_STATE };
