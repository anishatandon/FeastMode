import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import './SideDrawer.css';

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if(props.show) {
    drawerClasses = 'side-drawer open';
  }



  return (
    <nav className={drawerClasses}>
      <ul>
        <li><Link to={ROUTES.MENU}>Menu</Link></li>
        <li><Link to={ROUTES.HOME}>Home</Link></li>
        <li><Link to={ROUTES.PROFILE_CHANGE}>Edit Profile</Link></li>
      </ul>
    </nav>
  );
};

export default sideDrawer;
