import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import AppWindow from './AppWindow.js'
import Heading from '../../style/FormUI/Heading.js'
import Carousel from './Carousel/Carousel.js'

const Item = styled.div`
  background: darkorange;
  text-align: center;
  padding: 50px;
  color: white;
`

const Home = ({ firebase, apps }) => {
  if (!firebase.profile.isLoaded) return null

  const userApps = Object.keys(apps).filter(app => apps[app])
  const appWindows = userApps.map(app => <Item><AppWindow name = {app} /></Item>)
   
  return (
    <>
    <Heading size = "h1"> Pick your App </Heading>
    <Carousel>{ appWindows }</Carousel>
    </>
  )
}

const mapStateToProps = ({ firebase }) => ({
  firebase,
  apps: firebase.profile.apps
})

export default connect(mapStateToProps)(Home)