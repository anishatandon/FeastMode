import React from 'react'
import styled from 'styled-components'

const ItemWrapper = styled.div`
    display: flex;
    align-items: flex;
    justify-content: center;
    width: 100%;
    padding: 5rem;
`
const Img = styled.img`
    width: 4rem;
`

const MenuItem = ({ name, picture, description }) => {
    return (
        <ItemWrapper>
            <Img src = {picture} alt = {name}/>
            {name}
            <p>{description}</p>
        </ItemWrapper> 
    )
}

export default MenuItem