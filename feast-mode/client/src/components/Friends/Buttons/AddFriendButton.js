import React from 'react';
import * as actions from '../../../backend/store/actions'
import { connect } from 'react-redux';


const AddFriendButton = ({friend, sendInvite, cleanUp, error, loading}) => {
    const onClick = () => {
        sendInvite(friend);
    }

    return(
        <div className="add-friend">
            <button onClick={onClick}>
                +
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

export default connect(mapStateToProps, mapDispatchToProps)(AddFriendButton)





