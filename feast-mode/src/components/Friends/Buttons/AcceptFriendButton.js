import React, { useState } from 'react';
import * as actions from '../../../backend/store/actions'
import { connect } from 'react-redux';


const AccepFtriendButton = ({friend, acceptInvite, cleanUp, error, loading}) => {
    const onClick = () => {
        acceptInvite(friend);
    }

    return(
        <div className="">
            <button onClick={onClick}>
            &#10003;
            </button>
        </div>
        
    );
};


const mapStateToProps = ({ auth }) => ({
    loading: auth.loading,
    error: auth.error,
})

const mapDispatchToProps = {
    acceptInvite: actions.acceptInvite,
    cleanUp: actions.clean,
}

export default connect(mapStateToProps, mapDispatchToProps)(AccepFtriendButton)
