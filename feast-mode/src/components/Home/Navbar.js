import React, {Component} from 'react'

class Navbar extends Component{
    render() {
        return(
            <div className = "navbar">
                <ul>
                    <li> <button> Menu </button></li>
                    <li style = {{float: "right"}}> <button> Look for </button> </li>
                </ul>
            </div>
        )
    }
}

export default Navbar