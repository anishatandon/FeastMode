import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';


import './Toolbar.css';
import DrawerToggleButton from '../Sidebar/DrawerToggleButton';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <DrawerToggleButton click={props.drawerClickHandler} />
      </div>
      <div className="toolbar__logo"><Link to={ROUTES.HOME}>The Logo</Link></div>
      <div className="spacer"> </div>
      <div className="toolbar_navigation-items">
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
        </ul>
      </div>

    </nav>
  </header>
);


export default toolbar
