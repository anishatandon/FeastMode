import React from 'react'
import { connect } from 'react-redux'
import FileUploader from "react-firebase-file-uploader"
import * as actions from '../../../backend/store/actions'
import { storage } from 'firebase'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

const ImageForm = styled.form`
    display: flex;

    div, label {
        position: relative;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s;
        z-index: 2;
        background-color: var(--color-title);
        border-radius: 50%;
        height: 40px;
        width: 40px;
    }

    label {
        cursor: pointer;
        top: 60%;
        left: 60%;
    }

    div {
        cursor: ${props => props.allowDelete && "pointer"};
        top: 35%;
        right: 10%;
    }

    :hover div, :hover label {
        opacity: 1;
        transform: translateY(-4px);

        &:hover {
            transform: translateY(-5px);
        }
        &:active {
            transform: translateY(2px);
        }
    }

    :hover div {
        opacity: ${props => props.allowDelete ? 1 : 0};
    }
`
const StyledImage = styled.img`
    position: relative;
    z-index: 1;
    border-radius: 50%; 
    align-items: center;
    display: block;
    top: -6rem;
    width: 18rem;
    height: 18rem;
    object-fit: cover;
    transition: all 0.3s;
`

const ImageUpload = ({ updateImageUrl, profile }) => {
    if (!profile.isLoaded) return null

    let state = {
        avatar: "",
        avatarURL: profile.image[0],
        oldAvatar: profile.image[1]
    }
    const allowDelete = state.avatarURL !== "https://firebasestorage.googleapis.com/v0/b/feast-mode.appspot.com/o/images%2Fuser.png?alt=media&token=0465572a-6147-4017-8589-cd9b17e54f04"

    const handleDelete = () => {
        if (allowDelete) {
            storage()
                .ref("images/")
                .child("user.png")
                .getDownloadURL()
                .then(url => { 
                    state.avatarURL = url
                    updateImageUrl(state)
                }
            )
        }
    }

    const handleUploadSuccess = filename => {
        state.avatar = filename
        storage()
            .ref("images/")
            .child(filename)
            .getDownloadURL()
            .then(url => {
                state.avatarURL = url
                updateImageUrl(state)
            }
        )
    }

    return (
        <ImageForm allowDelete = {allowDelete}>
            <label>
                <FontAwesomeIcon icon = {faCloudUploadAlt} size = "2x" color = "white" />
                <FileUploader
                    hidden
                    accept = "image/*"
                    name = "avatar"
                    randomizeFilename
                    storageRef = {storage().ref("images")}
                    onUploadSuccess = {handleUploadSuccess}
                />
            </label>
            {state.avatarURL && <StyledImage src = {state.avatarURL}/>}
            <div onClick = {handleDelete}> <FontAwesomeIcon icon = {faTrashAlt} size = "2x" color = "white"/> </div>
        </ImageForm>
    )
}

const mapStateToProps = ({ firebase }) => ({
    profile: firebase.profile,
})

const mapDispatchToProps = {
    updateImageUrl: actions.updateImageUrl,
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);
