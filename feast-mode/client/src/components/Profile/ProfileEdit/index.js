import React from 'react';

import ProfileEditForm from './ProfileEditForm.js'
import { ProfileDeleteLink } from '../../../style/FormUI/Links.js'

const ProfileEdit = () => {
    return (
        <>
            <ProfileEditForm />
            <ProfileDeleteLink />
        </>
    )
}

export default ProfileEdit