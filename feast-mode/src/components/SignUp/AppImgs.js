import React from 'react';
import postmates from '../Home/images/postmates.jpg';
import doordash from '../Home/images/doordash.jpg';
import grubhub from '../Home/images/grubhub.png';
import ubereats from '../Home/images/ubereats.jpeg';

function AppImgs() {
    return(
        <div>
            <img src={postmates} className="logo"/>
            {" "}
            <img src={grubhub} className="logo"/>
            {" "}
            <img src={doordash} className="logo"/>
            {" "}
            <img src={ubereats} className="logo"/>
        </div>
    )
}

export default AppImgs