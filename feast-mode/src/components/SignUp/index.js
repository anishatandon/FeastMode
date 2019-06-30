import React from 'react';

import SignUpForm from './SignUpForm.js'
import { SignInLink } from '../SignIn/index.js'

import logo from '../../images/logo.png'

const SignUpPage = () => (
  <div className = "sign-up">

    <img className = "main-logo" src = {logo} alt = "Logo" />
    <h1> Sign Up! </h1>
    <SignUpForm />

    <div className = "link-area">
      <SignInLink />
    </div>

  </div>
);

export default SignUpPage
