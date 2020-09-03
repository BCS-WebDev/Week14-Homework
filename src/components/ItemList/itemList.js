
import React from 'react';

import Thumbnail from "../ThumbnailItem/Thumbnail";

function ItemList(props) {
    return (
        <li class="list-group-item " style={{ backgroundColor: `rgba(0, 0, 0, 0)`, color:"darkgoldenrod", borderColor: "darkgoldenrod" }}>
            <div className="row">
                <div className="col-1 pt-sm-1">
                    <img src={bfsword} style={{ height: 50 }}/>  {/* use thumbail here*/}
                </div>
                <h3 className="col-1 pt-sm-2">+</h3>
                <div className="col-1 pt-sm-1">
                    <img src={bfsword} style={{ height: 50 }}/>  {/* use thumbail here*/}
                </div>
                <h3 className="col-1 pt-sm-2">=</h3>
                <div className="col-1">
                    <img src={deathblade} style={{ height: 60 }}/>  {/* use thumbail here*/}
                </div>
                <div className="col-7">
                    <p>
                        Contributing to a kill grants the holder +25 Attack Damage for the rest of combat.
                        This effect can stack any number of times (starting at 1.0).
                    </p>
                </div>
            </div>
        </li>
    );
}
  
export default ItemList;
  