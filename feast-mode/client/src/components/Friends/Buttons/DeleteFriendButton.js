import React, { useState } from 'react';
import * as actions from '../../../backend/store/actions'
import { connect } from 'react-redux';


const DeleteFriendButton = ({friend, deleteFriend, cleanUp, error, loading}) => {
    const onClick = () => {
        deleteFriend(friend);
    }

    return(
        <div className="">
            <button onClick={onClick}>
                x
            </button>
        </div>
        
    );
};


const mapStateToProps = ({ auth }) => ({
    loading: auth.loading,
    error: auth.error,
})

const mapDispatchToProps = {
    deleteFriend: actions.deleteFriend,
    cleanUp: actions.clean,
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteFriendButton)





