import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { compose } from 'recompose'
import { withFirebase } from '../Firebase'

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
  friends: [],
  orders: [],
  image: null,
  user: null,
}

const USER = null;

class SignInFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE }
  }

  // conponentWillMount() {
  //   this.songsRef = base.syncState('users', {
  //     context: this,
  //     state: 'users'
  //   })
  // }
  //
  // componentWillUnmount() {
  //   base.
  // }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      // .then( () => {
      //   this.props.history.push(ROUTES.HOME); // Can't perform a React state update on an unmounted component
      // })
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
      <form onSubmit={this.onSubmit} className = "classic-form">

        <div className = "text-input">
          <label> Email </label> <br />
          <input
            name = "email"
            value = {email}
            onChange = {this.onChange}
            type = "text"
          /> <br />
        </div>
        
        <div className = "text-input">
          <label> Password </label> <br />
          <input
            name = "password"
            value = {password}
            onChange = {this.onChange}
            type = "password"
          /> <br />
        </div>

        <button disabled={isInvalid} type = "submit" className = "classic-button"> Log In </button>

        {error && <p>{error.message}</p>}

      </form>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInFormBase);

const SignInLink = () => (
  <pre className = "link-text">
    Already have an account?   <Link to={ROUTES.LANDING} className = "link">Log In</Link>
  </pre>
);

export default SignInForm
export { SignInLink }
