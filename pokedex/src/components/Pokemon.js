import { Card } from "react-bootstrap";
import { useState, useEffect } from "react";

import PropTypes from 'prop-types';
import axios from "axios";

const Pokemon = ({name}) => {
    
    const [pokemonData, setPokemonData] = useState({});

    useEffect(() => {
        const getPokemon = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
            setPokemonData(res.data);
        }
        getPokemon();
        console.log(pokemonData)
    }, [name])

    return (
        <>
            <Card border="dark" style={{ width: '15rem' }}>
                <Card.Img variant='top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`} />
                <Card.Header></Card.Header>
                <Card.Body>
                    <p>{pokemonData.id} {name}</p>
                </Card.Body>
            </Card>
        </>
    );
};

export default Pokemon;

Pokemon.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};