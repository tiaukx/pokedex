import { Row, Col, Button, Card } from 'react-bootstrap'
import UpdateFavourite from "./UpdateFavourite";

const PokemonCard = (props) => {

    const { pokemonData, pokemonName, type1, type2, pokemonIcon, handleShow } = props;

    return (
        <>
            <Card style={{ height: '28rem', width: '17rem', border: 'black' }} className='pulse-card mx-1 my-1'>
                <Card.Img variant='top' className='mt-3' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`} style={{ background: '#f2f2f2' }} />
                <Card.Body>
                    <Row className="m-auto" >
                        <h5 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>{`#${pokemonData.id}`} {pokemonName}</h5>
                    </Row>
                    <Row className="m-auto " >
                        <div className="types" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            {/* gets the icon for the type of the pokemon via the pokemonIcon object */}
                            <p className='type1'>
                                <img className="type-icon " src={pokemonIcon[type1]} alt={`${type1}`} style={{ width: '2rem' }} />{' '}
                                {type1[0].toUpperCase() + type1.slice(1)}{' '}
                            </p>
                            <p className='type2'>
                                {/* if type1 and type2 are the same, don't render type2 to screen */}
                                {type1 === type2 ? <></> : <><img className="type-icon" src={pokemonIcon[type2]} alt={`${type2}`} style={{ width: '2rem' }} /></>}{' '}
                                {(type1 === type2) ? <></> : type2[0].toUpperCase() + type2.slice(1)}
                            </p>
                        </div>
                    </Row>
                    <Row className="m-auto">
                        <Col xs={5} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
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