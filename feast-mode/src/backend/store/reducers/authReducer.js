import * as actions from '../actions/actionTypes.js'

const initialState = {
    error: null,
    loading: false,
    verifyEmail: {
        error: null,
        loading: false,
    }
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case actions.CLEAN_UP:
            return { 
                ...state,
                error: null,
                loading: false,
                verifyEmail: {...state.verifyEmail, loading: false, error: null}
            }
        
        case actions.AUTH_START:
            return { ...state, loading: true }

        case actions.AUTH_END:
            return { ...state, loading: false }

        case actions.AUTH_FAIL:
            return { ...state, error: payload }

        case actions.AUTH_SUCCESS:
            return { ...state, error: false }
        
        case actions.VERIFY_START:
            return { 
                ...state, 
                verifyEmail: { ...state.verifyEmail, loading: true }
            }

        case actions.VERIFY_SUCCESS:
            return { 
                ...state, 
                verifyEmail: { ...state.verifyEmail, error: false, loading: false }
            }
        
        case actions.VERIFY_FAIL:
            return { 
                ...state, 
                verifyEmail: { ...state.verifyEmail, error: payload, loading: false }
            }

        default:
            return state
    }
}