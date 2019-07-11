import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: ${({ contain }) => (contain ? 'auto' : '100%')};
  outline: none;
  padding: 1.2rem 5rem;
  border-radius: 2rem;
  font-size: 1.3rem;
  color: var(--color-white);
  font-weight: 700;
  background-color: ${({ color }) => {
    if (color === 'red') return 'red'
    else return 'var(--color-main)'
  }};
  margin: 2rem 0 1.5rem 0;
  border: none;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(2px);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-mainLight);
  }
`
const StyledDropdownButton = styled.button`
  font-family: FontAwesome;
  content: '\f107';
  font-size: 28px;
  position: absolute;
  top: 12px;
  right: 20px;
  color: #434B67;
  pointer-events: none;
`

export const DropdownButton = ({ ...rest }) => {
  return (
    <StyledDropdownButton {...rest} />
  )
}

const Button = ({ children, disabled, loading, contain, color, ...rest }) => {
  return (
    <StyledButton color = {color} contain = {contain} disabled = {disabled} {...rest}>
      {loading ? loading : children}
    </StyledButton>
  )
}

export default Button