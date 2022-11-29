import { Row, Col, Container, Modal, Button } from 'react-bootstrap'

const PokemonModal = (props) => {

    const { pokemonData, pokemonName, pokeDesc, type1, type2, pokemonIcon, superEffective, height, weight, ability1, ability2, ability3, show, handleShow } = props;

    return (
        <>
            {/* when user clicks on card will load up more details about pokemon */}
            <Modal show={show} size='xl' onHide={handleShow} centered dialogClassName="Modal" style={{fontFamily: "futura"}}>
                <Modal.Header style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Modal.Title>
                        <div className="modal-name modal-title number" >
                            #{pokemonData.id} {pokemonName}
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container id='pokemonInfo' className="fluid">
                        <Row className='m-auto'>
                            <Col style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <br />
                                <div className='pokemon-image'>
                                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`} alt={pokemonName} style={{ width: '25rem', background: '#f2f2f2' }} />
                                </div>
                                <br />
                            </Col>
                            <Col className='pokemonInfo'>
                                <Row className="m-auto description">
                                    <p>{pokeDesc}</p>
                                </Row>
                                <br />
                                <Row className='m-auto'>
                                    <Col>
                                        <div className="type">
                                            <h4>Type</h4>
                                            {/* gets the icon for the type of the pokemon via the pokemonIcon object */}
                                            <img className="type-icon" src={pokemonIcon[type1]} alt={`${type1}`} style={{ width: '2rem' }} />{' '}
                                            {type1[0].toUpperCase() + type1.slice(1)}{' '}{<br />}
                                            {/* if type1 and type2 are the same, don't render type2 to screen */}
                                            {type1 === type2 ? <></> : <img className="type-icon" src={pokemonIcon[type2]} alt={`${type2}`} style={{ width: '2rem' }} />}{' '}
                                            {(type1 === type2) ? <></> : type2[0].toUpperCase() + type2.slice(1)}
                                        </div>
                                        {<br />}
                                        <div className="weaknesses">
                                            <h4>Weaknesses</h4>
                                            {superEffective.map(item => {
                                                return <>
                                                    <img className="type-icon" src={pokemonIcon[item]} alt={`${item}`} style={{ width: '2rem' }} />{' '}
                                                    {item[0].toUpperCase() + item.slice(1)}{<br />}
                                                </>
                                            })
                                            }
                                            {<br />}
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="stats">
                                            <h4>Stats</h4>
                                            <p>Hit Points: {pokemonData.stats[0].base_stat}</p>
                                            <p>Attack: {pokemonData.stats[1].base_stat}</p>
                                            <p>Defense: {pokemonData.stats[2].base_stat}</p>
                                            <p>Special Attack: {pokemonData.stats[3].base_stat}</p>
                                            <p>Special Defense: {pokemonData.stats[4].base_stat}</p>
                                            <p>Speed: {pokemonData.stats[5].base_stat}</p>
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="height-and-weight">
                                            <h4>Height</h4>
                                            <p>{height} m</p>
                                            <h4>Weight</h4>
                                            <p>{weight} kg</p>
                                        </div>
                                        <div className="abilities">
                                            <h4>Abilities</h4>
                                            <p>Ability 1: {ability1[0].toUpperCase() + ability1.slice(1)}</p>
                                            {ability2 === 'N/A' ? <></> : <p>Ability 2: {ability2[0].toUpperCase() + ability2.slice(1)}</p>}
                                            {ability3 === 'N/A' ? <></> : <p>Ability 2: {ability3[0].toUpperCase() + ability3.slice(1)}</p>}
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="m-auto">
                                    <div className="evolution-chart">
                                        <h4>Evolutions</h4>
                                    </div>
                                </Row>
                            </Col>

                        </Row>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='primary' onClick={handleShow}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default PokemonModal;