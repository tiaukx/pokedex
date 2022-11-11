import { Button, Col, Container } from "react-bootstrap";

const GenFilter = (props) => {

    return (
        <>
            <br />
            <div className="d-flex justify-content-center">
                <h4>Generation Filter</h4>
            </div>
            <Container id='genFilterBttns' className="d-flex justify-content-center">
                <Col md='1' >
                    <Button className='genButton' variant="danger" onClick={() => props.updateGen(1, 151)} >Gen 1</Button>{' '}
                </Col>
                <Col md='1' >
                    <Button className='genButton' variant="danger" onClick={() => props.updateGen(152, 251)} >Gen 2</Button>{' '}
                </Col>
                <Col md='1' >
                    <Button className='genButton' variant="danger" onClick={() => props.updateGen(252, 386)} >Gen 3</Button>{' '}
                </Col>
                <Col md='1' >
                    <Button className='genButton' variant="danger" onClick={() => props.updateGen(387, 493)} >Gen 4</Button>{' '}
                </Col>
                <Col md='1' >
                    <Button className='genButton' variant="danger" onClick={() => props.updateGen(494, 649)} >Gen 5</Button>{' '}
                </Col>
                <Col md='1' >
                    <Button className='genButton' variant="danger" onClick={() => props.updateGen(650, 721)} >Gen 6</Button>{' '}
                </Col>
                <Col md='1' >
                    <Button className='genButton' variant="danger" onClick={() => props.updateGen(722, 809)} >Gen 7</Button>{' '}
                </Col>
                <Col md='1' >
                    <Button className='genButton' variant="danger" onClick={() => props.updateGen(810, 905)} >Gen 8</Button>
                </Col>
                {/* <Col md='1' >
                    <Button className='genButton' variant="danger" onClick={() => props.updateGen(906, 907)} >Gen 9</Button>
                </Col> */}
                <Col md='1' >
                    {/* generates a reset button that resets the filters to display all pokemon when a filter button has been pressed */}
                    {
                        props.id.startId !== 1 || props.id.endId !== 905
                            ? <Button className='genButton' variant="danger" onClick={() => props.updateGen(1, 905)} >Reset</Button>
                            : <></>
                    }
                </Col>
            </Container>
            <br />
        </>
    )
};

export default GenFilter;