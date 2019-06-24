import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Avatar_App from "./Avatar_App";
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

import * as ROUTES from '../../constants/routes'; //EDITS
import Success from './Success';
import "./SignUp.css";

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  passwordOne: '',
  passwordTwo: '',
  email: '',
  phone: '',
  image: "http://placekitten.com/400/300",
  error: null,
};

export class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.handleChange=this.handleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }


  handleSubmit = event => {
    console.log("submitted")
    event.preventDefault()
    //the next button is clicked, go to the billing info page
  }

  handleChange = event => {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value}) //can now handle checkboxes, too
  };


  render() {
    return (
      <div className = "sign-up-form">
        <h2>Sign Up!</h2>
        {/* <div className="image-cropper">
          <img src="http://placekitten.com/400/300" className="profile-pic"/>
        </div> */}

        <form onSubmit={(e) => {e.preventDefault(); this.props.history.push('/pay')}}>
          <input
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            type="text"
            placeholder="Full Name"
          />
          <br/>
          <br/>
          <input
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            type="text"
            placeholder="Email Address"
          />
          <br/>
          <br/>
          <input
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            type="text"
            placeholder="Phone Number"
          />
          <br/>
          <br/>
          <input
            name="passwordOne"
            value={this.state.passwordOne}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
          />
          <br/>
          <br/>
          <input
            name="passwordTwo"
            value={this.state.passwordTwo}
            onChange={this.handleChange}
            type="password"
            placeholder="Confirm Password"
          />
          <br/>
          <br/>
            <button type="submit" className = "button">Next</button>
          {this.state.error && <p>{this.state.error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>
);

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm, SignUpLink };
