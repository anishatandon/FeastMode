import React from 'react'
import styled from 'styled-components'

import { FormWrapper } from '../../../style/FormUI/FormWrappers'
import MenuNavbar from './MenuNavbar.js'
import MenuItem from './MenuItem.js'
import { menuData } from './menuData.js'

const Wrapper = styled.div`
    width: 100%;
    margin-top: 4rem;
    display: flex;
    justify-content: center;
`
const MenuWrapper = styled(FormWrapper)`
    margin: 0 2rem;
    padding: 0;
    max-width: 40rem;
`

const MenuItems = () => {
    const menu = menuData.map(item => <MenuItem key = {item.id} name = {item.name} picture = {item.src} description = {item.description}/>)

    return (
        <Wrapper>
            <MenuWrapper> 
                <MenuNavbar />
                {menu}
            </MenuWrapper>
            <MenuWrapper> 
                Code goes here 
            </MenuWrapper>
        </Wrapper>
        
    )
}

export default MenuItems