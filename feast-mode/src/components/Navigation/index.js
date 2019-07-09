import React from 'react'
import styled from 'styled-components'

import NavItems from './NavItems.js'

const FixedWrapper = styled.header`
    position: fixed;
    background-color: var(--color-white);
    padding: 0rem 2rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 8rem;

    @media ${props => props.theme.mediaQueries.small} {
        display: none;
    }
`
const Container = styled.div`
    width: 100%;
    max-width: 140rem;
    margin: 0 auto;
    height: 100%;
`
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
`

const Navbar = () => {
    return(
        <FixedWrapper>
            <Container>
                <Wrapper>
                    <NavItems/>
                </Wrapper>
            </Container>
        </FixedWrapper>
    )
}

export default Navbar