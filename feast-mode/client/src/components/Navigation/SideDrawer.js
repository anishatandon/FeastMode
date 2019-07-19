import React, { useState }  from 'react'
import styled from 'styled-components'

import SideDrawerToggleButton from './SideDrawerToggleButton.js'
import NavItems from './NavItems.js'

const FixedWrapper = styled.header`
  position: fixed;
  z-index: 3;
  background-color: ${({ path }) => path == "/profile_edit" ? 'var(--color-background)' : 'var(--color-white)'};
  padding: 0rem 2rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 8rem;
  display: none;

  @media ${props => props.theme.mediaQueries.small} {
    display: flex;
  }
`
const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
const Menu = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8rem;
  height: 100vh;
  background-color: var(--color-main);
  visibility: ${props => (props.opened ? 'visibile' : 'hidden')};
  transform: translateY(${props => (props.opened ? '0%' : '-100%')});
  transition: all 0.1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  display: none;

  @media ${props => props.theme.mediaQueries.small} {
    display: flex;
  }
`

const SideDrawer = ({ path }) => {
  const [isOpened, setIsOpened] = useState(false)
  return (
    <>
      <FixedWrapper path = {path}>
        <Wrapper>
          <SideDrawerToggleButton opened = {isOpened} clicked = {() => setIsOpened(!isOpened)} />
        </Wrapper>
      </FixedWrapper>

      <Menu opened = {isOpened}>
        <NavItems mobile clicked = {() => setIsOpened(false)}/>
      </Menu>
    </>
  )
}

export default SideDrawer;
