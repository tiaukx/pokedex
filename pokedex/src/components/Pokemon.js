import { useState, useEffect } from "react";

import axios from "axios";

import bugIcon from '../pokemon-type-icons/bug-icon.png';
import darkIcon from '../pokemon-type-icons/dark-icon.png';
import dragonIcon from '../pokemon-type-icons/dragon-icon.png';
import electricIcon from '../pokemon-type-icons/electric-icon.png';
import fairyIcon from '../pokemon-type-icons/fairy-icon.png';
import fightingIcon from '../pokemon-type-icons/fighting-icon.png';
import fireIcon from '../pokemon-type-icons/fire-icon.png';
import flyingIcon from '../pokemon-type-icons/flying-icon.png';
import ghostIcon from '../pokemon-type-icons/ghost-icon.png';
import grassIcon from '../pokemon-type-icons/grass-icon.png';
import groundIcon from '../pokemon-type-icons/ground-icon.png';
import iceIcon from '../pokemon-type-icons/ice-icon.png';
import normalIcon from '../pokemon-type-icons/normal-icon.png';
import poisonIcon from '../pokemon-type-icons/poison-icon.png';
import psychicIcon from '../pokemon-type-icons/psychic-icon.png';
import rockIcon from '../pokemon-type-icons/rock-icon.png';
import steelIcon from '../pokemon-type-icons/steel-icon.png';
import waterIcon from '../pokemon-type-icons/water-icon.png';
import PokemonCard from "./PokemonCard";
import PokemonModal from "./PokemonModal";


