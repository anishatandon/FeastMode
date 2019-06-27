import React from 'react'

import Navbar from './Navbar.js'
import AppWindow from './AppWindow.js'
import appsData from './appsData.js'



const appWindowComponents = appsData.map(app => <AppWindow key = {app.id} {...app} />)

function Home() {
  return (
    <div className = "home">
      <Navbar />
      <h1 className = "home_title"> Pick your App </h1>
      {appWindowComponents}
    </div>
  )
}

export default Home
