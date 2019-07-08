import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

const ProfileDeleteLink = () => (
    <pre className = "link-text">
      No longer want FeastMode?   <Link to={ROUTES.HOME} className = "link">Delete Profile</Link>
    </pre>
)

export default ProfileDeleteLink