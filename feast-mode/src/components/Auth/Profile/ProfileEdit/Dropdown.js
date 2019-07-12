import React, { Component } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'

const StyledDropdown = styled.div`
    font-size: 1.7rem;
    border-radius: 1rem;
    margin: 1rem 0rem;
    width: 100%;
    height: ${props => !props.opened && "6rem"};
    transition: background-color 50ms ease-in, height 350ms ease-in;

    main {
        padding: 0rem 2rem;
        max-height: ${props => props.opened ? "100vh" : "0"};
        opacity: ${props => props.opened ? "1" : "0"}
        transition: ${props => props.opened ? "all 350ms ease-in-out" : "all 250ms ease-in-out"};
        display: flex;
        flex-direction: column;
    }

    :hover {
        background-color: ${props => !props.opened && "var(--color-titleLight)"};
    }
`
const TitleArea = styled.div`
    padding: 0rem 2rem;
    border-radius: 1rem;
    margin-bottom: 1rem;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    background-color: ${props => props.opened && "var(--color-titleLight)"};
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
                    {childrenOpen ? <FontAwesomeIcon icon = {faChevronCircleUp}/> : <FontAwesomeIcon icon = {faChevronCircleDown}/>}
                </TitleArea>
                <main>
                    {childrenOpen && children}
                </main> 
                
            </StyledDropdown>
        )
    }
}

export default Dropdown