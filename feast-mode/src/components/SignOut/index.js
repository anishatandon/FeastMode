import React from 'react';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

const SignOutButton = ({ firebase }) => (
  <Link to = {ROUTES.LANDING}>
    <button type="button" onClick={firebase.doSignOut}> Sign Out </button>
  </Link>
);

export default withFirebase(SignOutButton);
