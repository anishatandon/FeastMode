import React from 'react'

function Friend() {

  const user = this.props.user;

  return (
    <div className = "friend">
      {/* Get friend ID */}
      Image: 
      {/* {user.image} */}
      Name: 
      {/* {user.first_name + " " + user.last_name} */}
      E-mail: 
      {/* {user.email} */}
      Phone number: 
      {/* {user.phone} */}
    </div>
  )
}

export default Friend