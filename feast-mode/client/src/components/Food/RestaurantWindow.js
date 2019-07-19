import React from 'react'
import * as ROUTES from '../../constants/routes'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import dominos from '../../images/dominos.png'
import pokeDot from '../../images/Poke_Dot.jpg'
import starbucks from '../../images/Starbucks.png'

import Heading from '../../style/FormUI/Heading'
import Button from '../../style/FormUI/Buttons'

const StyledAppWindow = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 50px;

    > * {
        padding: 2rem;
    }
`
const ImgWrapper = styled.div`
    width: 50rem;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
`

const AppWindow = ({ name, index }) => {
    let source = [dominos, pokeDot, starbucks]
    let appName = ["Domino's", "Poke Dot", "Starbucks"]

    return (
        <StyledAppWindow>
            <ImgWrapper><Img src = {source[index]} alt = {name}  /></ImgWrapper>
            <div>
                <Heading noMargin size = "h2">{ appName[index] }</Heading>
                <NavLink to = {ROUTES.MENU}><Button> Order Now! </Button></NavLink>
            </div>
        </StyledAppWindow>
    )
}

export default AppWindow
