import React, { useState } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';

import Button from '../../../style/FormUI/Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ShoppingCart = ({count}) => {
    return(
        <Button> 
            <FontAwesomeIcon icon = {faShoppingCart} color = "white"/> &nbsp; | &nbsp; {count} ITEMS 
        </Button>
    )
}


export default ShoppingCart
  