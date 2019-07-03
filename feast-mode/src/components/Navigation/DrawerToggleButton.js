import React from 'react';
import * as actions from '../../backend/store/actions'
import { connect } from 'react-redux'

const DrawerToggleButton = props => {
  return (
    <button className = "toggle-button" onClick = {props.click}>
      <div className = "toggle_button__line"></div>
      <div className = "toggle_button__line"></div>
      <div className = "toggle_button__line"></div>
    </button>
  )
  
}

// const mapDispatchToProps = {
//   open: actions.openSideDrawer
// }

export default DrawerToggleButton
// export default connect(null, mapDispatchToProps)(DrawerToggleButton)
