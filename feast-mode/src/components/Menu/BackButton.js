import React from 'react'
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';
import "./Menu.css";

function BackButton() {
    return (
        <Link to = {ROUTES.HOME}> 
            <button className="button"> Back </button>
        </Link>
    )
}

export default BackButton