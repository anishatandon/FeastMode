import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

class ImageUpload extends Component {
    state = {
        avatar: "",
        isUploading: false,
        avatarURL: ""
    };

    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, isUploading: false });
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ avatarURL: url }));
            
        // Get current username
        var user = firebase.auth().currentUser;

        
    };

    render() {
        return (
            <div>
                <form>
                    <label >Avatar:</label>
                    {this.state.avatarURL && <img src={this.state.avatarURL} />}
                    <FileUploader
                        accept="image/*"
                        name="avatar"
                        randomizeFilename
                        storageRef={firebase.storage().ref("images")}
                        // onUploadStart={this.handleUploadStart}
                        // onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                    />
                </form>
            </div>
        );
    }
}

export default ImageUpload;