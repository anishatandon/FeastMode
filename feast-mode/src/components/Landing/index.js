import React from 'react'

import SignInForm from '../SignIn/index.js'
import { SignUpLink } from '../SignUp/SignUpForm'

import logo from '../../images/logo.png'

const Landing = () => (
  <div className = "landing">

    <img className = "main-logo" src = {logo} alt = "Logo" />
    <h1> Join the Feast! </h1>
    <SignInForm />

    <div className = "link-area">
      <SignUpLink />
    </div>

  </div>
)

export default Landing
