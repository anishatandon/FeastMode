import React, {Component} from 'react'
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

import food from '../../images/food.jpg'

class AppWindow extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Link to = {ROUTES.RESTAURANTS}>
                <div className = "app_window">
                    <img src = {this.props.logo} className = "logo" alt = {this.props.name}/>
                    <span> {this.props.name} </span>
                    <br />
                    <img src = {food} alt = "food" className="food"/>
                </div>
            </Link> 

        )
    }
}

export default AppWindow
