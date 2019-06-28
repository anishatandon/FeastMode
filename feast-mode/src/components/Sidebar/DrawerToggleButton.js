import React from 'react';

import './DrawerToggleButton.css';

const drawerToggleButton = props => (
  <button className="toggle-button" onClick={props.click}>
    <div className="toggle_button__line"></div>
    <div className="toggle_button__line"></div>
    <div className="toggle_button__line"></div>
  </button>
);

export default drawerToggleButton;
