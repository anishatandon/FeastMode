import React, { Component, useEffect, useState } from 'react'
import { connect } from 'react-redux'
// import { Formik, Field } from 'formik'
import FileUploader from "react-firebase-file-uploader";

import * as actions from '../../../backend/store/actions'
import firebase from "../../../backend/Firebase/Firebase";
import { storage } from 'firebase';
import Button from '../../../style/FormUI/Buttons.js'
import defaultImage from '../../../images/user.png'
import styled from 'styled-components'

// import editProfilePicture from '../../../backend/store/actions/authActions.js'

const StyledImage = styled.img`
    border-radius: 50%; 
    align-items: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 25rem;
    height: 25rem;
    object-fit: cover;
`

const ImageUpload = ({user, updateImageUrl, profile, cleanUp, error, loading}) => {
    
    if( !profile || !profile.imageUrl){
        return null
    }

    let state = {
        avatar: "",
        avatarURL: profile.imageUrl,
        updateImageUrl: updateImageUrl,
    };

    const handleUploadSuccess = filename => {
        state.avatar = filename;
        storage()
            .ref("images/")
            .child(filename)
            .getDownloadURL()
            .then( url => {
                console.log(url)
                state.avatarURL = url
                updateImageUrl(state.avatarURL)
            }
         );
        
    }

    return(
        <div>
            <form>
                <label>
                    {state.avatarURL && <StyledImage src={state.avatarURL}/>}
                    <FileUploader
                    hidden
                    accept="image/*"
                    name="avatar"
                    randomizeFilename
                    storageRef={storage().ref("images")}
                    onUploadSuccess={handleUploadSuccess}
                />
                </label>
            </form>
        </div>
    )
}


const mapStateToProps = ({ auth, firebase }) => ({
    profile: firebase.profile,
    loading: auth.loading,
    error: auth.error,
})

const mapDispatchToProps = {
    updateImageUrl: actions.updateImageUrl,
    cleanUp: actions.clean,
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);
