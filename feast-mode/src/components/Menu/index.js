import React from 'react'
import Header from './Header.js'
import Profile from './Profile.js'
import SignOutButton from '../SignOut/index.js'
import './Menu.css'

const Menu = () => (
    <div className = "menu">
      <Header />
      <Profile />
      <SignOutButton />
    </div>
  
);

export default Menu