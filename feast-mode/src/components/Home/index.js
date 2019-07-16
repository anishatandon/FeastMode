import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import AppWindow from './AppWindow.js'
import Carousel from './Carousel/Carousel.js'

const Home = ({ firebase, apps }) => {

  if (!firebase.profile.isLoaded) return null
  const userApps = Object.keys(apps).filter(app => apps[app])
  const appWindows = userApps.map(app => <AppWindow name = {app} />)
   
  return (
    <>
    <Carousel>{ appWindows }</Carousel>
    {store}
    </>
  )
}

const mapStateToProps = ({ firebase }) => ({
  firebase,
  apps: firebase.profile.apps
})

export default connect(mapStateToProps)(Home)