import React, { Component, useEffect, useState } from 'react'
// import { connect } from 'react-redux'
// import { Formik, Field } from 'formik'
// import * as actions from '../../../../backend/store/actions'

import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import Button from '../../../style/FormUI/Buttons.js'
import user from '../../../images/user.png'
import styled from 'styled-components'
// import * as actions from '../../../../backend/store/actions'
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


class ImageUpload extends Component {
    state = {
        avatar: "",
        avatarURL: user
    };

    handleUploadSuccess = filename => {
        this.setState({ avatar: filename});
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ avatarURL: url }));
    };

    render() {
        return (
            <div>
                <form>
                    <label>
                        {this.state.avatarURL && <StyledImage src={this.state.avatarURL}/>}
                        <FileUploader
                        hidden
                        accept="image/*"
                        name="avatar"
                        randomizeFilename
                        storageRef={firebase.storage().ref("images")}
                        onUploadSuccess={this.handleUploadSuccess}
                    />
                    </label>
                </form>
            </div>
        );
    }
}

export default ImageUpload;