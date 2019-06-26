import React from 'react'
import './Landing.css'
import logo from './logo.png' // Font is Monserrat
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'

const Landing = () => (
  <div className = "landing">
    <img src = {logo} alt = "Logo"/>
    <h1> Join the Feast! </h1>
    <Link to = {ROUTES.SIGN_IN}><button> Sign In </button></Link> 
    <br />
    <Link to = {ROUTES.SIGN_UP}><button> Sign Up </button></Link>
  </div>
);

export default Landing
