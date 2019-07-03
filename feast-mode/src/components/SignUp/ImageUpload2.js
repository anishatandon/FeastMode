import React, { Component } from 'react';
import {storage} from '../Firebase/firebase';

class ImageUpload2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: ''
        }
    }

    handleImageChange = (event) => {
        const image = event.target.files[0];
        const formData = new FormData();
        formData.append('image', image, image.name);
        this.props.uploadImage(formData);
    }

    handleEditPicture = () => {
        const fileInput = document.getElementById('imageInput');
        fileInput.click();
    }

    render() {
        return (
            <div>
                <input type="file" id="imageInput" onChange={this.handleImageChange} hidden="hidden"/>
                <button onClick={this.handleEditPicture}>HELLO</button>
            </div>
        )
    }
}

export default ImageUpload2
