
import React from 'react';

function Thumbnail(props) {
    function handleClick() {
        props.onThumbnailClick(props.item);
    }

    return (
        <a>
            <img className={props.className}
                src={props.item.src}
                onClick={handleClick}
                style={{ height: props.height }}/>
        </a>
    );
}
  
export default Thumbnail;
  