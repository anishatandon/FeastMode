import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Li = styled.li`
  display: flex;
  height: 40%;
`
const StyledNavLink = styled(NavLink)`
  display: flex;
  text-transform: uppercase;
  align-items: center;
  border-bottom: ${props =>
    props.mobile ? '1px solid transparent' : '2px solid transparent'};
  font-size: 1.4rem;
  padding: ${props => (props.mobile ? '.5rem 1rem' : '1rem')};
  margin: ${props => (props.mobile ? '2rem 0' : '0 1rem')};
  font-weight: 700;
  color: var(--color-title);
  transition: all 0.2s;

  :hover {
    border-bottom: ${props =>
      props.mobile
        ? '1px solid var(--color-white)'
        : '2px solid var(--color-main)'};
  }

  &.active {
    border-bottom: ${props =>
      props.mobile
        ? '1px solid var(--color-white)'
        : '2px solid var(--color-main)'};
  }
`

const NavItem = ({ link, children, clicked, mobile }) => {
  return (
    <Li>
      <StyledNavLink onClick = {clicked} exact activeClassName = "active" mobile = {mobile} to = {link}>
        {children}
      </StyledNavLink>
    </Li>
  )
}

export default NavItem