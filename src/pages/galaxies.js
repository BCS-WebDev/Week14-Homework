
import React from 'react';

import biglittle from './images/galaxies/BigLittleLegends.png';
import bonanza from './images/galaxies/Bonanza.png';
import freeneekos from './images/galaxies/FreeNeekos.png';
import freererolls from './images/galaxies/FreeRerolls.png';
import midgame from './images/galaxies/MidGameFoN.png';
import smallerboards from './images/galaxies/SmallerBoards.png';
import starteritems from './images/galaxies/StartingItems.png';
import twoitemmax from './images/galaxies/TwoItemMax.png';
import twostarcarousels from './images/galaxies/TwoStarCarousels.png';

import galaxies from './data/galaxies';

<div className="row text-center justify-content-center" style={{ color:"darkgoldenrod" }}>
    <div className="col-3">
        <img src={biglittle} style={{ height: 100 }}/>
        <p>
            {galaxies[0].description}
        </p>
    </div>
    <div className="col-4">
        <img src={bonanza} style={{ height: 100 }}/>
        <p>
            {galaxies[1].description}
        </p>
    </div>
    <div className="col-3">
        <img src={freeneekos} style={{ height: 100 }}/>
        <p>
            {galaxies[2].description}
        </p>
    </div>
    <div className="col-3">
        <img src={freererolls} style={{ height: 100 }}/>
        <p>
            {galaxies[3].description}
        </p>
    </div>
    <div className="col-4">
        <img src={midgame} style={{ height: 100 }}/>
        <p>
            {galaxies[4].description}
        </p>
    </div>
    <div className="col-3">
        <img src={smallerboards} style={{ height: 100 }}/>
        <p>
            {galaxies[5].description}
        </p>
    </div>
    <div className="col-3">
        <img src={starteritems} style={{ height: 100 }}/>
        <p>
            {galaxies[6].description}
        </p>
    </div>
    <div className="col-4">
        <img src={twoitemmax} style={{ height: 100 }}/>
        <p>
            {galaxies[7].description}
        </p>
    </div>
    <div className="col-3">
        <img src={twostarcarousels} style={{ height: 100 }}/>
        <p>
            {galaxies[8].description}
        </p>
    </div>
</div>  