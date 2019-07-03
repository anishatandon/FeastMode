import React from 'react'
import * as actions from '../../backend/store/actions'
import { connect } from 'react-redux'

const Backdrop = props => (
  <div className = "backdrop" onClick = {props.click}/>
)


export default Backdrop
