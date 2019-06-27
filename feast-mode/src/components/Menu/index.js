import React from 'react'

import Header from './Header.js'
import Profile from './Profile.js'
import SignOutButton from '../SignOut/index.js'
import ImageUpload from "./ImageUpload.js"

const Menu = () => (
    <div className = "menu">
      <Header />
      <Profile />
      <br/>
      <SignOutButton />

    </div>
  
);

export default Menu