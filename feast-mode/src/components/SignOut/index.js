import { useEffect } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../backend/store/actions'

const SignOut = ({ logout }) => {
  useEffect(() => {
    logout();
  }, [logout])
  return null
}

const mapDispatchToProps = {
  logout: actions.signOut
}

export default connect(null, mapDispatchToProps)(SignOut)