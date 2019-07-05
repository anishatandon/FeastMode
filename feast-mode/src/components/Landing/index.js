import React from 'react'

import LogInForm from '../LogIn/index.js'
import SignUpLink from '../SignUp/SignUpLink.js'

import logo from '../../images/logo.png'

const Landing = () => (
  <div className = "landing">

    <div className = "regular-logo-container">
      <img className = "main-logo" src = {logo} alt = "Logo" />
    </div>
    
    <h1> Join the Feast! </h1>
    <LogInForm />

    <div className = "link-area">
      <SignUpLink />
    </div>

  </div>
)

export default Landing
