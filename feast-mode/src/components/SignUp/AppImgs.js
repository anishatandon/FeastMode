import React from 'react';

import postmates from '../../images/postmates.jpg';
import doordash from '../../images/doordash.jpg';
import grubhub from '../../images/grubhub.png';
import ubereats from '../../images/ubereats.jpeg';

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
