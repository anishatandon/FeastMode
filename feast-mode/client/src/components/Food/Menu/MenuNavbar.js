import React from 'react'
import styled from 'styled-components'

import InviteFriends from '../Invite/index.js';
import ShoppingCart from './ShoppingCart.js';

const FixedWrapper = styled.header`
    position: sticky;
    z-index: 10;
    top: 8rem;
    width: 100%;
    height: 7rem;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid var(--color-border);
    background-color: var(--color-white);
    margin-bottom: 3rem;
`
const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 60%;
`
const Li = styled.li`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--color-title);
    text-transform: uppercase;
`

const MenuNavbar = ({amount, name, price, quantity}) => {
    return(
        <FixedWrapper>
            <Ul>
                
                {/* <Li> Searchbar </Li> */}
                <Li><InviteFriends/></Li>
                <Li> Deliver to: &nbsp; 524 E Foothill Blvd </Li>
                <Li>
                    <ShoppingCart amount={amount} name={name} price={price} quantity={quantity}/>
                </Li>
                
            </Ul>
        </FixedWrapper>
    )
}

export default MenuNavbar