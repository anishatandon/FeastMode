import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

function Success(){
    return(
        <div className="sign-up">
            <h1>Success!</h1>
            <Link to={ROUTES.HOME}><button type="submit" className = "classic-button">Start Feasting</button></Link>
        </div>
    )
}

export default Success