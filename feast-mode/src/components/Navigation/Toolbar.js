import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';

import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const Toolbar = props => (
  <div>

    <header className="toolbar">
      <nav className="toolbar_navigation">

        <AuthUserContext.Consumer>
          {authUser =>
            authUser ?
              <div className="toolbar_navigation">
                <div className="toolbar__toggle-button">
                  <DrawerToggleButton click={props.drawerClickHandler} />
                </div>
                <div className="toolbar__logo"><Link to={ROUTES.HOME}>The Logo</Link></div>
              </div>
             :
             <div className="toolbar__logo"><Link to={ROUTES.LANDING}>The Logo</Link></div>
          }
        </AuthUserContext.Consumer>


        <div className="spacer"> </div>
        <div className="toolbar_navigation-items">
        <AuthUserContext.Consumer>
          {authUser =>
            authUser ? <ToolbarAuth /> : <div />
          }
        </AuthUserContext.Consumer>
        </div>

          <AuthUserContext.Consumer>
            {authUser =>
              authUser ? <div /> :
              <div className="toolbar_navigation-about">
                <ul>
                  <li>
                    <Link to={ROUTES.ABOUT}>About</Link>
                  </li>
                </ul>
              </div>
            }
          </AuthUserContext.Consumer>



      </nav>
    </header>
  </div>
);



const ToolbarAuth = () => (
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
    <li>
      <Link to={ROUTES.APPS_YOU_HAVE}>Apps you have</Link>
    </li>
    <li>
      <Link to={ROUTES.PAY}>Payment</Link>
    </li>
    <li>
      <Link to={ROUTES.ABOUT}>About</Link>
    </li>
  </ul>
);








export default Toolbar
