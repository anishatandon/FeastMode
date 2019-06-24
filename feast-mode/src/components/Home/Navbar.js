import React from 'react'
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar.js'

function Navbar() {
    return(
        <div className = "navbar">
            <ul>
                <li> 
                    <Link to = {ROUTES.MENU} >
                        <button> Menu </button>
                    </Link>
                </li>
                <li style = {{float: "right"}}> 
                    <SearchBar />
                </li>
            </ul>
        </div>
    )
}

export default Navbar