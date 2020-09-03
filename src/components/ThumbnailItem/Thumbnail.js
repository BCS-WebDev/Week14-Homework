
import React from 'react';

function Thumbnail(props) {
    return (
        <a>
            <img className={props.className} src={props.src} onClick={props.onClick} style={{ height: props.height }}/>
        </a>
    );
}
  
export default Thumbnail;
  