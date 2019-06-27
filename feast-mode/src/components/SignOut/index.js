import React from 'react';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

const SignOutButton = ({ firebase }) => (
  <Link to = {ROUTES.LANDING}>
    <button type="button" onClick={firebase.doSignOut} className="classic-button"> Logout </button>
  </Link>
);

export default withFirebase(SignOutButton);
