import { useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../../backend/store/actions'

const LogOut = ({ logout }) => {
  useEffect(() => {
    logout()
  }, [logout])
  return null
}

const mapDispatchToProps = {
  logout: actions.logOut,
}

export default connect(null, mapDispatchToProps)(LogOut)