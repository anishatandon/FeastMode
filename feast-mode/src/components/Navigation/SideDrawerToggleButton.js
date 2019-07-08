import React from 'react';
import styled from 'styled-components'

const SDTBWrapper = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  height: 50%;
  width: 3rem;
  background: transparent;
  border: none;

  @media ${props => props.theme.mediaQueries.small} {
    display: flex;
  }
`
const LineWrapper = styled.div`
  width: 3rem;
  height: 2px;
  background: var(--color-title);
`

const SideDrawerToggleButton = ({ click }) => {
  return (
    <SDTBWrapper onClick = {click}>
      <LineWrapper> <div className = "toggle_button__line"></div> </LineWrapper>
      <LineWrapper> <div className = "toggle_button__line"></div> </LineWrapper>
      <LineWrapper> <div className = "toggle_button__line"></div> </LineWrapper>
    </SDTBWrapper>
  )
}

export default SideDrawerToggleButton