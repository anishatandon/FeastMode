import React from 'react'
import './Landing.css'
import logo from './dinner.png' // Font is Monserrat
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'

const Landing = () => (
  <div className = "landing">
    <img className = "logo" src = {logo} alt = "Logo" />
    <h1> Join the Feast! </h1>
    <Link to = {ROUTES.SIGN_IN}><button className="button"> Login </button></Link> 
    <br />
    <br />
    <Link to = {ROUTES.SIGN_UP}><button className="button"> Sign Up </button></Link>
  </div>
);

export default Landing
