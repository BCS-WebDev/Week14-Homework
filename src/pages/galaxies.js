
import React from 'react';

import galaxies from '../data/galaxies';
import GalaxyCard from "../components/GalaxyCard/galaxyCard";

function Galaxies(props) {
    return (
        <div className="row text-center justify-content-center" style={{ color:"darkgoldenrod" }}>
            <div className="col-10">
                <div className="row">
                    {
                        galaxies.map(galaxy => <GalaxyCard name={galaxy.name} src={galaxy.src} description={galaxy.description}/>)
                    }
                </div>
            </div>

            {/* <div className="col-3">
                <h6></h6>
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
            </div> */}
        </div>
   );
}

export default Galaxies;