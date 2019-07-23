import React, { useState } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';

import Modal from '../../Modal/Modal'
import Friend from '../../Friends/Friend.js'
import Button from '../../../style/FormUI/Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../../Auth/Profile/ProfileEdit/Dropdown';




const ShoppingCart = ({amount, name, price, quantity}) => {
  
    return(
        <>
        <Dropdown title = "Items"> 
            <p>{name}, ${price} ({quantity+1})</p>
            <FontAwesomeIcon icon = {faDollarSign} color = "orange"/> &nbsp; | &nbsp; TOTAL COST: ${price*(quantity+1)}
            <FontAwesomeIcon icon = {faShoppingCart} color = "orange"/> &nbsp; | &nbsp; {amount} ITEMS 
        </Dropdown > 
      </>
    )
}

export default ShoppingCart