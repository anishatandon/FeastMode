import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { compose } from 'recompose'

import { withFirebase } from '../Firebase'
import './SignIn.css'


const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  friends: [],
  orders: [],
  image: null,
}

const USER = null;

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
        USER = this.props.firebase.userID();
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <form onSubmit={this.onSubmit} className = "signin-form">

        <label> Email </label> <br />
        <input
          name = "email"
          value = {email}
          onChange = {this.onChange}
          type = "text"
        /> <br />

        <label> Password </label> <br />
        <input
          name = "password"
          value = {password}
          onChange = {this.onChange}
          type = "password"
        /> <br />

        <button disabled={isInvalid} type = "submit"> Log In </button>

        {error && <p>{error.message}</p>}

      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);


export { SignInForm, USER };
