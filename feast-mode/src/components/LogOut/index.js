import { useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../backend/store/actions'

const LogOut = ({ logout, close }) => {
  useEffect(() => {
    logout();
    close()
  }, [logout])
  return null
}

const mapDispatchToProps = {
  logout: actions.logOut,
  close: actions.closeSideDrawer
}

export default connect(null, mapDispatchToProps)(LogOut)