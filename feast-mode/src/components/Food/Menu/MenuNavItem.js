import React from 'react'
import styled from 'styled-components'

const Li = styled.li`
  display: flex;
  height: 100%;
  width: 50%;
  padding: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const StyledNavItem = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  border-bottom: ${props => props.active ? '2px solid var(--color-main)' : '2px solid var(--color-border)'};
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-title);
  transition: all 0.2s;
`

const MenuNavItem = ({ children, active, onClick }) => {
  return (
    <Li onClick = {onClick}>
      <StyledNavItem active = {active}>
        {children}
      </StyledNavItem>
    </Li>
  )
}

export default MenuNavItem