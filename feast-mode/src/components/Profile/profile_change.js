import React, { Component } from 'react';
import Firebase from '../Firebase';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  username: '',
  email: '',
  phone: '',
  error: null,
};

class ProfileChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();
    const { username, email, phone } = this.state;

    this.props.firebase
      .doEmailUpdate(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch(error => {
        this.setState({ error });
      });



    this.props.firebase
      .doProfileUpdate(
        {username: this.username,
        email: this.email,
        phone: this.phone,
        })
      .then(() => {
        this.setState({ ...INITIAL_STATE });
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
    const { username, email, phone, error } = this.state;

    const isInvalid =
      username === '' &&
      email === '' &&
      phone === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="New Username"
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="New Email"
        />
        <input
          name="phone"
          value={phone}
          onChange={this.onChange}
          type="text"
          placeholder="New Phone"
        />
        <button disabled={isInvalid} type="submit">
          Save
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withFirebase(ProfileChangeForm);
