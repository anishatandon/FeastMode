import React, { Component } from 'react'
import firebase from '../../backend/Firebase/Firebase.js'

import AppWindow from './AppWindow.js'
import postmates from '../../images/postmates.jpg'
import doordash from '../../images/doordash.jpg'
import grubhub from '../../images/grubhub.png'
import ubereats from '../../images/ubereats.jpeg'

class Home extends Component {
  render() {
    return (
      <div className = "home">
        <h1 className = "home-title"> Pick your App </h1>
        <p></p>
        
      </div>
    )
  }
}

export default Home