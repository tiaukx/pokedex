import { useState, useEffect } from "react";

import Pokemon from "./Pokemon";
import PaginationRender from "./Pagination";

import { Container, Row } from "react-bootstrap";
import GenFilter from "./GenFilter";

const PokemonList = () => {

    const [pokemon, setPokemon] = useState([]);
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);
    const [id, setId] = useState({
        startId: 1,
        endId: 898,
    })

    useEffect(() => {
        const pokeId = async () => {
            let pokemonList = []
            for (let i = id.startId; i <= id.endId; i++) {
                pokemonList.push(i)
            }
            setPokemon(pokemonList)
            setTotalResults(pokemonList.length)
            return pokemonList;
        }
        pokeId();
    }, [id]);

    function updateGen(start, end) {
        setId({ startId: start, endId: end })
        setCurrentPage(1);
    }

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
            <GenFilter updateGen={updateGen} id={id} />

            <Container id='fullPokemonList' className="d-flex vw-100">
                <Row className="m-auto">
                    {
                        currentPokemon.map((pokemons) => <Pokemon key={pokemons} id={pokemons} />)
                    }
                </Row>
            </Container>

            <br />
            {
                totalResults > postsPerPage
                    ? <PaginationRender postsPerPage={postsPerPage} totalPosts={totalResults} paginate={paginate} currentPage={currentPage} />
                    : ''
            }
        </>
    );
};

export default PokemonList;