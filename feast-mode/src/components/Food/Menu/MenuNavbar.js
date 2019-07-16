import React, { useState } from 'react'
import styled from 'styled-components'

import MenuNavItem from './MenuNavItem.js'

const FixedWrapper = styled.header`
    position: relative;
    background-color: var(--color-white);
    width: 100%;
    height: 6rem;
`
const Ul = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const MenuNavbar = () => {
    const [activeFood, setActiveFood] = useState(true)
    const [activeDrink, setActiveDrink] = useState(false)

    const handleFoodClick = () => {
        setActiveFood(true)
        setActiveDrink(false)
        console.log("foodClick")
    }
    
    const handleDrinkClick = () => {
        setActiveDrink(true)
        setActiveFood(false)
        console.log("drinkClick")
    }

    return(
        <FixedWrapper>
            <Ul>
                <MenuNavItem onClick = {handleFoodClick} active = {activeFood}> Food </MenuNavItem>
                <MenuNavItem onClick = {handleDrinkClick} active = {activeDrink}> Drinks </MenuNavItem>
            </Ul>
        </FixedWrapper>
    )
}

export default MenuNavbar