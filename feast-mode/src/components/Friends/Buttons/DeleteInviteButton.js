import React, { useState } from 'react';
import * as actions from '../../../backend/store/actions'
import { connect } from 'react-redux';


const DeleteInviteButton = ({friend, sendInvite, cleanUp, error, loading}) => {
    const onClick = () => {
        sendInvite(friend);
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
    sendInvite: actions.sendInvite,
    cleanUp: actions.clean,
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteInviteButton)





