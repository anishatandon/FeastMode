import React from 'react'
import * as ROUTES from '../../constants/routes'
import { Link } from 'react-router-dom'

import food from '../../images/food.jpg'

const AppWindow = ({ name }) => {
    return (
        <>
        <img src = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg" alt = ""  />
        <p>{name}</p>
        </>
    )
}

export default AppWindow
