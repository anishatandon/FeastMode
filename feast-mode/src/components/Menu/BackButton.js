import React from 'react'
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

function BackButton() {
    return (
        <Link to = {ROUTES.HOME}> 
            <button> Back </button>
        </Link>
    )
}

export default BackButton