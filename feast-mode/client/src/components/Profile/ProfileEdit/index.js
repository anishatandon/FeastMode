import React from 'react';
import styled from 'styled-components'

import ProfileEditForm from './ProfileEditForm.js'
import { FormWrapper } from '../../../style/FormUI/FormWrappers.js'
import { ProfileDeleteLink } from '../../../style/FormUI/Links.js'

import ImageUpload from "./ImageUpload.js"

const EditProfileWrapper = styled(FormWrapper)`
    max-width: 60rem;
    padding: 6rem 3rem;
`
const Wrapper = styled.div`
    width: 100%;
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProfileEdit = () => {
    return (
        <Wrapper>

            <EditProfileWrapper>
                <ImageUpload /> 
                <ProfileEditForm />
            </EditProfileWrapper>
            <ProfileDeleteLink />
            
        </Wrapper>
    )
}

export default ProfileEdit
