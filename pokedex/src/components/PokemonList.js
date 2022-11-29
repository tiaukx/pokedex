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
        endId: 905,
    })

    //automatically updates pokemon list when filtered by generation 
    useEffect(() => {
        const pokeId = async () => {
            //temporary array
            let pokemonList = []
            //loops through startId and endId, depending on if generation filter has been applied
            for (let i = id.startId; i <= id.endId; i++) {
                pokemonList.push(i)
            }
            //pushes temp array values to pokemon array
            setPokemon(pokemonList)
            //sets total results length for pagination
            setTotalResults(pokemonList.length)
        }
        pokeId();
    }, [id]);

    //function passed through to genFilter to change what pokemon are displayed - based on ID values
    function updateGen(start, end) {
        setId({ startId: start, endId: end })
        //resets current page to 1 so pagination doesn't break when filter button has changed
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
            <Container>
                <GenFilter updateGen={updateGen} id={id} />
            </Container>

            <Container id='fullPokemonList' className="d-flex vw-100 h-auto card-bg" >
                <Row className="m-auto p-2" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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
            <br />
        </>
    );
};

export default PokemonList;