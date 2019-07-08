import React from 'react'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../../constants/routes'

const LogInLink = () => (
    <pre className = "link-text">
      Already have an account?   <Link to={ROUTES.LANDING} className = "link">Log In</Link>
    </pre>
)
  
export default  LogInLink