import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row } from 'react-bootstrap';

import Pokemon from "./Pokemon";
import SearchBar from "./SearchBar";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    // const [getPokemonName, setPokemonName] = useState('');
    // const [getPokemonId, setPokemonId] = useState()
    const [getAllPokemon, setAllPokemon] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    const limit = 905;
    const pokemonArr = [];
    // const searchResults = [];

    useEffect(() => {

        const fetchPosts = async () => {
            const resName = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
            setAllPokemon(resName.data.results);

            //Works to display 1 pokemon when search term is an ID or complete name
            // const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
            // setPokemonName(res.data.name);
            // setPokemonId(res.data.id)

            //Populates pokemonArr when user types into search box
            for (let i = 0; i < limit; i++) {
                pokemonArr.push({ name: getAllPokemon[i].name, id: i + 1 })
            }

        }

        fetchPosts();

    }, [searchTerm]);

    const handleSubmit = (e) => {
        setSearchTerm(e.target.value);
        console.log('TEST2');
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
        console.log('TEST1');
    }

    const handleSearch = () => {
        if (searchTerm !== '' && pokemonArr.length !== 0) {
            console.log('TEST4')
            for (let i = 0; i < pokemonArr.length; i++) {
                console.log('TEST3')
                if (pokemonArr[i].name.toUpperCase().startsWith(searchTerm.toUpperCase()) || pokemonArr[i].id.toString().startsWith(searchTerm)) {
                    setSearchResults(pokemonArr[i]);
                }
            }
        }
    }

    handleSearch();

    return (
        <>
            <br />
            <div className="search-title" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h4>Search for a Pokémon</h4>
            </div>
            <br />
            <div className="search-box" style={{ display: "flex" }} >
                <SearchBar handlesubmit={handleSubmit} handleChange={handleChange} />
            </div>
            <br />
            {/* {
                searchTerm === ''
                    ? <></>
                    : <Container id='pokemonResult' className="d-flex vw-100">
                        <Row className="m-auto">
                            <Pokemon key={getPokemonId} name={getPokemonName} id={getPokemonId} />
                        </Row>
                    </Container>
            } */}

            {
                searchTerm === ''
                    ? <></>
                    : <Container id='pokemonResult' className="d-flex vw-100">
                        <Row className="m-auto">
                            {searchResults.map((item) => <Pokemon key={item.id} name={item.name} id={item.id} />)}
                        </Row>
                    </Container>
            }

        </>
    )
};

export default Search;