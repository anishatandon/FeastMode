import React, { Component } from 'react';
import "./SignUp.css";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

function Success(){
    return(
        <div className="sign-up-form">
            <h2>Success!</h2>
            <Link to={ROUTES.HOME}><button type="submit" className = "button-success">Start Feasting</button></Link>
        </div>
    )
}

export default Success