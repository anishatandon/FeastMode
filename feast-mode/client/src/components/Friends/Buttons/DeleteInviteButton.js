import React from 'react';
import * as actions from '../../../backend/store/actions'
import { connect } from 'react-redux';


const DeleteInviteButton = ({friend, deleteInvite, cleanUp, error, loading}) => {
    const onClick = () => {
        deleteInvite(friend);
    }

    return(
        <div className="delete-invite">
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
    deleteInvite: actions.deleteInvite,
    cleanUp: actions.clean,
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteInviteButton)





