import React, {Component} from 'react'
import food from './images/food.jpg'

class AppWindow extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        console.log(this.props.name)
        return (
            <div className = "app_window">
                <img src = {this.props.logo} className = "logo" alt = {this.props.name}/>
                <span> {this.props.name} </span>
                <hr />
                <iframe name="Framename" src="http://allwebco-templates.com/support/S_script_IFrame.htm" width="550" height="550" frameborder="0" scrolling="yes" style={{ width: "100%" }}> </iframe> 
            </div>
        )
    }
}

export default AppWindow