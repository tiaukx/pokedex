import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Pokemon from "./Pokemon";

const Favourites = () => {
    
    const [faves, setFaves] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:1995/pokemon/readAll')
        .then(res => setFaves(res.data))
        .catch(err => console.error(err));
    }, [faves]);

    return (
        <>
            <Container id='fullPokemonList' className="d-flex vw-100">
                <Row className="m-auto">
                    {
                        faves.map((pokemons) => <Pokemon key={pokemons.pokedexId} id={pokemons.pokedexId} name={pokemons.name} />)
                    }
                </Row>
            </Container>
            {/* {console.log(faves)} */}
        </>
    )
}

export default Favourites;