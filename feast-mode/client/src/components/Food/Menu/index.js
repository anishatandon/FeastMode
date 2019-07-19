import React, { useState } from 'react'
import styled from 'styled-components'

import MenuNavbar from './MenuNavbar.js'
import MenuItem from './MenuItem.js'
import { App } from '../Dominos.js'
import { menuData } from './menuData.js'
import Header from '../../../images/Dominos_Pizza2.jpg'
import Heading from '../../../style/FormUI/Heading'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column
    align-items: center;
`
const HeaderImg = styled.img`
    position: relative;
    width: 100%;
    height: 30rem;
`
const Content = styled.div`
    position: relative;
    z-index: 1;
    width: 60%;
`
const Title = styled.div`
    border-bottom: 2px solid var(--color-border);
    margin-top: 5rem;
    margin-bottom: 3rem;
`
const PopularWrapper = styled.div`
    display: grid;
    grid-template-columns: 49% 49%;
    grid-auto-rows: 13rem;
    grid-column-gap: 2%;
    grid-row-gap: 5%;
`

const Menu = () => {
    const [amount, setAmount] = useState(0);

    const handleClickAdd = () => {
        setAmount(amount + 1)
    }

    const handleClickMinus = () => {
        if (amount > 0){
        setAmount(amount - 1)
        }
    }

    const getItemInfo = (name) => {
        return(name)
    }

    const menu = menuData.map(item =>
        <MenuItem
            key={item.id} 
            name={item.name} 
            picture={item.src} 
            description={item.description} 
            price={item.price} 
            handleClickAdd={handleClickAdd} 
            handleClickMinus={handleClickMinus} 
            myAmount={item.amount} 
            getItemInfo ={getItemInfo}
            />)

    const [modalOpened, setModalOpened] = useState(false);

    return (
        <Wrapper>
            <HeaderImg src={Header} alt="Dominos" />
            <MenuNavbar amount={amount}/>
            <App />
            <Content>
                <Heading noMargin left bold size="h1"> Domino's Pizza </Heading>
                <Heading left size="h4"> From humble beginnings as a single pizza restaurant in 1960, Domino’s has become today’s
                    recognized world leader in pizza delivery. At Domino’s we’re all about pizza — and from the day our doors opened,
                    we have dedicated ourselves to making and delivering delicious food with high-quality ingredients. </Heading>
                <Title>
                    <Heading noMargin left bold size="h2"> <FontAwesomeIcon icon={faHeart} color="#2C3E50" size="1x" /> &nbsp; Popular </Heading>
                </Title>
                <PopularWrapper>
                    {menu}
                </PopularWrapper>
            </Content>
        </Wrapper>


    )
}

export default Menu