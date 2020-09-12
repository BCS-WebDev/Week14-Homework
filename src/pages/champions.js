
import React, { useState, useEffect } from 'react';

import Thumbnail from "../components/Thumbnail/Thumbnail";

import Champions from "../data/champions";
import Origins from "../data/origins";
import Traits from "../data/traits.json";
import ChampionCard from "../components/ChampionCard/championCard";

function ChampionsPage() {
    const [championListState, setChampionListState] = useState([]);
    useEffect(() => {
        console.log("Champions loaded.");
    }, []);

    const [filterState, setFilterState] = useState({
        origin: Origins[Origins.length - 1],
        trait: Traits[Traits.length - 1]
    });
    useEffect(() => {
        loadChampions(filterState.origin.name, filterState.trait.name);
    }, []);

    function loadChampions(origin, trait) {
        var filteredChampions = [];
        if (origin === "None" && trait === "None") {
            filteredChampions = Champions;
        } else if (origin !== "None" && trait === "None") {
            filteredChampions = Champions.filter(champion => champion.traits.includes(origin));
        } else if (origin === "None" && trait !== "None") {
            filteredChampions = Champions.filter(champion => champion.traits.includes(trait));
        } else if (origin !== "None" && trait !== "None") {
            filteredChampions = Champions.filter(champion => champion.traits.includes(origin) && champion.traits.includes(trait));
        }

        setChampionListState(filteredChampions);
    };

    function onThumbnailClick(event) {
        const item = event.target.item;
        setFilterState({...filterState, [item.type]: item });  // check that this works as intended
    }

    return (
        <div className="row text-center">
            <div className="col-3">
                <div className="row mb-sm-2">
                    <div className="col-12">
                        {
                            Origins.map(origin => <Thumbnail item={origin} onClick={onThumbnailClick} height={50}/>)
                        }
                    </div>
                </div>

                <div className="row mb-sm-5">
                    <div className="col-12">
                        <Thumbnail item={filterState.origin} height={75}/>
                        <h6 className="" style={{ color:"darkgoldenrod" }}>{ filterState.origin.name}</h6>
                    </div>
                </div>

                <div className="row mb-sm-2">
                    <div className="col-12">
                        {
                            Traits.map(trait => <Thumbnail item={trait} onClick={onThumbnailClick} height={50}/>)
                        }
                    </div>
                </div>

                <div className="row mb-sm-5">
                    <div className="col-12">
                        <Thumbnail item={filterState.trait} height={75}/>
                    <h6 className="" style={{ color:"darkgoldenrod" }}>{filterState.trait.name}</h6>
                    </div>
                </div>
            </div>

            <div className="col-9">
                <div className="row">
                    {
                        championListState.map(champion => <ChampionCard champion={champion}/>)
                    }
                </div>
            </div>

        </div> 
    );
}
  
export default ChampionsPage;
  