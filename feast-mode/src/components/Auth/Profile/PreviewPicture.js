import React from 'react';

const PreviewPicture = (props) => {
    const { pictureUrl } = props;
    return(
        <img className="img-fluid mb-2 mt-2" src={pictureUrl} />
    );
}

export default PreviewPicture;