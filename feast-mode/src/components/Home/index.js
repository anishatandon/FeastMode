import React, {Component} from 'react'
import './Home.css'
import Navbar from './Navbar.js'
import AppWindow from './AppWindow.js'
import appsData from './appsData.js'

const appWindowComponents = appsData.map(app => <AppWindow key = {app.id} app = {app} />)

class Home extends Component {
  render() {
    return (
      <div className = "home">
        <Navbar history = {this.props.history} />
        <h1 className = "home_title"> Pick your App </h1>
        {appWindowComponents}
      </div>
    )
  }
}

export default Home
