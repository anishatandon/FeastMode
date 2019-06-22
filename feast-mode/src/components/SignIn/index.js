import React, { Component } from 'react';
import firebase, { auth, provider } from '../Firebase/firebase.js';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import HomePage from '../Home';


class SignIn extends Component {

  constructor(){
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: [],
      user: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }



  render() {
    return (
      <div>

        <div className='app'>
          <header>
           <div className="wrapper">
             <h1>Sign In</h1>
            </div>
          </header>

          {this.state.user ?
             <div>
               <Router>
                   <Route path={ROUTES.HOME} component={HomePage} />
               </Router>
               <button onClick={this.logout}>Logout</button>
               </div>
             :
             <div className='wrapper'>
               <p>Please sign in.</p>
               <button onClick={this.login}>Log In</button>
             </div>
          }


        </div>

      </div>




    );
  }




  handleChange(e) {
    this.setState( {
      [e.target.name] : e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.user.displayName || this.state.user.email
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });

    itemsRef.on('value', (snapshot) => {
      console.log(snapshot.val());
    });
  }


  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for(let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      }
    });
  }

  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }



  logout(){
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user

        });
      });
  }

}

export default SignIn;
