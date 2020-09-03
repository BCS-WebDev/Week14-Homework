
import React from 'react';

function ChampionCard(props) {
    return (
        <div className="col-4">
            <img src={props.src} style={{ height: 400 }}/>
            <h5 className="" style={{ color:"darkgoldenrod" }}>{props.name}</h5>
        </div>
   );
}

export default ChampionCard;