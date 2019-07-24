import React from 'react'
import RestaurantWindow from './RestaurantWindow.js'
import Carousel from '../../Home/Carousel/Carousel.js'

const PickFood = () => {
    const featured = [{id: 0, name: "dominos"}, {id: 1, name: "pokeDot"}, {id: 2, name: "starbucks"}]
    const featuredRestaurants = featured.map(app => <RestaurantWindow index = {app.id} name = {app.name} />)
    return <Carousel>{ featuredRestaurants }</Carousel>
}

export default PickFood