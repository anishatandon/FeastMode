import React from 'react'
import './Landing.css'

import SignInForm from '../SignIn/index.js'
import { SignUpLink } from '../SignUp/index.js'
import logo from './images/logo.png'


const Landing = () => (
  <div className = "landing"> 

    <div className = "landing-box">
      <img className = "landing-logo" src = {logo} alt = "Logo" />
      <h1> Join the Feast! </h1>
      <SignInForm />
    </div>

    

    <div className = "landing-link"> 
      <SignUpLink />
    </div>

  </div>
)

export default Landing
