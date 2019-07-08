import React from 'react'
import Friend from './Friend'

function DisplayFriends() {
  return (
    <div className = "display-friends">
      {/* For every friend in UID's friend group, display*/}
      <Friend user={"friend"}/>
      {/* X next to each friend and when you a pop up asks to confirm before deleting */}
      <button className="delete-friend">Delete</button>
    </div>
  )
}

export default DisplayFriends