import React from 'react'
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import postmates from '../../images/postmates.jpg'
import doordash from '../../images/doordash.jpg'
import grubhub from '../../images/grubhub.png'
import ubereats from '../../images/ubereats.jpeg'

import Heading from '../../style/FormUI/Heading'

const StyledAppWindow = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

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

const AppWindow = ({ name }) => {
    let source
    let appName

    if (name === "postmates") {source = postmates; appName = "Postmates"}
    else if (name === "doordash") {source = doordash; appName = "DoorDash"}
    else if (name === "grubhub") {source = grubhub; appName = "GrubHub"}
    else if (name === "ubereats") {source = ubereats; appName = "UberEats"}

    return (
        <StyledAppWindow>
            <ImgWrapper><Img src = {source} alt = {name}  /></ImgWrapper>
            <Heading noMargin size = "h2">{ appName }</Heading>
        </StyledAppWindow>
    )
}

export default AppWindow
