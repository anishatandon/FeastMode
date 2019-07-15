import React from 'react'
import RestaurantWindow from './RestaurantWindow.js'
import Carousel from '../Home/Carousel/Carousel.js'
import Heading from '../../style/FormUI/Heading'

const PickFood = () => {
    const featured = ["dominos"]
    const featuredRestaurants = featured.map(app => <RestaurantWindow name = {app} />)

    return <Carousel>{ featuredRestaurants }</Carousel>
}

export default PickFood