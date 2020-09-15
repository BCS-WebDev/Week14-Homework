
import React from 'react';

const bgStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.725) 0%,rgba(0,0,0,0.725) 100%), url('${props.champion.src}')`,
    backgroundSize: '88%', 
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '450'
};

function ChampionCard(props) {
    const cardstate = {
        isClicked: true
    };

    function championInfo() {
        if (cardstate.isClicked) {
            cardstate.isClicked === false;
        } else {
            cardstate.isClicked === true;
        }
    }

    return (
        <div className="col-4">
            {cardstate.isClicked
                ? <img src={props.champion.src} onClick={championInfo} style={{ height: 450 }}/>
                : <div className="col-4">
                    <div style={ bgStyle }>
                        <div style={{ height: 450, color:"darkgoldenrod" }}>
                            <br/><br/>
                            <h5>{ `${props.champion.traits[0]} ${props.champion.traits[1]}` }</h5>
                            <br/><br/><br/>
                            <p className="mx-sm-5">{ props.champion.description }</p>
                            <br/><br/>
                            <p>{ `Cost: ${props.champion.cost}g` }</p>
                        </div>
                    </div>
                    <h5 className="" style={{ color:"darkgoldenrod" }}>{props.champion.name}</h5>
                </div>
            }
            <h5 className="" style={{ color:"darkgoldenrod" }}>{props.champion.name}</h5>
        </div>
   );
}

export default ChampionCard;