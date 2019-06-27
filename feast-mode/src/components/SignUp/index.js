import React from 'react';

import SignUpForm from './SignUpForm.js'
import { SignInLink } from '../SignIn/index.js'

import logo from '../../images/logo.png'

const SignUpPage = () => (
  <div className = "sign-up">

<<<<<<< HEAD
  render() {

    const {
      username,
      passwordOne,
      passwordTwo,
      email,
      phone,
      error,
    } = this.state;

    // When the form is invalid:
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      phone === '' ||
      username === '';


    return (
      <div className = "sign-up">
        <img className = "main-logo" src = {logo} alt = "Logo" />
        <h1> Sign Up! </h1>

        <form onSubmit={this.handleSubmit} className = "classic-form">

          <div>
            <label> Full Name </label> <br />
            <input
              name = "username"
              value = {username}
              onChange = {this.handleChange}
              type = "text"
            /> <br/>
          </div>
          
          <div> 
            <label> Email </label> <br />
            <input
              name = "email"
              value = {email}
              onChange = {this.handleChange}
              type = "text"
            /> <br/>
          </div>
          
          <div>
            <label> Phone Number </label> <br />
            <input
              name = "phone"
              value = {phone}
              onChange = {this.handleChange}
              type = "text"
            /> <br/>
          </div>
          
          <div>
            <label> Password </label> <br />
            <input
              name = "passwordOne"
              value = {passwordOne}
              onChange ={ this.handleChange}
              type = "password"
            /> <br/>
          </div>
         
         <div>
           <label> Confirm Password </label> <br />
           <input
              name = "passwordTwo"
              value = {passwordTwo}
              onChange = {this.handleChange}
              type = "password"
            /> <br/>
         </div>

          <button onMouseOver = {this.handleClick} type = "submit" className = "classic-button"> Next </button>

          {/* disabled={isInvalid} */}
          {error && <p>{error.message}</p>}
=======
    <img className = "main-logo" src = {logo} alt = "Logo" />
    <h1> Sign Up! </h1>
    <SignUpForm />
>>>>>>> 94d2c1c1ab642c710cb825ae50bb8645e96b370b

    <div className = "link-area"> 
      <SignInLink />
    </div>

  </div>
);

export default SignUpPage
