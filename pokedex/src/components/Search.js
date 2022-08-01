import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row } from 'react-bootstrap';

import Pokemon from "./Pokemon";
import SearchBar from "./SearchBar";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [getPokemon, setPokemon] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
            setPokemon(res.data.name);
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

            {
                searchTerm === ''
                    ? <></>
                    : <Container id='pokemonResult' className="d-flex vw-100">
                        <Row className="m-auto">
                            <Pokemon key={getPokemon} name={getPokemon} />
                        </Row>
                    </Container>
            }
        </>
    )
};

export default Search;