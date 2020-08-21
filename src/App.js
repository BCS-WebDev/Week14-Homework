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
    backgroundImage: `url('${bg}')`,
    // backgroundColor: `black`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: 1080
};

const logoStyle = {
    height: 250
}

function App() {
    return (
        <div className="container-fluid" style={bgStyle}>
            <header className="text-center">
                <button className="btn btn-default bg-dark text-light float-left mt-sm-3">About</button>
                <button className="btn btn-default bg-dark text-light float-left mt-sm-3">Champions</button>
                <img className="mt-sm-3" src={logo} style={logoStyle}/>
                <button className="btn btn-default bg-dark text-light float-right mt-sm-3">Galaxies</button>
                <button className="btn btn-default bg-dark text-light float-right mt-sm-3">Items</button>
            </header>    

            <div className="row text-center mt-sm-1">
                <div className="col-6">
                
                    <div className="dropdown">
                        <button className="btn btn-default dropdown-toggle bg-dark text-light"
                            type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Origins
                        </button>
                        <ul class="dropdown-menu bg-dark">
                            <li><a href="#" className="text-light">
                                <img src={astro} style={{ height: 50 }}/> Astro
                            </a></li>
                            <li><a href="#" className="text-light">
                                <img src={battlecast} style={{ height: 50 }}/> Battlecast
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={celestial} style={{ height: 50 }}/> Celestial
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={chrono} style={{ height: 50 }}/> Chrono
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={cybernetic} style={{ height: 50 }}/> cybernetic
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={darkstar} style={{ height: 50 }}/> Darkstar
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={mechpilot} style={{ height: 50 }}/> Mechpilot
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={rebel} style={{ height: 50 }}/> Rebel
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={spacepirate} style={{ height: 50 }}/> Spacepirate
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={starguardian} style={{ height: 50 }}/> Starguardian
                            </a></li>
                        </ul>
                    </div>
                </div>

                <div className="col-6">
                    <div class="dropdown float-center">
                    <button className="btn btn-default dropdown-toggle bg-dark text-light"
                            type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Traits
                        </button>
                        <ul class="dropdown-menu bg-dark">
                            <li><a href="#" className="text-light">
                                <img src={blademaster} style={{ height: 50 }}/> Blademaster
                            </a></li>
                            <li><a href="#" className="text-light">
                                <img src={blaster} style={{ height: 50 }}/> Blaster
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={brawler} style={{ height: 50 }}/> Brawler
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={demolitionist} style={{ height: 50 }}/> Demolitionist
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={infiltrator} style={{ height: 50 }}/> Infiltrator
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={manareaver} style={{ height: 50 }}/> Manareaver
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={mercenary} style={{ height: 50 }}/> Mercenary
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={mystic} style={{ height: 50 }}/> Mystic
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={paragon} style={{ height: 50 }}/> Paragon
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={protector} style={{ height: 50 }}/> Protector
                            </a></li>
                            <li><a href="#" className="text-light">
                                <img src={sniper} style={{ height: 50 }}/> Sniper
                            </a></li>
                            <li><a href="#" className="text-light">
                                <img src={sorcerer} style={{ height: 50 }}/> Sorcerer
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={starship} style={{ height: 50 }}/> Starship
                            </a></li>
                            <li><a href="#" className="text-light">
                            <img src={vanguard} style={{ height: 50 }}/> Vanguard
                            </a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="row text-center mt-sm-3">
                <div className="col-12">
                    
                </div>
            </div>

            
        
        </div>
    );
}

export default App;
