
import React from 'react';

function Thumbnail(props) {
    return (
        <a>
            <img className={props.className}
                item={props.item}
                src={props.item.src}
                onClick={props.onClick}
                style={{ height: props.height }}/>
        </a>
    );
}
  
export default Thumbnail;
  