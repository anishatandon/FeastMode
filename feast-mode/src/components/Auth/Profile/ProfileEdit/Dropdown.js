import React, { Component } from 'react'
import styled from 'styled-components'

import { DropdownButton } from '../../../../style/FormUI/Buttons.js'

const StyledDropdown = styled.div`
    font-size: 1.7rem;
    border-radius: 1rem;
    border 1px solid var(--color-border)
    margin: 1rem 0rem;
    width: 100%;
    height: ${props => !props.opened && "7rem"};
    transition: background-color 100ms ease-in, height 550ms ease-in;

    main {
        padding: 0rem 2rem;
        max-height: ${props => props.opened ? "100vh" : "0"};
        opacity: ${props => props.opened ? "1" : "0"}
        transition: ${props => props.opened ? "all 350ms ease-in-out" : "all 250ms ease"};
        display: flex;
        flex-direction: column;
    }

    :hover {
        background-color: ${props => !props.opened && "var(--color-mainLight)"};
    }
`
const TitleArea = styled.div`
    padding: 0rem 1rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    background-color: ${props => props.opened && "var(--color-mainLight)"};
`

class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = { childrenOpen: false }
    }

    toggle = () => {
        this.setState(prevState => ({
            childrenOpen: !prevState.childrenOpen
        }))
    }

    render() {
        const {children, title} = this.props
        const {childrenOpen} = this.state

        return (
            <StyledDropdown opened = {childrenOpen}>
                <TitleArea onClick = {this.toggle} opened = {childrenOpen}>
                    {title}
                    <DropdownButton type = "button" > Dropdown </DropdownButton>
                </TitleArea>
                <main>
                    {childrenOpen && children}
                </main> 
                
            </StyledDropdown>
        )
    }
}

export default Dropdown