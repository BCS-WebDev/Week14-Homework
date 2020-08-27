import React from 'react';
import './App.css';

import bg from './images/tft-bg.jpg';
import logo from './images/tft-logo.png';

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

const bgStyle = {
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.7) 100%), url('${bg}')`,
    backgroundSize: '70%', 
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '250'
};

const navbtnStyle = {
    backgroundColor: `rgba(0, 0, 0, 0)`,
    borderStyle: "solid",
    borderColor: "darkgoldenrod",
    color:"darkgoldenrod"
};

function App() {
    return (
        <div className="container-fluid">
            <header className="text-center mb-sm-5">
                <button className="btn btn-default float-left mt-sm-3" style={navbtnStyle}>About</button>
                <button className="btn btn-default float-left mt-sm-3" style={navbtnStyle}>Champions</button>
                <img className="mt-sm-3" src={logo} style={{ height: 225 }}/>
                <button className="btn btn-default float-right mt-sm-3" style={navbtnStyle}>Galaxies</button>
                <button className="btn btn-default float-right mt-sm-3" style={navbtnStyle}>Items</button>
            </header>

            <hr className="bg-dark mx-sm-5"></hr><br></br><br></br>

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
        
        </div>
    );
}

export default App;
