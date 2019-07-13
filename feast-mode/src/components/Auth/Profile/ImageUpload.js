import React, { Component, useEffect, useState } from 'react'
// import { connect } from 'react-redux'
// import { Formik, Field } from 'formik'
// import * as actions from '../../../../backend/store/actions'

import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
// import * as actions from '../../../../backend/store/actions'
// import editProfilePicture from '../../../backend/store/actions/authActions.js'


class ImageUpload extends Component {
    state = {
        avatar: "",
        avatarURL: ""
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
                    <label >Profile Picture:</label>
                    {this.state.avatarURL && <img src={this.state.avatarURL} />}
                    <FileUploader
                        accept="image/*"
                        name="avatar"
                        randomizeFilename
                        storageRef={firebase.storage().ref("images")}
                        onUploadSuccess={this.handleUploadSuccess}
                    />
                </form>
            </div>
        );
    }
}


// class ImageUpload2 extends Component {
//     state = {
//         avatar: "",
//         avatarURL: ""
//     };

//     handleUploadSuccess = filename => {
//         this.setState({ avatar: filename});
//         firebase
//             .storage()
//             .ref("images")
//             .child(filename)
//             .getDownloadURL()
//             .then(url => this.setState({ avatarURL: url }));
//     };

//     handleSubmit = () => {async (values, { resetForm, setSubmitting }) => {
//         await editProfilePicture(values)
//         resetForm()
//         setSubmitting(false)
//     }}

//     render() {
//         return (
//             <div>
//                 <form>
//                     <label >Profile Picture:</label>
//                     {this.state.avatarURL && <img src={this.state.avatarURL} />}
//                     <FileUploader
//                         accept="image/*"
//                         name="avatar"
//                         randomizeFilename
//                         storageRef={firebase.storage().ref("images")}
//                         onUploadSuccess={this.handleUploadSuccess}
//                     />
//                     <button onSubmit={this.handleSubmit}>Upload all the things</button>
//                 </form>
//             </div>
//         );
//     }
// }
// const mapStateToProps = ({ firebase, auth }) => ({
//     firebase,
//     loading: auth.profileEdit.loading,
//     error: auth.profileEdit.error
// })
// const mapDispatchToProps = {
//     editProfilePicture: actions.editProfilePicture,
//     cleanUp: actions.clean,
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload)
export default ImageUpload;