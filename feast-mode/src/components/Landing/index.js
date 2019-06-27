import React from 'react'

import SignInForm from '../SignIn/index.js'
import { SignUpLink } from '../SignUp/index.js'

import logo from '../../images/logo.png'

const Landing = () => (
  <div className = "landing"> 

    <img className = "main-logo" src = {logo} alt = "Logo" />
    <h1> Join the Feast! </h1>
    <SignInForm />

    <div className = "link"> 
      <SignUpLink />
    </div>

  </div>
)

export default Landing
