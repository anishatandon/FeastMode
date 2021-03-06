import React from 'react'
import { connect } from 'react-redux'

import AppWindow from './AppWindow.js'
import Carousel from './Carousel/Carousel.js'
import DisplayMap from '../Location/index.js'


const Home = ({ firebase, apps }) => {

  if (!firebase.profile.isLoaded) return null
  const userApps = Object.keys(apps).filter(app => apps[app])
  const appWindows = userApps.map(app => <AppWindow key={app} name = {app} />)
   
  return (
    <>
      <DisplayMap />
      <Carousel>{ appWindows }</Carousel>
    </>
  )
  
  
}

const mapStateToProps = ({ firebase }) => ({
  firebase,
  apps: firebase.profile.apps
})

export default connect(mapStateToProps)(Home)