import * as actions from '../actions/actionTypes.js'

const initialState = {
    error: null,
    loading: false,

    recoverPassword: {
        error: null,
        loading: false,
    },
    
    verifyEmail: {
        error: null,
        loading: false,
    },

    profileEdit: {
        error: null,
        loading: false,
    },

    pfpEdit: {
        error: null,
        loading: false,
    },

    deleteProfile: {
        error: null,
        loading: false,
    },

    
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        
        case actions.AUTH_START:
            return { ...state, loading: true }

        case actions.AUTH_FAIL:
            return { ...state, error: payload, loading: false }

        case actions.AUTH_SUCCESS:
            return { ...state, error: false, loading: false }


        case actions.RECOVERY_START:
            return{
                ...state,
                recoverPassword: { ...state.recoverPassword, loading: true },
            };
        case actions.RECOVERY_FAIL:
            return{
                ...state,
                recoverPassword: { ...state.recoverPassword, loading: false, error: payload, },
            };
        case actions.RECOVERY_SUCCESS:
            return{
                ...state,
                recoverPassword: { ...state.recoverPassword, loading: false, error: false,  },
            };

        case actions.CLEAN_UP:
            return { 
                ...state, 
                error: null, 
                loading: false, 
                recoverPassword: {
                    ...state.recoverPassword, 
                    loading: false, 
                    error: null,
                },
                verifyEmail: {
                    ...state.verifyEmail, 
                    loading: false, 
                    error: null,
                },
                profileEdit: {
                    ...state.profileEdit, 
                    loading: false, 
                    error: null,
                },
                pfpEdit: {
                    ...state.pfpEdit, 
                    loading: false, 
                    error: null,
                },
                deleteProfile: {
                    ...state.deleteProfile, 
                    loading: false, 
                    error: null,
                },
            } 

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

        case actions.PROFILE_EDIT_START:
            return {
                ...state, 
                profileEdit: { ...state.profileEdit, loading: true, error: null }
            }

        case actions.PROFILE_EDIT_SUCCESS:
            return {
                ...state, 
                profileEdit: { ...state.profileEdit, loading: false, error: false }
        }

        case actions.PROFILE_EDIT_FAIL:
            return {
                ...state, 
                profileEdit: { ...state.profileEdit, loading: false, error: payload }
        }

        case actions.DELETE_PROFILE_START:
                return {
                    ...state, 
                    deleteProfile: { ...state.deleteProfile, loading: true, error: null }
                }
    
            case actions.DELETE_PROFILE_SUCCESS:
                return {
                    ...state, 
                    deleteProfile: { ...state.deleteProfile, loading: false, error: false }
            }
    
            case actions.DELETE_PROFILE_FAIL:
                return {
                    ...state, 
                    deleteProfile: { ...state.deleteProfile, loading: false, error: payload }
            }

        case actions.PFP_EDIT_START:
            return {
                ...state, 
                pfpEdit: { ...state.pfpEdit, loading: true, error: null }
            }

        case actions.PFP_EDIT_SUCCESS:
            return {
                ...state, 
                pfpEdit: { ...state.pfpEdit, loading: false, error: false }
        }

        case actions.PFP_EDIT_FAIL:
            return {
                ...state, 
                pfpEdit: { ...state.pfpEdit, loading: false, error: payload }
        }

        default:
            return state
    }
}