
import React from 'react';

function ChampionCard(props) {
    // add onHover functions

    return (
        <div className="col-4">
            <img src={props.champion.src} style={{ height: 400 }}/>
            <h5 className="" style={{ color:"darkgoldenrod" }}>{props.champion.name}</h5>
        </div>
   );
}

export default ChampionCard;