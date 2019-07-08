import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

const Li = styled.li`
  display: flex;
  height: 100%;
`
const StyledNavLink = styled(NavLink)`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  border-bottom: 2px solid transparent;
  font-size: 1.35rem;
  padding: 0 1rem;
  margin: 0 1rem;
  font-weight: 400;
  color: var(--color-title);
  transition: all 0.2s;

  &:hover {
    border-bottom: 2px solid var(--color-title);
  }
`

const NavItem = ({ link, children }) => {
  return (
    <Li>
      <StyledNavLink to={link}>{ children }</StyledNavLink>
    </Li>
  )
}

export default NavItem