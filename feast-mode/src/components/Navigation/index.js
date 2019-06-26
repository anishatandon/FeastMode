import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';


const Navigation = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
);



const NavigationAuth = () => (
  <div>
    <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.MENU}>Menu</Link>
    </li>
    <li>
      <Link to={ROUTES.PASSWORD_CHANGE}>Password Change</Link>
    </li>
    <li>
      <Link to={ROUTES.PROFILE_CHANGE}>Profile Change</Link>
    </li>
    <li>
      <Link to={ROUTES.RESTAURANTS}>Restaurants</Link>
    </li>
    </ul>
  </div>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);

export default Navigation;
