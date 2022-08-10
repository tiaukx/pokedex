import { useState, useEffect } from "react";
import axios from 'axios';

import Pokemon from "./Pokemon";
import PaginationRender from "./Pagination";

import { Container, Row } from "react-bootstrap";

const PokemonList = () => {

    const [pokemon, setPokemon] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=898`);
            setPokemon(res.data.results);
            setTotalResults(res.data.results.length)
            // console.log(res.data.results)
        }
        fetchPosts();

    }, []);

    //Get pokemon based on posts per page (will display however many pokemon specified in postsPerPage useState)
    const indexOfLastPokemon = currentPage * postsPerPage;
    const indexOfFirstPokemon = indexOfLastPokemon - postsPerPage;
    const currentPokemon = pokemon.slice(indexOfFirstPokemon, indexOfLastPokemon);

    //change page
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <Container id='fullPokemonList' className="d-flex vw-100">
                <Row className="m-auto">
                    {
                        currentPokemon.map((pokemons) => <Pokemon key={pokemons.name} name={pokemons.name} />)
                    }
                </Row>
            </Container>
            <br/>
            {
                totalResults > postsPerPage
                    ? <PaginationRender postsPerPage={postsPerPage} totalPosts={totalResults} paginate={paginate} currentPage={currentPage} />
                    : ''
            }
        </>
    );
};

export default PokemonList;