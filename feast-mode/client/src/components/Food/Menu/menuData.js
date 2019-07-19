import pepperoni from '../../../images/Pizzas/Pepperoni.jpg'
import spinachFeta from '../../../images/Pizzas/Veggie.jpg'
import pacificVeggie from '../../../images/Pizzas/Mediterranean.jpg'
import extravaganzza from '../../../images/Pizzas/Meat_Lover.jpg'
import mushrooms from '../../../images/Pizzas/Mushrooms.jpg'



import React, { useState } from 'react';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';

import Modal from '../../Modal/Modal'
import Friend from '../../Friends/Friend.js'
import Button from '../../../style/FormUI/Buttons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'

export const menuData = [
    {
        id: 1,
        name: "Ultimate Pepperoni",
        src: pepperoni,
        description: "Pepperoni, Red Sauce, Provolone, and Mozarella",
        price: 7.95,
    },
    {
        id: 2,
        name: "Spinach & Feta",
        src: spinachFeta,
        description: "Feta Cheese, Alfredo Sauce, Diced Tomatoes, and Arugula",
        price: 7.95,
    },
    {
        id: 3,
        name: "Pacific Veggie",
        src: pacificVeggie,
        description: "Feta Cheese, Roasted Red Peppers, Black Olives, and Provolone",
        price: 7.95,
    },
    {
        id: 4,
        name: "Extravaganzza",
        src: extravaganzza,
        description: "Ham, Italian Sausage, Beef, Pepperoni, and Black Olives",
        price: 7.95,
    },
    {
        id: 5,
        name: "Mushrooms",
        src: mushrooms,
        description: "Mushrooms, Bacon, and Provolone ",
        price: 7.95,
    }
]