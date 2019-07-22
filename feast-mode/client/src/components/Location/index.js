import React from 'react'
import MapContainer from './MapContainer.js'
import Button from '../../style/FormUI/Buttons'

const DisplayMap = () => {
    return(
        <>
        <h2>Where do you want to delver to?</h2>
        <div>Search bar here</div>
        <Button> Current Location </Button>
        <MapContainer />
        </>
    )
}

export default DisplayMap