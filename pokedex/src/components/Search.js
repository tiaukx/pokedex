import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row } from 'react-bootstrap';

import Pokemon from "./Pokemon";
import SearchBar from "./SearchBar";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [getPokemonName, setPokemonName] = useState('');
    const [getPokemonId, setPokemonId] = useState()
    const [pokemonList, setPokemonList] = useState([])
    const limit = 905;
    const pokemonArr = [];

    useEffect(() => {

        const fetchPosts = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
            setPokemonList(res.data.results);
        }
        fetchPosts();

        const createList = async () => {
            for (let i = 0; i < limit; i++) {
                pokemonArr.push({ name: pokemonList[i].name, id: i + 1 })
            }
        }
        createList()
        
    }, [searchTerm]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    console.log(pokemonArr)

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

            {pokemonArr.filter(item => item.name.toUpperCase().startsWith(searchTerm.toUpperCase()) || item.id.toString().startsWith(searchTerm))
            .map(item =>
                <Container id='pokemonResult' className="d-flex vw-100">
                    <Row className="m-auto">
                        <Pokemon key={item.id} name={item.name} id={item.id} />
                    </Row>
                </Container>)}
                
        </>
    )
};

export default Search;