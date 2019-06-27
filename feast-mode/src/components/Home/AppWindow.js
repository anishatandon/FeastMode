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
        console.log(this.props.name)
        return (
            <Link to = {ROUTES.RESTAURANTS}>
                <div className = "app_window">
                    <img src = {this.props.logo} className = "logo" alt = {this.props.name}/>
                    <span> {this.props.name} </span>
                    <hr />
                    <img src = {food} alt = "food" style = {{ width: "100%" }}/> 
                </div>
            </Link>
            
        )
    }
}

export default AppWindow