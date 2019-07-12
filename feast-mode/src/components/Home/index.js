import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import AppWindow from './AppWindow.js'
import Carousel from './Carousel/Carousel.js'

const Item = styled.div`
  height: 100%;
  text-align: center;
  padding: 50px;
`

const Home = ({ firebase, apps }) => {
  if (!firebase.profile.isLoaded) return null

  console.log(apps)
  const userApps = Object.keys(apps).filter(app => apps[app])
  const appWindows = userApps.map(app => <Item><AppWindow name = {app} /></Item>)
   
  return (
    <>
    <Carousel>{ appWindows }</Carousel>
    </>
  )
}

const mapStateToProps = ({ firebase }) => ({
  firebase,
  apps: firebase.profile.apps
})

export default connect(mapStateToProps)(Home)