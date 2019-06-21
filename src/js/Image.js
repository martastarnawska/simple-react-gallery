import React from 'react';
import '../scss/Image.scss';

function Image(props) {
    return(
           <img className="Image" src={`http://source.unsplash.com/${props.id}`} alt="image from gallery"></img>
    )

}

export default Image;