import React, { useState } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';

import Modal from '../../Modal/Modal'
import Friend from '../../Friends/Friend.js'
import Button from '../../../style/FormUI/Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Dropdown from '../../Auth/Profile/ProfileEdit/Dropdown';


const ShoppingCart = ({amount}) => {
    return(
        <>
        <Dropdown title = "Items"> 
            <h2> pizza </h2>
            <FontAwesomeIcon icon = {faShoppingCart} color = "navy"/> &nbsp; | &nbsp; {amount} ITEMS 
        </Dropdown > 
      </>
    )
}

export default ShoppingCart