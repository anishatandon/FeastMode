import * as actions from './actionTypes.js'

// Open side drawer action 
export const openSideDrawer = () => ({
    type: actions.OPEN_SIDE_DRAWER,
})

// Close side drawer action 
export const closeSideDrawer = () => ({
    type: actions.CLOSE_SIDE_DRAWER,
})