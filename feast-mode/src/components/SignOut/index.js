import { useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../backend/store/actions'

const SignOut = ({ logout, close }) => {
  useEffect(() => {
    logout();
    close()
  }, [logout])
  return null
}

const mapDispatchToProps = {
  logout: actions.signOut,
  close: actions.closeSideDrawer
}

export default connect(null, mapDispatchToProps)(SignOut)