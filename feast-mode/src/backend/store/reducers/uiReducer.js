import * as actions from '../actions/actionTypes.js'

const initialState = {
    sideDrawerOpen: false,
}

export default (state = initialState, {type}) => {
    switch (type) {
        case actions.OPEN_SIDE_DRAWER:
            return { ...state, sideDrawerOpen: true }

        case actions.CLOSE_SIDE_DRAWER:
            return { ...state, sideDrawerOpen: false }

        default:
            return state
    }
}