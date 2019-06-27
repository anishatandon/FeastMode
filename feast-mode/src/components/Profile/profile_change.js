import React, { Component } from 'react';
// import Firebase from '../Firebase';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  loading: false,
  users: [],
};



class ProfileChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }


  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key,
      }));

      this.setState({
        users: usersList,
        loading: false,
      });
    });
  }



  onSubmit = event => {
    event.preventDefault();
    const user = this.props.firebase.userID();
    console.log(user)

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
    const { users, loading } = this.state;


    const isInvalid = false
    //   username === '' &&
    //   email === '' &&
    //   phone === '';

    return (
      <div>
        <h1>Profile Change</h1>

        {loading && <div>Loading ...</div>}

        <UserList users={users} />

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
          placeholder="New email"
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

      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>E-Mail:</strong> {user.email}
        </span>
        <span>
          <strong>Username:</strong> {user.username}
        </span>
        <span>
          <strong>Phone:</strong> {user.phone}
        </span>
      </li>
    ))}
  </ul>
);

export default withFirebase(ProfileChangeForm);
