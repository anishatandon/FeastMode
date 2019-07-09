import React from 'react'

import AppWindow from './AppWindow.js'
import appsData from './appsData.js'

const appWindowComponents = appsData.map(app => <AppWindow key = {app.id} {...app} />)

function Home() {
  return (
    <div>
      <h1 className = "home-title"> Pick your App </h1>
      {appWindowComponents}
    </div>
  )
}

export default Home
