
import React from 'react';

import none from './images/none.png';

import Thumbnail from "../components/ThumbnailItem/Thumbnail";
import ItemList from "../components/ItemList/itemList";

import CoreItems from "../data/coreItems.json";
import Items from "../data/items";

function Galaxies(props) {
    return (
        <div className="row text-center">
            <div className="col-3">
                <div className="row mb-sm-3">
                    <div className="col-12">
                        {
                            CoreItems.map(item => <Thumbnail className="p-sm-1" onClick={} src={item.src} height={50}/>)
                        }
                        {/* <a href="#">
                            <img src={bfsword} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={recurvebow} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={nlrod} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={tearofgoddess} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={chainvest} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={negatron} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={giantsbelt} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={spatula} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={spargloves} className="p-sm-1" style={{ height: 50 }}/>
                        </a> */}
                    </div>
                </div>

                <div className="row mb-sm-4">
                    <div className="col-12">
                        <img src={bfsword} style={{ height: 75 }}/>   {/* use state for src here */}
                        <h6 className="" style={{ color:"darkgoldenrod" }}>B.F. Sword</h6>
                    </div>
                </div>

                <div className="row mb-sm-3">
                    <div className="col-12">
                        {
                            Items.map(item => <Thumbnail className="p-sm-1" onClick={} src={item.src} height={50}/>)
                        }
                        {/* <a href="#">
                            <img src={deathblade} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={giantslayer} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={hextechgunblade} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={spearofshojin} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={guardianangel} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={bloodthirster} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={zekesherald} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={bladeruinedking} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={infinityedge} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={rapidfirecannon} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={guisoo} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={statikk} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={titansresolve} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={runaans} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={zzrot} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={infiltalons} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={lastwhisper} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={rabadon} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={ludens} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={locketofsolari} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={ionicspark} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={morellonomicon} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={battlecastarmor} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={jeweledguantlet} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={seraphs} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={frozenheart} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={chalice} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={redemption} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={starguardiancharm} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={handofjustice} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={bramblevest} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={swordbreaker} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={redbuff} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={rebelmedal} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={shroud} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={dragonsclaw} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={zephyr} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={celestialorb} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={quicksilver} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={warmog} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={protectorguard} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={trapclaw} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={forceofnature} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={darkstarheart} className="p-sm-1" style={{ height: 50 }}/>
                        </a>
                        <a href="#">
                            <img src={thiefsgloves} className="p-sm-1" style={{ height: 50 }}/>
                        </a> */}
                    </div>
                </div>

                <div className="row mb-sm-5">
                    <div className="col-12">
                        <img src={none} style={{ height: 75 }}/>   {/* use state for src here */}
                        <h6 className="" style={{ color:"darkgoldenrod" }}>None</h6>
                    </div>
                </div>
            </div>

            <div className="col-9">
                <div className="row">
                    <div className="col-12">
                        <ul class="list-group w-100 list-group-flush">   {/* use state for src here */}
                            {
                                Items.filter(item => <ItemList />)
                            }
                            {/* <li class="list-group-item " style={{ backgroundColor: `rgba(0, 0, 0, 0)`, color:"darkgoldenrod", borderColor: "darkgoldenrod" }}>
                                <div className="row">
                                    <div className="col-1 pt-sm-1">
                                        <img src={bfsword} style={{ height: 50 }}/>
                                    </div>
                                    <h3 className="col-1 pt-sm-2">+</h3>
                                    <div className="col-1 pt-sm-1">
                                        <img src={bfsword} style={{ height: 50 }}/>
                                    </div>
                                    <h3 className="col-1 pt-sm-2">=</h3>
                                    <div className="col-1">
                                        <img src={deathblade} style={{ height: 60 }}/>
                                    </div>
                                    <div className="col-7">
                                        <p>
                                            Contributing to a kill grants the holder +25 Attack Damage for the rest of combat.
                                            This effect can stack any number of times (starting at 1.0).
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item " style={{ backgroundColor: `rgba(0, 0, 0, 0)`, color:"darkgoldenrod", borderColor: "darkgoldenrod" }}>
                                <div className="row">
                                <div className="col-1 pt-sm-1">
                                        <img src={bfsword} style={{ height: 50 }}/>
                                    </div>
                                    <h3 className="col-1 pt-sm-2">+</h3>
                                    <div className="col-1 pt-sm-1">
                                        <img src={bfsword} style={{ height: 50 }}/>
                                    </div>
                                    <h3 className="col-1 pt-sm-2">=</h3>
                                    <div className="col-1">
                                        <img src={deathblade} style={{ height: 60 }}/>
                                    </div>
                                    <div className="col-7">
                                        <p>
                                            Contributing to a kill grants the holder +25 Attack Damage for the rest of combat.
                                            This effect can stack any number of times (starting at 1.0).
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item " style={{ backgroundColor: `rgba(0, 0, 0, 0)`, color:"darkgoldenrod", borderColor: "darkgoldenrod" }}>
                                <div className="row">
                                <div className="col-1 pt-sm-1">
                                        <img src={bfsword} style={{ height: 50 }}/>
                                    </div>
                                    <h3 className="col-1 pt-sm-2">+</h3>
                                    <div className="col-1 pt-sm-1">
                                        <img src={bfsword} style={{ height: 50 }}/>
                                    </div>
                                    <h3 className="col-1 pt-sm-2">=</h3>
                                    <div className="col-1">
                                        <img src={deathblade} style={{ height: 60 }}/>
                                    </div>
                                    <div className="col-7">
                                        <p>
                                            Contributing to a kill grants the holder +25 Attack Damage for the rest of combat.
                                            This effect can stack any number of times (starting at 1.0).
                                        </p>
                                    </div>
                                </div>
                            </li> */}
                        </ul>
                        
                    </div>
                </div>
            </div>

        </div>
    );
}
  
export default Champions;
  