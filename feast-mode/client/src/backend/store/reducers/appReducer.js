import * as actions from '../actions/actionTypes.js';

const initialState = {
    error: null,
    loading: false,
    sendInvite: {
        error: null,
        loading: false,
    },
    acceptInvite: {
        error: null,
        loading: false,
    },
    deleteInvite: {
        error: null,
        loading: false,
    },


}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        
        case actions.SEND_INVITE_START:
            return { ...state,
                sendInvite: { ...state.sendInvite, loading: true }, };

        case actions.SEND_INVITE_FAIL:
            return { ...state,
                sendInvite: { ...state.sendInvite, loading: false, error: payload }, };

        case actions.SEND_INVITE_SUCCESS:
            return { ...state,
                sendInvite: { ...state.sendInvite, loading: false, error: false }, };
        

        case actions.ACCEPT_INVITE_START:
            return { ...state,
                acceptInvite: { ...state.acceptInvite, loading: true }, };

        case actions.ACCEPT_INVITE_FAIL:
            return { ...state,
                acceptInvite: { ...state.acceptInvite, loading: false, error: payload }, };

        case actions.ACCEPT_INVITE_SUCCESS:
            return { ...state,
                acceptInvite: { ...state.acceptInvite, loading: false, error: false }, };


        case actions.DELETE_INVITE_START:
            return { ...state,
                deleteInvite: { ...state.deleteInvite, loading: true }, };

        case actions.DELETE_INVITE_FAIL:
            return { ...state,
                deleteInvite: { ...state.deleteInvite, loading: false, error: payload }, };

        case actions.DELETE_INVITE_SUCCESS:
            return { ...state,
                deleteInvite: { ...state.deleteInvite, loading: false, error: false }, };

                
        case actions.CLEAN_UP:
            return { 
                ...state, 
                error: null, 
                loading: false, 
                sendInvite: {
                    ...state.sendInvite, 
                    loading: false, 
                    error: null,
                },
                acceptInvite: {
                    ...state.acceptInvite, 
                    loading: false, 
                    error: null,
                },
                deleteInvite: {
                    ...state.deleteInvite, 
                    loading: false, 
                    error: null,
                },

            };

        default:
            return state
    }
}
