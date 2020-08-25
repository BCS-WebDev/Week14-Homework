import React from 'react';
import './App.css';

import bg from './images/tft-bg.jpg';
import logo from './images/tft-logo.png';

import astro from './images/origins/astro.png';
import battlecast from './images/origins/battlecast.png';
import celestial from './images/origins/celestial.png';
import chrono from './images/origins/chrono.png';
import cybernetic from './images/origins/cybernetic.png';
import darkstar from './images/origins/darkstar.png';
import mechpilot from './images/origins/mechpilot.png';
import rebel from './images/origins/rebel.png';
import spacepirate from './images/origins/spacepirate.png';
import starguardian from './images/origins/starguardian.png';

import blademaster from './images/traits/blademaster.png';
import blaster from './images/traits/blaster.png';
import brawler from './images/traits/brawler.png';
import demolitionist from './images/traits/demolitionist.png';
import infiltrator from './images/traits/infiltrator.png';
import manareaver from './images/traits/manareaver.png';
import mercenary from './images/traits/mercenary.png';
import mystic from './images/traits/mystic.png';
import paragon from './images/traits/paragon.png';
import protector from './images/traits/protector.png';
import sniper from './images/traits/sniper.png';
import sorcerer from './images/traits/sorcerer.png';
import starship from './images/traits/starship.png';
import vanguard from './images/traits/vanguard.png';


const bgStyle = {
    // backgroundImage: `url('${bg}')`,
    backgroundColor: `rgba(46, 41, 41, 1)`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '100%'
};

const navbtnStyle = {
    backgroundColor: `rgba(0, 0, 0, 0)`,
    borderStyle: "solid",
    borderColor: "darkgoldenrod",
    color:"darkgoldenrod"
};

function App() {
    return (
        <div className="container-fluid" style={bgStyle}>
            <header className="text-center mb-sm-5">
                <button className="btn btn-default float-left mt-sm-3" style={navbtnStyle}>About</button>
                <button className="btn btn-default float-left mt-sm-3" style={navbtnStyle}>Champions</button>
                <img className="mt-sm-3" src={logo} style={{ height: 225 }}/>
                <button className="btn btn-default float-right mt-sm-3" style={navbtnStyle}>Galaxies</button>
                <button className="btn btn-default float-right mt-sm-3" style={navbtnStyle}>Items</button>
            </header>

            <br></br><br></br>

            <div className="row text-center">
                <div className="col-3">
                    <div className="row mb-sm-2">
                        <div className="col-12">
                            <a href="#">
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
                            </a>
                        </div>
                    </div>

                    <div className="row mb-sm-5">
                        <div className="col-12">
                            <img src={astro} style={{ height: 75 }}/>
                            <h6 className="" style={{ color:"darkgoldenrod" }}>Astro</h6>
                        </div>
                    </div>

                    <div className="row mb-sm-2">
                        <div className="col-12">
                            <a href="#">
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
                            </a>
                        </div>
                    </div>

                    <div className="row mb-sm-5">
                        <div className="col-12">
                            <img src={blademaster} style={{ height: 75 }}/>
                            <h6 className="" style={{ color:"darkgoldenrod" }}>Blademaster</h6>
                        </div>
                    </div>
                </div>

                <div className="col-9">
                    <div className="row">
                        <div className="col-4">
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
                        </div>
                    </div>
                </div>

            </div>  
        
        </div>
    );
}

export default App;
