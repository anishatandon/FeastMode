import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

const SignUpLink = () => (
    <pre className = "link-text">
      New to FeastMode?   <Link to={ROUTES.SIGN_UP} className = "link">Sign Up</Link>
    </pre>
)

export default SignUpLink