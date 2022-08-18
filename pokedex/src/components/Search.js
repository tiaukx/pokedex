import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row } from 'react-bootstrap';

import Pokemon from "./Pokemon";
import SearchBar from "./SearchBar";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [getPokemonName, setPokemonName] = useState('');
    const [getPokemonId, setPokemonId] = useState()

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
            setPokemonName(res.data.name);
            setPokemonId(res.data.id)
        }
        fetchPosts();
    }, [searchTerm]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <>
            <SearchBar handlesubmit={handleSubmit} handleChange={handleChange} />
            <br/>
            {
                searchTerm === ''
                    ? <></>
                    : <Container id='pokemonResult' className="d-flex vw-100">
                        <Row className="m-auto">
                            <Pokemon key={getPokemonId} name={getPokemonName} id={getPokemonId} />
                        </Row>
                    </Container>
            }
        </>
    )
};

export default Search;