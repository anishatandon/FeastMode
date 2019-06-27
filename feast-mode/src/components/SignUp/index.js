import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import logo from '../../images/logo.png'

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  first_name: '',
  last_name: '',
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
    const { first_name, last_name, email, phone, passwordOne, passwordTwo } = this.state;

    const isInvalid =
    passwordOne !== passwordTwo ||
    passwordOne === '' ||
    email === '' ||
    phone === '' ||
    first_name === '' ||
    last_name === '';

    event.preventDefault();

    if (isInvalid===true) {
      if (passwordOne === '' || email === '' || phone === '' || first_name === '' || last_name === ''){
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
              first_name,
              last_name,
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
      first_name,
      last_name,
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
      first_name === '' ||
      last_name === '';


    return (
      <div className = "sign-up">
        <img className = "main-logo" src = {logo} alt = "Logo" />
        <h1> Sign Up! </h1>

        <form onSubmit={this.handleSubmit} className = "classic-form">

          <div>
            <table>
              <tr>
                <th>
                  <label> First Name </label> <br />
                  <input
                    name = "first_name"
                    value = {first_name}
                    onChange = {this.handleChange}
                    type = "text"
                  />
                </th>
                <th>
                  <label> Last Name </label> <br />
                  <input
                    name = "last_name"
                    value = {last_name}
                    onChange = {this.handleChange}
                    type = "text"
                  />
                </th>
              </tr>
            </table>
            <br/>
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

        </form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <pre className = "signup-text">
    New to FeastMode?   <Link to={ROUTES.SIGN_UP} id = "sign-up-link">Sign Up</Link>
  </pre>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;
export { SignUpForm, SignUpLink, INITIAL_STATE };
