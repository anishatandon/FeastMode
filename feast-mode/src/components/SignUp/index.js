import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// import Avatar_App from "./Avatar_App";
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import ImageUpload from "./ImageUpload";

import * as ROUTES from '../../constants/routes'; 
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

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    // this.handleChange=this.handleChange.bind(this)
    // this.handleSubmit=this.handleSubmit.bind(this)
  }


  handleSubmit = event => {
    const { username, email, phone, passwordOne } = this.state;

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
          });
      })
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/pay');
      })
      .catch(error => {
        this.setState({ error });
      });

      console.log("submitted")
      event.preventDefault();
    //the next button is clicked, go to the billing info page
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    // const {name, value, type, checked} = event.target
    // type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value}) //can now handle checkboxes, too
  };


  render() {

    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      phone,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';


    return (
      <div className = "sign-up-form">
        <h2>Sign Up!</h2>
        <ImageUpload />
        {/* <div className="image-cropper">
          <img src="http://placekitten.com/400/300" className="profile-pic"/>
        </div> */}

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
            <button type="submit" className = "button" >Next</button>
          {error && <p>{error.message}</p>}
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
