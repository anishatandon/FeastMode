import React from 'react';

import SignInLink from '../SignIn/SignInLink.js'
import WizardForm from './WizardForm.js'

import logo from '../../images/logo.png'

const SignUpPage = () => (
  <div className = "sign-up">

    <img className = "main-logo" src = {logo} alt = "Logo" />
    <h1> Sign Up! </h1>
    <WizardForm />

    <div className = "link-area">
      <SignInLink />
    </div>

  </div>
);

export default SignUpPage
