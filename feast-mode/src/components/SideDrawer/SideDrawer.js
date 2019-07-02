import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if(props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
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
    </nav>
  );
};








export default SideDrawer;
