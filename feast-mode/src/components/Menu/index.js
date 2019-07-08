import React from 'react'

import Header from './Header.js'
import ProfileInfo from './ProfileInfo.js'

const Menu = ({ show }) => {
  let menuClasses = 'menu'

  if (show) {
    menuClasses = 'menu open'
  }

  return(
    <div className = {menuClasses}>
      <Header />
      <ProfileInfo />
      <br/>
    </div>
  )
}

export default Menu
