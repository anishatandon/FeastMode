import React from 'react'
import styled from 'styled-components'

import NavItems from './NavItems.js'

const FixedWrapper = styled.header`
    position: fixed;
    z-index: 2;
    background-color: ${({ path }) => path === "/profile_edit" || path === "/email_verification" ? 'var(--color-background)' : 'var(--color-white)'};
    top: 0;
    left: 0;
    width: 100%;
    height: 8rem;

    @media ${props => props.theme.mediaQueries.small} {
        display: none;
    }
`
const Container = styled.div`
    width: 60%;
    max-width: 180rem;
    margin: 0 auto;
    height: 100%;
`
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    justify-content: flex-end;
`

const Navbar = ({ path }) => {
    return(
        <FixedWrapper path = {path}>
            <Container>
                <Wrapper>
                    <NavItems/>
                </Wrapper>
            </Container>
        </FixedWrapper>
    )
}

export default Navbar