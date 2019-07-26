import React, { useState } from 'react'
import styled from 'styled-components'

import ImageUpload from "./ProfileEdit/ImageUpload.js"
import Heading from '../../style/FormUI/Heading.js'

const FixedWrapper = styled.header`
    position: sticky;
    z-index: 10;
    top: 8rem;
    width: 100%;
    height: 14rem
    display: flex;
    justify-content: center;
    border-bottom: 2px solid var(--color-border);
    background-color: var(--color-white);
    margin-bottom: 3rem;
`
const Container = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
`
const Ul = styled.ul`
    display: flex;
    align-items: flex-end;
    height: 100%;
    width: 40%;
`
const Li = styled.li`
    position: relative;
    bottom: -2px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 0.8px;
    color: var(--color-title);
    padding: 0rem 2rem;
    margin-right: 5rem;
    transition: all 0.2s;
    border-bottom: ${({ open }) => open ? "2px solid var(--color-title)" : "2px solid transparent"};

    :hover {
        border-bottom: 2px solid var(--color-title);
    }
`

const ProfileNavbar = ({ display }) => {
    const [open, setOpen] = useState([true, false, false])

    const handleClick = index => {
        let state = [false, false, false]
        state[index] = true
        setOpen(state)
        display(index)
    }

    return (
        <FixedWrapper>
            <Container>
                <Ul>
                    
                    <Li onClick = {() => handleClick(0)} open = {open[0]}> <Heading noMargin bold size="h2"> Orders </Heading> </Li>
                    <Li onClick = {() => handleClick(1)} open = {open[1]}> <Heading noMargin bold size="h2"> Friends </Heading> </Li>
                    <Li onClick = {() => handleClick(2)} open = {open[2]}> <Heading noMargin bold size="h2"> Account </Heading> </Li>
                    
                </Ul>
                <ImageUpload />
            </Container>
        </FixedWrapper>
    )
}

export default ProfileNavbar