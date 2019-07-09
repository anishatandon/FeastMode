import React, { useEffect } from 'react';

const Friend = (props) => {
  console.log(props);
  return(
    <div className="friends">
      <p>Image: </p>

      <p>Image: </p>
      <p>Name: </p>
      <p> E-mail: </p>
      <p>Phone number: </p>

    </div>
  )
}

export default Friend













// import { connect } from 'react-redux';
// import {firestoreConnect} from 'react-redux-firebase';
// import { compose } from 'redux';

// import * as actions from '../../backend/store/actions'

// const Friend = (props) => {
//   const { friend } = props;
//   if( friend ){
//     <div>
//       <div>
//         Friend
//       </div>
//     </div>
//   }

//   else{
//     <div className="">
//       <p>Loading friends...</p>
//     </div>
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   const id = ownProps.match.paarams.id;
//   const friends = state.firestore.data.friends
//   const friend = projects ? projects[id] : null
//   return {
//     project: project
//   }
// }

// export default compose(
//   connect( mapStateToProps ),
//   firestoreConnect( [
//     {collection: 'friends' }
//   ])
// )(Friend);
 


















//   useEffect(() => {
//     return () => {
//     cleanUp()
//     }
//   }, [cleanUp])


//   if (!firebase.profile.isLoaded) return null

//   let displayError
//   if (error) {
//     displayError = {display: "block"}
//   } else {
//     displayError = {display: "none"}
//   }

//   const initialValues = {
//     friends: firebase.profile.friends,
//     friend_requests: firebase.profile.requests,
//     };

//   const friend = this.props.friend;

//   return (
//     <div className = "friends-change">
//       <h1> Friends </h1>


//       <button
//         onClick={async ( initialValues ) => {
//           await acceptInvite(initialValues)
//         }}
//       >
        
//         &#10003;
//       </button>

//       {/* Get friend ID */}
//       Image: 
//       {/* {friend.friends} */}
//       Name: 
//       {/* {user.first_name + " " + user.last_name} */}
//       E-mail: 
//       {/* {user.email} */}
//       Phone number: 
//       {/* {user.phone} */}
//       <button>x</button>

//     </div>
//   )
// }

// const mapStateToProps = ({ firebase, app }) => ({
//   firebase,
//   loading: app.acceptInvite.loading,
//   error: app.acceptInvite.error
// })

// const mapDispatchToProps = {
//   acceptInvite: actions.acceptInvite,
//   cleanUp: actions.clean,
// }


// export default connect(mapStateToProps, mapDispatchToProps)(Friend)