import React, { Component } from "react";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";

class ImageUpload extends Component {
    state = {
        avatar: "",
        isUploading: false,
        progress: 0,
        avatarURL: ""
    };

    handleProgress = (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({ progress });
    }

    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => this.setState({ avatarURL: url }));
            console.log("hey")
    };

    render() {
        return (
            <div>
                <form>
                    <label>Avatar:</label>
                    <progress value={this.state.progress} max="100"/>
                    {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                    {this.state.avatarURL && <img src={this.state.avatarURL} />}
                    <FileUploader
                        accept="image/*"
                        name="avatar"
                        randomizeFilename
                        storageRef={firebase.storage().ref("images")}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    />
                </form>
            </div>
        );
    }
}

export default ImageUpload;