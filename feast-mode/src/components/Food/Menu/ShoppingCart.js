import React, { useState } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';

import Modal from '../../Modal/Modal'
import Friend from '../../Friends/Friend.js'
import Button from '../../../style/FormUI/Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const ShoppingCart = ({count}) => {
    const [isOpened, setisOpened] = useState(false);
    let content = null
        content = (
            <div>
                <h3>Ultimate Pepperoni (2)</h3>
                <h3>Spinach and Feta (1)</h3>
            </div>
                
          )

    return(
        <>
        <Button contain onClick={() => setisOpened(true)}> 
            <FontAwesomeIcon icon = {faShoppingCart} color = "white"/> &nbsp; | &nbsp; {count} ITEMS 
        </Button>
        <Modal opened = {isOpened} close = {() => setisOpened(false)}>
        <div className = "friends-change"> 
          <h1>Your Order</h1>
          {content}
        </div>
        <Button contain onClick = {() => setisOpened(false)}> Place Order </Button >
      </Modal>
      </>
    )
}



const mapStateToProps = ({ firebase, firestore }) => ({
    userId: firebase.auth.uid,
    allFriends: firestore.data.friends,
  })
  
  export default compose(
    connect(mapStateToProps),
    firestoreConnect(props => ["friends/"]),
  )(ShoppingCart)