import { Button, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

import PropTypes from 'prop-types';
import axios from "axios";

const Pokemon = (props) => {

    const [pokemonData, setPokemonData] = useState({});
    const [loading, setLoading] = useState(true);

    const [addedtoFave, setAddedtoFave] = useState(false);

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

    const favePoke = [];

    const addToFave = () => {
        if (addedtoFave === true) {
            setAddedtoFave(false);
            favePoke.slice(pokemonData)
        } else {
            setAddedtoFave(true);
            favePoke.push(pokemonData)
        }
        return favePoke;
    };

    return (
        <>
            <Card style={{ width: '15rem' }}>
                <Card.Img variant='top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`} />
                <Card.Header></Card.Header>
                <Card.Body>
                    <p>{`#${pokemonData.id}`} {pokemonName}</p>
                    <p>
                        {type1[0].toUpperCase() + type1.slice(1)}
                        {' '}
                        {/* if type1 and type2 are the same, don't render type2 to screen */}
                        {(type1 === type2) ? <></> : type2[0].toUpperCase() + type2.slice(1)}
                    </p>

                    {<Button variant={addedtoFave === false ? 'primary' : 'danger'} className='rounded-circle' onClick={addToFave} ><i className="fa-solid fa-heart"></i></Button>}
                </Card.Body>
            </Card>
        </>
    );
};

export default Pokemon;

Pokemon.propTypes = {
    name: PropTypes.string.isRequired
};