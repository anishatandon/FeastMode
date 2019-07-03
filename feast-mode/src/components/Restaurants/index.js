import React from 'react'

import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

function Restaurants() {
  return (
    <div className = "restaurants">
      <h1 className = "restaurants_title"> Pick your Food </h1>
      <br />
      {/* for now, we can have a button that links to friends, really this should happen after you pick a restaurant */}
      <Link to={ROUTES.FRIENDS}><button type="submit" className = "classic-button"> Pick your Friends </button></Link>
    </div>
  )
}

export default Restaurants
