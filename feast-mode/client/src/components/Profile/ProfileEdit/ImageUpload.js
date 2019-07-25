import React from 'react'
import { connect } from 'react-redux'
import FileUploader from "react-firebase-file-uploader"
import * as actions from '../../../backend/store/actions'
import { storage } from 'firebase'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'

const ImageForm = styled.form`
    margin-bottom: 1rem;
    width: 74%;
    display: flex;
    align-items: center;

    label {
        opacity: 0;
        transition: all 0.3s;
        cursor: pointer
    }

    div {
        opacity: 0;
        transition: all 0.3s;
        cursor: ${props => props.allowDelete && "pointer"};
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
    border-radius: 50%; 
    align-items: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 25rem;
    height: 25rem;
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
                <FontAwesomeIcon icon = {faCloudUploadAlt} size = "4x" color = "#ff870C" />
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
            <div onClick = {handleDelete}> <FontAwesomeIcon icon = {faTrashAlt} size = "4x" color = "#ff870C"/> </div>
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
