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
            <br/>
            <div className="d-flex justify-content-center" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h4>Favourite Pokémon</h4>
            </div>
            <br/>
            <Container id='fullPokemonList' className="d-flex vw-100">
                <Row className="m-auto" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    {
                        faves.map((pokemons) => <Pokemon key={pokemons.pokedexId} id={pokemons.pokedexId} name={pokemons.name} />)
                    }
                </Row>
            </Container>
        </>
    )
}

export default Favourites;