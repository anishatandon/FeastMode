import React, {Component} from 'react'
import * as ROUTES from '../../constants/routes';
import { Link } from 'react-router-dom';

import food from '../../images/food.jpg'

import styled from 'styled-components'

// STYLE STARTS HERE: Can add these to the UI folder AGHGHGHGH 
const StyledAppWindow = styled.div`
    position: relative;
    background-color: white;
    padding: 30px; /* Padding around content */
    
    margin: 3% 30%; /* Box dimensions */

    /* Shadow effect  */
    border: 1px solid #efefef;
    box-shadow:
        0 1px 5px rgba(0,0,0,0.15),
        0 10px 0 -5px #eee;
`
const FoodImage = styled.img`
    max-width: 100%;
    padding-top: 30px;
    object-fit: contain;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const LogoImage = styled.img`
    max-width: 15%;
    object-fit: contain;
`
const AppText = styled.span`
    font-size: 24px;
`


///// OK STYLE IS OVER

class AppWindow extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <Link to = {ROUTES.RESTAURANTS}>
                <StyledAppWindow>
                    <LogoImage src = {this.props.logo} alt = {this.props.name}/>
                    <AppText> {this.props.name} </AppText>
                    <FoodImage src = {food} alt = "food"/>
                </StyledAppWindow>
            </Link> 

        )
    }
}

export default AppWindow
