
import React from 'react';

import logo from '../../images/tft-logo.png';
import NavBtn from "../NavBtn/navbtn";

function Header() {
    return (
        <header className="text-center mb-sm-5">
            <NavBtn link="About" href="/about"/>
            <NavBtn link="Champions" href="/champions"/>
            <img className="mt-sm-3" src={logo} style={{ height: 225 }}/>
            <NavBtn link="Galaxies" href="/galaxies"/>
            <NavBtn link="Items" href="/items"/>
        </header>
    );
}
  
export default Header;
  
