
import React from 'react';

import none from './images/none.png';

// import astro from '../images/origins/astro.png';
// import battlecast from '../images/origins/battlecast.png';
// import celestial from '../images/origins/celestial.png';
// import chrono from '../images/origins/chrono.png';
// import cybernetic from '../images/origins/cybernetic.png';
// import darkstar from '../images/origins/darkstar.png';
// import mechpilot from '../images/origins/mechpilot.png';
// import rebel from '../images/origins/rebel.png';
// import spacepirate from '../images/origins/spacepirate.png';
// import starguardian from '../images/origins/starguardian.png';

// import blademaster from '../images/traits/blademaster.png';
// import blaster from '../images/traits/blaster.png';
// import brawler from '../images/traits/brawler.png';
// import demolitionist from '../images/traits/demolitionist.png';
// import infiltrator from '../images/traits/infiltrator.png';
// import manareaver from '../images/traits/manareaver.png';
// import mercenary from '../images/traits/mercenary.png';
// import mystic from '../images/traits/mystic.png';
// import paragon from '../images/traits/paragon.png';
// import protector from '../images/traits/protector.png';
// import sniper from '../images/traits/sniper.png';
// import sorcerer from '../images/traits/sorcerer.png';
// import starship from '../images/traits/starship.png';
// import vanguard from '../images/traits/vanguard.png';

import Thumbnail from "../components/ThumbnailItem/ThumbnailItem";

import Champions from "../data/champions";
import Origins from "../data/origins";
import Traits from "../data/traits.json";
import ChampionCard from "../components/ChampionCard";

function Champions() {
    return (
        <div>
            <div className="col-3">
                <div className="row mb-sm-2">
                    <div className="col-12">
                        {
                            Origins.map(origin => <Thumbnail src={origin} onClick={} height={50}/>)
                        }
                        {/* <a href="#">
                            <img src={astro} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={battlecast} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={celestial} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={chrono} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={cybernetic} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={darkstar} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={mechpilot} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={rebel} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={spacepirate} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={starguardian} style={{ height: 50 }}/>
                        </a> */}
                    </div>
                </div>

                <div className="row mb-sm-5">
                    <div className="col-12">
                        <img src={astro} style={{ height: 75 }}/>   {/* use state for src here */}
                        <h6 className="" style={{ color:"darkgoldenrod" }}>Astro</h6>
                    </div>
                </div>

                <div className="row mb-sm-2">
                    <div className="col-12">
                        {
                            Traits.map(trait => <Thumbnail src={trait.src} onClick={} height={50}/>)
                        }
                        {/* <a href="#">
                            <img src={blademaster} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={blaster} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={brawler} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={demolitionist} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={infiltrator} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={manareaver} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={mercenary} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={mystic} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={paragon} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={protector} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={sniper} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={sorcerer} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={starship} style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={vanguard} style={{ height: 50 }}/>
                        </a> */}
                    </div>
                </div>

                <div className="row mb-sm-5">
                    <div className="col-12">
                        <img src={blademaster} style={{ height: 75 }}/>  {/* use state for src here */}
                        <h6 className="" style={{ color:"darkgoldenrod" }}>Blademaster</h6>
                    </div>
                </div>
            </div>

            <div className="col-9">
                <div className="row">
                    {/* use state with data here */}
                    {
                        Champions.filter(champion => <ChampionCard name={champion.name} src={champion.src}/>)
                    }
                    {/* <div className="col-4">
                        <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_14.jpg" style={{ height: 400 }}/>
                        <h5 className="" style={{ color:"darkgoldenrod" }}>Ahri</h5>
                    </div>
                    <div className="col-4">
                        <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_14.jpg" style={{ height: 400 }}/>
                        <h5 className="" style={{ color:"darkgoldenrod" }}>Ahri</h5>
                    </div>
                    <div className="col-4">
                        <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_14.jpg" style={{ height: 400 }}/>
                        <h5 className="" style={{ color:"darkgoldenrod" }}>Ahri</h5>
                    </div> */}
                </div>
            </div>

        </div> 
    );
}
  
export default Champions;
  