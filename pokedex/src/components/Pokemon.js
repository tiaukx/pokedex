import { Card } from "react-bootstrap";
import PropTypes from 'prop-types';

const Pokemon = ({id, name}) => {
    return (
        <>
            <Card border="dark" style={{ width: '15rem' }}>
                <Card.Img variant='top' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
                <Card.Header></Card.Header>
                <Card.Body>
                    <p>{id} {name}</p>
                </Card.Body>
            </Card>
        </>
    );
};

export default Pokemon;

Pokemon.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
};