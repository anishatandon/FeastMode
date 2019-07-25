import React from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'

const LogoWrapper = styled.div`
    width: 9rem;
`
const LogoImg = styled.img`
    width: 100%;
    height: 100%;

    -webkit-transition: transform 1s ease;
    -moz-transition: transform 1s ease;
    -ms-transition: transform 1s ease;
    -o-transition: transform 1s ease;
    transition: transform 1s ease;

    &:hover {
        transform: translateX( -1px ) rotateY( 180deg );
        -ms-transform: translateX( -1px ) rotateY(180deg);
        -webkit-transform: translateX( -1px ) rotateY(180deg);
    }
}
`

const Logo = () => {
    return <LogoWrapper> <LogoImg src = {logo}/> </LogoWrapper>
}

export default Logo