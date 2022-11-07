import { Row, Col, Button, Card } from 'react-bootstrap'
import UpdateFavourite from "./UpdateFavourite";

const PokemonCard = (props) => {

    const { pokemonData, pokemonName, type1, type2, pokemonIcon, handleShow } = props;

    return (
        <>
            <Card style={{ width: '17rem', border: 'black' }} className='pulse-card'>
                <Card.Img variant='top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`} style={{ background: '#f2f2f2' }} />
                <Card.Header></Card.Header>
                <Card.Body>
                    <Row className="m-auto">
                        <h5>{`#${pokemonData.id}`} {pokemonName}</h5>
                    </Row>
                    <Row className="m-auto">
                        <p className="types">
                            {/* gets the icon for the type of the pokemon via the pokemonIcon object */}
                            <img className="type-icon" src={pokemonIcon[type1]} alt={`${type1}`} style={{ width: '2rem' }} />{' '}
                            {type1[0].toUpperCase() + type1.slice(1)}{' '}
                            {/* if type1 and type2 are the same, don't render type2 to screen */}
                            {type1 === type2 ? <></> : <img className="type-icon" src={pokemonIcon[type2]} alt={`${type2}`} style={{ width: '2rem' }} />}{' '}
                            {(type1 === type2) ? <></> : type2[0].toUpperCase() + type2.slice(1)}
                        </p>
                    </Row>
                    <Row className="m-auto">
                        <Col xs={4}>
                            <UpdateFavourite id={pokemonData.id} name={pokemonData.name} />
                        </Col>
                        <Col >
                            <Button onClick={handleShow}>See More</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}

export default PokemonCard;