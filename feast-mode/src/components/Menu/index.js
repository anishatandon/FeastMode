import React from 'react'

import Header from './Header.js'
import Profile from './Profile.js'

const Menu = props => {
  let menuClasses = 'menu'

  if (props.show) {
    menuClasses = 'menu open'
  }

  return(
    <div className = {menuClasses}>
      <Header />
      <Profile />
      <br/>
    </div>
  )
}

export default Menu
