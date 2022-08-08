import { Button, Card, Modal, Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

import PropTypes from 'prop-types';
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

    // const [addedtoFave, setAddedtoFave] = useState(false);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    useEffect(() => {
        const getPokemon = async () => {
            //use the name prop to get expanded details of the pokemon
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.name}`);
            setPokemonData(res.data);
            //once loaded, gets rid of loading symbol and returns the completed card
            setLoading(false);
        }
        //call the getPokemon function we used above
        getPokemon();
    }, [props.name])

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

    //whilst loading returns a loading symbol instead of empty cards - fontAwesome used for image
    if (loading) return <h4><i className="fa-solid fa-spinner"></i></h4>;

    //capitalises the first letter of the name
    const pokemonName = props.name[0].toUpperCase() + props.name.slice(1);

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

    // const favePoke = [];

    // const addToFave = () => {
    //     if (addedtoFave === true) {
    //         setAddedtoFave(false);
    //         favePoke.slice(pokemonData)
    //     } else {
    //         setAddedtoFave(true);
    //         favePoke.push(pokemonData)
    //     }
    //     return favePoke;
    // };

    return (
        <>
            <Card style={{ width: '16rem' }} >
                <Card.Img variant='top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`} />
                <Card.Header></Card.Header>
                <Card.Body>
                    <Row className="">
                        <h5>{`#${pokemonData.id}`} {pokemonName}</h5>
                    </Row>
                    <Row className="">
                        <p className="types">
                            {/* gets the icon for the type of the pokemon via the pokemonIcon object */}
                            <img className="type-icon" src={pokemonIcon[type1]} alt={`${type1}`} style={{ width: '2rem' }} onClick={handleShow} />{' '}
                            {type1[0].toUpperCase() + type1.slice(1)}{' '}
                            {/* if type1 and type2 are the same, don't render type2 to screen */}
                            {type1 === type2 ? <></> : <img className="type-icon" src={pokemonIcon[type2]} alt={`${type2}`} style={{ width: '2rem' }} />}{' '}
                            {(type1 === type2) ? <></> : type2[0].toUpperCase() + type2.slice(1)}
                        </p>
                    </Row>
                    <Row className="m-auto">
                        <Col xs={4}>
                            <UpdateFavourite name={props.name} />
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
                                    <div className="modal-icons" >
                                        {<img className="type-icon" src={pokemonIcon[type1]} alt={`${type1}`} style={{ width: '2rem' }} />}{' '}
                                        {type1[0].toUpperCase() + type1.slice(1)}{' '}
                                        {type1 === type2 ? <></> : <img className="type-icon" src={pokemonIcon[type2]} alt={`${type2}`} style={{ width: '2rem' }} />}{' '}
                                        {(type1 === type2) ? <></> : type2[0].toUpperCase() + type2.slice(1)}
                                    </div>
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
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`} alt={pokemonName} style={{ border: '5px solid black' }} />
                                </div>
                            </Col>
                            <Col>
                                <div className="stats">
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
                                    <p>Height: {pokemonData.height}</p>
                                    <p>Weight: {pokemonData.weight}</p>
                                </div>
                                <br />
                                <div className="abilities">
                                    <p>Ability 1: {ability1[0].toUpperCase() + ability1.slice(1)}</p>
                                    {ability2 === 'N/A' ? <></> : <p>Ability 2: {ability2[0].toUpperCase() + ability2.slice(1)}</p>}
                                    {ability3 === 'N/A' ? <></> : <p>Ability 2: {ability3[0].toUpperCase() + ability3.slice(1)}</p>}
                                </div>
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

Pokemon.propTypes = {
    name: PropTypes.string.isRequired
};