const Pokemon = (props) => {

    const [pokemonData, setPokemonData] = useState({});
    const [evoChain, setEvoChain] = useState({});
    const [loading, setLoading] = useState(true);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    useEffect(() => {
        const getPokemon = async () => {
            //use the id prop to get expanded details of the pokemon
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}`);
            setPokemonData(res.data);

            //uses the id prop to get evolution chain
            const evoInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${props.id}`)
            setEvoChain(evoInfo.data);

            //once loaded, gets rid of loading symbol and returns the completed card
            setLoading(false);
        }
        //call the getPokemon function we used above
        getPokemon();
    }, [props.id])

    //object to contain images of icons for each type
    const pokemonIcon = {
        bug: bugIcon,
        dark: darkIcon,
        dragon: dragonIcon,
        electric: electricIcon,
        fairy: fairyIcon,
        fighting: fightingIcon,
        fire: fireIcon,
        flying: flyingIcon,
        ghost: ghostIcon,
        grass: grassIcon,
        ground: groundIcon,
        ice: iceIcon,
        normal: normalIcon,
        poison: poisonIcon,
        psychic: psychicIcon,
        rock: rockIcon,
        steel: steelIcon,
        water: waterIcon,
    };

    //whilst loading returns a loading symbol animation instead of empty cards
    //Fails to load cards without this
    if (loading) return <span className="visually-hidden">Loading...</span>

    //capitalises the first letter of the name
    const pokemonName = pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1);

    //gets pokemon description in English and from a specific game version
    let pokeDesc = '';

    for (let i = 0; i < evoChain.flavor_text_entries.length; i++) {
        if (evoChain.flavor_text_entries[i].language.name === 'en' && evoChain.flavor_text_entries[i].version.name === 'sword') {
            pokeDesc = evoChain.flavor_text_entries[i].flavor_text
        }
    }

    //gets the types from the pokemon
    const types = pokemonData.types.map(item => {
        return item.type.name
    })

    //initialise types of pokemon
    let type1 = types[0];
    let type2 = "";

    //if there is a second type in types array assign the value to type2
    if (types[1]) {
        type2 = types[1]
        //if there is not a second value in array, assign type2 to the first value (same as type1)
    } else {
        type2 = types[0]
    };

    //type weakness
    let normalWeakness = 1;
    let fireWeakness = 1;
    let waterWeakness = 1;
    let grassWeakness = 1;
    let electricWeakness = 1;
    let iceWeakness = 1;
    let fightingWeakness = 1;
    let poisonWeakness = 1;
    let groundWeakness = 1;
    let flyingWeakness = 1;
    let psychicWeakness = 1;
    let bugWeakness = 1;
    let rockWeakness = 1;
    let ghostWeakness = 1;
    let dragonWeakness = 1;
    let darkWeakness = 1;
    let steelWeakness = 1;
    let fairyWeakness = 1;

    const typeWeaknessCalc = (val) => {
        //If superEffective multiply value by 2
        //If not very effective multiply value by 0.5
        //If immune multiply value by 0
        switch (val) {
            case 'normal':
                fightingWeakness *= 2;
                ghostWeakness *= 0;
                break;
            case 'fire':
                waterWeakness *= 2;
                groundWeakness *= 2;
                rockWeakness *= 2;
                fireWeakness *= 0.5;
                grassWeakness *= 0.5;
                iceWeakness *= 0.5;
                bugWeakness *= 0.5;
                steelWeakness *= 0.5;
                fairyWeakness *= 0.5;
                break;
            case 'water':
                grassWeakness *= 2;
                electricWeakness *= 2;
                fireWeakness *= 0.5;
                waterWeakness *= 0.5;
                iceWeakness *= 0.5;
                steelWeakness *= 0.5;
                break;
            case 'grass':
                fireWeakness *= 2;
                iceWeakness *= 2;
                poisonWeakness *= 2;
                flyingWeakness *= 2;
                bugWeakness *= 2;
                waterWeakness *= 0.5;
                grassWeakness *= 0.5;
                electricWeakness *= 0.5;
                groundWeakness *= 0.5;
                break;
            case 'electric':
                groundWeakness *= 2;
                electricWeakness *= 0.5;
                flyingWeakness *= 0.5;
                steelWeakness *= 0.5;
                break;
            case 'ice':
                fireWeakness *= 2;
                fightingWeakness *= 2;
                rockWeakness *= 2;
                steelWeakness *= 2;
                iceWeakness *= 0.5;
                break;
            case 'fighting':
                flyingWeakness *= 2;
                psychicWeakness *= 2;
                fairyWeakness *= 2;
                bugWeakness *= 0.5;
                rockWeakness *= 0.5;
                darkWeakness *= 0.5;
                break;
            case 'poison':
                groundWeakness *= 2;
                psychicWeakness *= 2;
                grassWeakness *= 0.5;
                fightingWeakness *= 0.5;
                poisonWeakness *= 0.5;
                bugWeakness *= 0.5;
                fairyWeakness *= 0.5;
                break;
            case 'ground':
                waterWeakness *= 2;
                grassWeakness *= 2;
                iceWeakness *= 2;
                poisonWeakness *= 0.5;
                rockWeakness *= 0.5;
                electricWeakness *= 0;
                break;
            case 'flying':
                electricWeakness *= 2;
                iceWeakness *= 2;
                rockWeakness *= 2;
                grassWeakness *= 0.5;
                fightingWeakness *= 0.5;
                bugWeakness *= 0.5;
                groundWeakness *= 0;
                break;
            case 'psychic':
                bugWeakness *= 2;
                ghostWeakness *= 2;
                darkWeakness *= 2;
                fightingWeakness *= 0.5;
                psychicWeakness *= 0.5;
                break;
            case 'bug':
                fireWeakness *= 2;
                flyingWeakness *= 2;
                rockWeakness *= 2;
                grassWeakness *= 0.5;
                fightingWeakness *= 0.5;
                groundWeakness *= 0.5;
                break;
            case 'rock':
                waterWeakness *= 2;
                grassWeakness *= 2;
                fightingWeakness *= 2;
                groundWeakness *= 2;
                steelWeakness *= 2;
                normalWeakness *= 0.5;
                fireWeakness *= 0.5;
                poisonWeakness *= 0.5;
                flyingWeakness *= 0.5;
                break;
            case 'ghost':
                ghostWeakness *= 2;
                darkWeakness *= 2;
                poisonWeakness *= 0.5;
                bugWeakness *= 0.5;
                normalWeakness *= 0;
                fightingWeakness *= 0;
                break;
            case 'dragon':
                iceWeakness *= 2;
                dragonWeakness *= 2;
                fairyWeakness *= 2;
                fireWeakness *= 0.5;
                waterWeakness *= 0.5;
                grassWeakness *= 0.5;
                electricWeakness *= 0.5;
                break;
            case 'dark':
                fightingWeakness *= 2;
                bugWeakness *= 2;
                fairyWeakness *= 2;
                ghostWeakness *= 0.5;
                darkWeakness *= 0.5;
                psychicWeakness *= 0;
                break;
            case 'steel':
                fireWeakness *= 2;
                fightingWeakness *= 2;
                groundWeakness *= 2;
                normalWeakness *= 0.5;
                grassWeakness *= 0.5;
                iceWeakness *= 0.5;
                flyingWeakness *= 0.5;
                psychicWeakness *= 0.5;
                bugWeakness *= 0.5;
                rockWeakness *= 0.5;
                dragonWeakness *= 0.5;
                steelWeakness *= 0.5;
                fairyWeakness *= 0.5;
                poisonWeakness *= 0;
                break;
            case 'fairy':
                poisonWeakness *= 2;
                steelWeakness *= 2;
                fightingWeakness *= 0.5;
                bugWeakness *= 0.5;
                darkWeakness *= 0.5;
                dragonWeakness *= 0;
                break;
            default:
                break;
        }
    };

    typeWeaknessCalc(type1);
    typeWeaknessCalc(type2);

    const superEffective = [];
    // const notVeryEffective = [];
    // const immune = [];

    //pushes to superEffective Array
    normalWeakness >= 2 ? superEffective.push('normal') : superEffective.push();
    fireWeakness >= 2 ? superEffective.push('fire') : superEffective.push();
    waterWeakness >= 2 ? superEffective.push('water') : superEffective.push();
    grassWeakness >= 2 ? superEffective.push('grass') : superEffective.push();
    electricWeakness >= 2 ? superEffective.push('electric') : superEffective.push();
    iceWeakness >= 2 ? superEffective.push('ice') : superEffective.push();
    fightingWeakness >= 2 ? superEffective.push('fighting') : superEffective.push();
    poisonWeakness >= 2 ? superEffective.push('poison') : superEffective.push();
    groundWeakness >= 2 ? superEffective.push('ground') : superEffective.push();
    flyingWeakness >= 2 ? superEffective.push('flying') : superEffective.push();
    psychicWeakness >= 2 ? superEffective.push('psychic') : superEffective.push();
    bugWeakness >= 2 ? superEffective.push('bug') : superEffective.push();
    rockWeakness >= 2 ? superEffective.push('rock') : superEffective.push();
    ghostWeakness >= 2 ? superEffective.push('ghost') : superEffective.push();
    dragonWeakness >= 2 ? superEffective.push('dragon') : superEffective.push();
    darkWeakness >= 2 ? superEffective.push('dark') : superEffective.push();
    steelWeakness >= 2 ? superEffective.push('steel') : superEffective.push();
    fairyWeakness >= 2 ? superEffective.push('fairy') : superEffective.push();

    //Pushes to not very Effective array
    //not used currently but available for future use
    // normalWeakness < 1 ? notVeryEffective.push('normal') : notVeryEffective.push();
    // fireWeakness < 1 ? notVeryEffective.push('fire') : notVeryEffective.push();
    // waterWeakness < 1 ? notVeryEffective.push('water') : notVeryEffective.push();
    // grassWeakness < 1 ? notVeryEffective.push('grass') : notVeryEffective.push();
    // electricWeakness < 1 ? notVeryEffective.push('electric') : notVeryEffective.push();
    // iceWeakness < 1 ? notVeryEffective.push('ice') : notVeryEffective.push();
    // fightingWeakness < 1 ? notVeryEffective.push('fighting') : notVeryEffective.push();
    // poisonWeakness < 1 ? notVeryEffective.push('poison') : notVeryEffective.push();
    // groundWeakness < 1 ? notVeryEffective.push('ground') : notVeryEffective.push();
    // flyingWeakness < 1 ? notVeryEffective.push('flying') : notVeryEffective.push();
    // psychicWeakness < 1 ? notVeryEffective.push('psychic') : notVeryEffective.push();
    // bugWeakness < 1 ? notVeryEffective.push('bug') : notVeryEffective.push();
    // rockWeakness < 1 ? notVeryEffective.push('rock') : notVeryEffective.push();
    // ghostWeakness < 1 ? notVeryEffective.push('ghost') : notVeryEffective.push();
    // dragonWeakness < 1 ? notVeryEffective.push('dragon') : notVeryEffective.push();
    // darkWeakness < 1 ? notVeryEffective.push('dark') : notVeryEffective.push();
    // steelWeakness < 1 ? notVeryEffective.push('steel') : notVeryEffective.push();
    // fairyWeakness < 1 ? notVeryEffective.push('fairy') : notVeryEffective.push();

    //pushes to immune array
    //not used currently but available for future use
    // normalWeakness === 0 ? immune.push('normal') : immune.push();
    // fireWeakness === 0 ? immune.push('fire') : immune.push();
    // waterWeakness === 0 ? immune.push('water') : immune.push();
    // grassWeakness === 0 ? immune.push('grass') : immune.push();
    // electricWeakness === 0 ? immune.push('electric') : immune.push();
    // iceWeakness === 0 ? immune.push('ice') : immune.push();
    // fightingWeakness === 0 ? immune.push('fighting') : immune.push();
    // poisonWeakness === 0 ? immune.push('poison') : immune.push();
    // groundWeakness === 0 ? immune.push('ground') : immune.push();
    // flyingWeakness === 0 ? immune.push('flying') : immune.push();
    // psychicWeakness === 0 ? immune.push('psychic') : immune.push();
    // bugWeakness === 0 ? immune.push('bug') : immune.push();
    // rockWeakness === 0 ? immune.push('rock') : immune.push();
    // ghostWeakness === 0 ? immune.push('ghost') : immune.push();
    // dragonWeakness === 0 ? immune.push('dragon') : immune.push();
    // darkWeakness === 0 ? immune.push('dark') : immune.push();
    // steelWeakness === 0 ? immune.push('steel') : immune.push();
    // fairyWeakness === 0 ? immune.push('fairy') : immune.push();

    //initialise abilities of pokemon
    let ability1 = 'N/A';
    let ability2 = 'N/A';
    let ability3 = 'N/A';

    //checks how many abilities pokemon has and updates values accordingly
    if (pokemonData.abilities.length === 1) {
        ability1 = pokemonData.abilities[0].ability.name;
    } else if (pokemonData.abilities.length === 2) {
        ability1 = pokemonData.abilities[0].ability.name;
        ability2 = pokemonData.abilities[1].ability.name;
    } else if (pokemonData.abilities.length === 3) {
        ability1 = pokemonData.abilities[0].ability.name;
        ability2 = pokemonData.abilities[1].ability.name;
        ability3 = pokemonData.abilities[2].ability.name;
    }

    //intialise height and weight of pokemon
    let height;
    let weight;
    //convert to string to allow manipulation to string to add a . in right place for measurements
    height = pokemonData.height.toString();
    weight = pokemonData.weight.toString();
    //adds a . as the 2nd last character of string to display accurate measurements
    height = height.substring(0, height.length - 1) + '.' + height.substring(height.length - 1);
    weight = weight.substring(0, weight.length - 1) + '.' + weight.substring(weight.length - 1)
    //if string length === 2 add a 0 to the beginning of string
    if (height.length === 2) { height = '0' + height }
    if (weight.length === 2) { weight = '0' + weight }

    return (
        <>
            <PokemonCard pokemonData={pokemonData} pokemonName={pokemonName} type1={type1} type2={type2} pokemonIcon={pokemonIcon} handleShow={handleShow} />
            <PokemonModal pokemonData={pokemonData} pokemonName={pokemonName} pokeDesc={pokeDesc} type1={type1} type2={type2} pokemonIcon={pokemonIcon} superEffective={superEffective} height={height} weight={weight} ability1={ability1} ability2={ability2} ability3={ability3} show={show} handleShow={handleShow} />
        </>
    );
};

export default Pokemon;