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

    // const handleSubmit = (e) => {
    //     //Doesn't work yet
    //     setSearchTerm(e.target.value);
    //     console.log('TEST2');
    // }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <>
            <br />

            <Container className="" style={{ justifyContent: "center", borderRadius: "10px" }} >
                {/* <div className="search-title" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <h4>Search for a Pokémon</h4>
                </div> */}
                <br />
                <div className="search-box" style={{ display: "flex" }} >
                    <SearchBar handleChange={handleChange} />
                </div>
                <br/>
            </Container>
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
                    : <Container id='searchList' className="d-flex vw-100 card-bg p-2" >
                        <Row className="m-auto" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>

                            {getAllPokemon.filter(poke => poke.name.toUpperCase().startsWith(searchTerm.toUpperCase()) || poke.id.toString().startsWith(searchTerm))
                                .map((item) => <Pokemon key={item.id} name={item.name} id={item.id} />)}

                        </Row>
                    </Container>
            }

        </>
    )
};

export default Search;