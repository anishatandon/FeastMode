import React from 'react'
import profile from './profile.png'

function Profile() {
    return (
        <div>
            <img src = {profile} alt = "Profile icon" />
            <div className = "info" >
                <p> <b> Username: </b> feast_mode </p>
                <p> <b> Some other info: </b> A really cool app you should get </p>
            </div>
            <div className = "clearfix"></div>
        </div> 
    )
}

export default Profile