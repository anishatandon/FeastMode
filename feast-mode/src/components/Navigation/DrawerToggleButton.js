import React from 'react';

const DrawerToggleButton = props => {
  return (
    <button className = "toggle-button" onClick = {props.click}>
      <div className = "toggle_button__line"></div>
      <div className = "toggle_button__line"></div>
      <div className = "toggle_button__line"></div>
    </button>
  )
  
}

export default DrawerToggleButton

