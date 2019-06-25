import React from 'react';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import "../SignUp/SignUp.css";

const SignOutButton = ({ firebase }) => (
  <Link to = {ROUTES.LANDING}>
    <button type="button" onClick={firebase.doSignOut} className="button"> Sign Out </button>
  </Link>
);

export default withFirebase(SignOutButton);
