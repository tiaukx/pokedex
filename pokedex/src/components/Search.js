// import axios from "axios";
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

    useEffect(() => {

        //Works to display 1 pokemon when search term is an ID or complete name
        // const fetchPosts = async () => {
        //     // const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
        //     // setPokemonName(res.data.name);
        //     // setPokemonId(res.data.id)
        // }
        // fetchPosts();

        //Works to display multiple pokemon when search term is partial ID or partial
        const fetchPosts = async () => {
            const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
            const res = await fetch(url);
            const data = await res.json();
            const pokemon = data.results.map((data, index) => ({
                name: data.name,
                id: index + 1
            }))
            setAllPokemon(pokemon);
        }

        fetchPosts();

    }, []);

    const handleSubmit = (e) => {
        //Doesn't work yet
        setSearchTerm(e.target.value);
        console.log('TEST2');
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSearch = () => {
        //If search term is not an empty string...
        if (searchTerm !== '') {
            //Loop through list of pokemon
            for (let i = 0; i < limit; i++) {
                if (getAllPokemon[i].name.toUpperCase().startsWith(searchTerm.toUpperCase()) || getAllPokemon[i].id.toString().startsWith(searchTerm)) {
                    //If pokemon name or ID starts with search term...
                    if (!searchResults.includes(getAllPokemon[i])) {
                        //If search results does not already contain pokemon
                        setSearchResults(oldArr => [...oldArr, getAllPokemon[i]])
                    } else if (searchResults.includes(getAllPokemon[i]) && !getAllPokemon[i].name.toUpperCase().startsWith(searchTerm.toUpperCase())) {
                        //remove from search results if already in search results & pokemon name does NOT begin with search term
                        
                    } else if (searchResults.includes(getAllPokemon[i]) && !getAllPokemon[i].id.toString().startsWith(searchTerm)) {
                        //remove from search results if already in search results & pokemon ID does NOT begin with search term

                    }
                }
            }
        } else if (searchTerm === '' && searchResults.length !== 0) {
            //If search term is empty string & search results already contains a value[s], reset searchResults to empty array
            setSearchResults([]);
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

            <Container id='pokemonResult' className="d-flex vw-100">
                <Row className="m-auto">
                    {searchResults.map((item) => <Pokemon key={item.id} name={item.name} id={item.id} />)}
                </Row>
            </Container>

        </>
    )
};

export default Search;