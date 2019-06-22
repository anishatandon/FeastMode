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
                <img src = {this.props.app.logo} className = "logo" alt = {this.props.app.name}/>
                <span> {this.props.app.name} </span>
                <hr />
                <img src = {food} className = "food" alt = "Food"/>
            </div>
        )
    }
}

export default AppWindow