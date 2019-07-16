import React from 'react'
import styled from 'styled-components'

import { FormWrapper } from '../../../style/FormUI/FormWrappers.js'
import Heading from '../../../style/FormUI/Heading.js'

const ItemWrapper = styled(FormWrapper)`
    box-shadow: none;
    padding: 0rem;
    margin: 0rem;
    max-width: 1000rem;
    flex-direction: row;
    justify-content: space-between;
`
const Info = styled.div`
    padding: 2rem;
    width: 70%;
`
const ImgWrapper = styled.div`
    width: 30%;
    height: 100%;
`
const Img = styled.img`
    width: 100%;
    height: 100%;
`

const MenuItem = ({ name, picture, description, price }) => {
    return (
        <ItemWrapper>
            <Info>
                <Heading noMargin left bold size = "h3"> {name} </Heading>
                <Heading noMargin left size = "h4"> {description} </Heading>
                <Heading noMargin left bold size = "h4" color = "main"> {price} </Heading>
            </Info>
            <ImgWrapper><Img src = {picture} alt = {name}/></ImgWrapper>
            
        </ItemWrapper> 
    )
}

export default MenuItem