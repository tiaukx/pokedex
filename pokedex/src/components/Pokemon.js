import { Button, Card, Modal, Container, Row, Col, Spinner } from "react-bootstrap";
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
import UpdateFavourite from "./UpdateFavourite";


const Pokemon = (props) => {

    const [pokemonData, setPokemonData] = useState({});
    const [loading, setLoading] = useState(true);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    useEffect(() => {
        const getPokemon = async () => {
            //use the id prop to get expanded details of the pokemon
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}`);
            setPokemonData(res.data);
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
    if (loading) return <Spinner animation="border" role="status" variant="danger">
        <span className="visually-hidden">Loading...</span>
    </Spinner>;

    //capitalises the first letter of the name
    const pokemonName = pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1);

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
    // normalWeakness >= 2 ? notVeryEffective.push('normal') : notVeryEffective.push();
    // fireWeakness >= 2 ? notVeryEffective.push('fire') : notVeryEffective.push();
    // waterWeakness >= 2 ? notVeryEffective.push('water') : notVeryEffective.push();
    // grassWeakness >= 2 ? notVeryEffective.push('grass') : notVeryEffective.push();
    // electricWeakness >= 2 ? notVeryEffective.push('electric') : notVeryEffective.push();
    // iceWeakness >= 2 ? notVeryEffective.push('ice') : notVeryEffective.push();
    // fightingWeakness >= 2 ? notVeryEffective.push('fighting') : notVeryEffective.push();
    // poisonWeakness >= 2 ? notVeryEffective.push('poison') : notVeryEffective.push();
    // groundWeakness >= 2 ? notVeryEffective.push('ground') : notVeryEffective.push();
    // flyingWeakness >= 2 ? notVeryEffective.push('flying') : notVeryEffective.push();
    // psychicWeakness >= 2 ? notVeryEffective.push('psychic') : notVeryEffective.push();
    // bugWeakness >= 2 ? notVeryEffective.push('bug') : notVeryEffective.push();
    // rockWeakness >= 2 ? notVeryEffective.push('rock') : notVeryEffective.push();
    // ghostWeakness >= 2 ? notVeryEffective.push('ghost') : notVeryEffective.push();
    // dragonWeakness >= 2 ? notVeryEffective.push('dragon') : notVeryEffective.push();
    // darkWeakness >= 2 ? notVeryEffective.push('dark') : notVeryEffective.push();
    // steelWeakness >= 2 ? notVeryEffective.push('steel') : notVeryEffective.push();
    // fairyWeakness >= 2 ? notVeryEffective.push('fairy') : notVeryEffective.push();

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
    //convert to string to allow manipulation os string to add a . in right place for measurements
    height = pokemonData.height.toString();
    weight = pokemonData.weight.toString();

    return (
        <>
            <Card style={{ width: '16rem', border: 'black' }} className='pulse-card'>
                <Card.Img variant='top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`} style={{ background: '#f2f2f2' }} />
                <Card.Header></Card.Header>
                <Card.Body>
                    <Row className="m-auto">
                        <h5>{`#${pokemonData.id}`} {pokemonName}</h5>
                    </Row>
                    <Row className="m-auto">
                        <p className="types">
                            {/* gets the icon for the type of the pokemon via the pokemonIcon object */}
                            <img className="type-icon" src={pokemonIcon[type1]} alt={`${type1}`} style={{ width: '2rem' }} />{' '}
                            {type1[0].toUpperCase() + type1.slice(1)}{' '}
                            {/* if type1 and type2 are the same, don't render type2 to screen */}
                            {type1 === type2 ? <></> : <img className="type-icon" src={pokemonIcon[type2]} alt={`${type2}`} style={{ width: '2rem' }} />}{' '}
                            {(type1 === type2) ? <></> : type2[0].toUpperCase() + type2.slice(1)}
                        </p>
                    </Row>
                    <Row className="m-auto">
                        <Col xs={4}>
                            <UpdateFavourite id={pokemonData.id} name={pokemonData.name} />
                        </Col>
                        <Col >
                            <Button onClick={handleShow}>See More</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* when user clicks on card will load up more details about pokemon */}
            <Modal show={show} size='xl' onHide={handleShow} centered dialogClassName="Modal">
                <Modal.Header>
                    <Modal.Title>
                        <div className="modal-title">
                            <div className="modal-img-name">
                                <div className="modal-name number" >
                                    #{pokemonData.id} {pokemonName}
                                </div>
                            </div>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container id='pokemonInfo' className="fluid">
                        <Row className='m-auto'>
                            <Col>
                                <div>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`} alt={pokemonName} style={{ width: 'inherit', border: '5px solid black' }} />
                                </div>
                            </Col>
                            <Col className='pokemonInfo'>
                                <Row className='m-auto'>
                                    <Col>
                                        <div className="type">
                                            <h4>Type</h4>
                                            {/* gets the icon for the type of the pokemon via the pokemonIcon object */}
                                            <img className="type-icon" src={pokemonIcon[type1]} alt={`${type1}`} style={{ width: '2rem' }} />{' '}
                                            {type1[0].toUpperCase() + type1.slice(1)}{' '}{<br />}
                                            {/* if type1 and type2 are the same, don't render type2 to screen */}
                                            {type1 === type2 ? <></> : <img className="type-icon" src={pokemonIcon[type2]} alt={`${type2}`} style={{ width: '2rem' }} />}{' '}
                                            {(type1 === type2) ? <></> : type2[0].toUpperCase() + type2.slice(1)}
                                        </div>
                                        {<br />}
                                        <div className="weaknesses">
                                            <h4>Weaknesses</h4>
                                            {superEffective.map(item => {
                                                return <>
                                                    <img className="type-icon" src={pokemonIcon[item]} alt={`${item}`} style={{ width: '2rem' }} />{' '}
                                                    {item[0].toUpperCase() + item.slice(1)}{<br />}
                                                </>
                                            })
                                            }
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="stats">
                                            <h4>Stats</h4>
                                            <p>Hit Points: {pokemonData.stats[0].base_stat}</p>
                                            <p>Attack: {pokemonData.stats[1].base_stat}</p>
                                            <p>Defense: {pokemonData.stats[2].base_stat}</p>
                                            <p>Special Attack: {pokemonData.stats[3].base_stat}</p>
                                            <p>Special Defense: {pokemonData.stats[4].base_stat}</p>
                                            <p>Speed: {pokemonData.stats[5].base_stat}</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div>
                                            <h4>Height</h4>
                                            <p>{height.substring(0, height.length - 1) + '.' + height.substring(height.length - 1)} m</p>
                                            <h4>Weight</h4>
                                            <p>{weight.substring(0, weight.length - 1) + '.' + weight.substring(weight.length - 1)} kg</p>
                                        </div>
                                        <br />
                                        <div className="abilities">
                                            <h4>Abilities</h4>
                                            <p>Ability 1: {ability1[0].toUpperCase() + ability1.slice(1)}</p>
                                            {ability2 === 'N/A' ? <></> : <p>Ability 2: {ability2[0].toUpperCase() + ability2.slice(1)}</p>}
                                            {ability3 === 'N/A' ? <></> : <p>Ability 2: {ability3[0].toUpperCase() + ability3.slice(1)}</p>}
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="m-auto">
                                    <div className="evolution-chart">
                                        <h4>Evolutions</h4>

                                    </div>
                                </Row>
                            </Col>

                        </Row>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={handleShow}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default Pokemon;