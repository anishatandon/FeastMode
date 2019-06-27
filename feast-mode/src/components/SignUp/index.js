import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import "./SignUp.css";

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  passwordOne: '',
  passwordTwo: '',
  email: '',
  phone: '',
  error: null,
};

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    // this.handleChange=this.handleChange.bind(this)
    // this.handleSubmit=this.handleSubmit.bind(this)
  }


  handleSubmit = event => {
    const { username, email, phone, passwordOne, passwordTwo } = this.state;

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    phone === '' ||
    username === '';

    event.preventDefault();

    if (isInvalid===true) {
      if (passwordOne === '' || email === '' || phone === '' || username === ''){
        alert("Please fill out all fields")
      }else{
        alert("Passwords must match")
      }
    }
    else {
      this.props.firebase
        .doCreateUserWithEmailAndPassword(email, passwordOne)
        .then(authUser => {
          // Create a user in your Firebase realtime database
          return this.props.firebase
            .user(authUser.user.uid)
            .set({
              username,
              email,
              phone,
            })
        })
        .then(authUser => {
          this.setState({ ...INITIAL_STATE });
          this.props.history.push('/pay');
        })
        .catch(error => {
          this.setState({ error });
        });
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {

    const {
      username,
      passwordOne,
      passwordTwo,
      email,
      phone,
      error,
    } = this.state;

    // When the form is invalid, the submit button is disabled.
    // Here is when the button is disabled:
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      phone === '' ||
      username === '';


    return (
      <div className = "sign-up-form">
        <h2>Sign Up!</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            value={username}
            onChange={this.handleChange}
            type="text"
            placeholder="Full Name"
          />
          <br/>
          <br/>
          <input
            name="email"
            value={email}
            onChange={this.handleChange}
            type="text"
            placeholder="Email Address"
          />
          <br/>
          <br/>
          <input
            name="phone"
            value={phone}
            onChange={this.handleChange}
            type="text"
            placeholder="Phone Number"
          />
          <br/>
          <br/>
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />
          <br/>
          <br/>
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.handleChange}
            type="password"
            placeholder="Confirm Password"
          />
          <br/>
          <br/>
          <button onMouseOver={this.handleClick} type="submit" className ="button">Next</button>
          {/* disabled={isInvalid} */}
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    New to FeastMode? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink, INITIAL_STATE };
