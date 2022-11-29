import { Button, Col, Row } from "react-bootstrap";

const GenFilter = (props) => {

    return (
        <>
            <br />
                <div id='genFilterBttns' className="d-flex text-light">
                    <Row className="mx-4">
                        <Col className="m-2 p-1">
                            <h5 >Filter by Generation: </h5>
                        </Col>
                    </Row>
                    <Row className="m-auto">
                        <Col className="m-1 p-1">
                            <Button className='genButton' style={{ width: "10vh" }} variant="primary" onClick={() => props.updateGen(1, 151)} >Gen 1</Button>{' '}
                        </Col>
                        <Col className="m-1 p-1">
                            <Button className='genButton' style={{ width: "10vh" }} variant="primary" onClick={() => props.updateGen(152, 251)} >Gen 2</Button>{' '}
                        </Col>
                        <Col className="m-1 p-1">
                            <Button className='genButton' style={{ width: "10vh" }} variant="primary" onClick={() => props.updateGen(252, 386)} >Gen 3</Button>{' '}
                        </Col>
                        <Col className="m-1 p-1" >
                            <Button className='genButton' style={{ width: "10vh" }} variant="primary" onClick={() => props.updateGen(387, 493)} >Gen 4</Button>{' '}
                        </Col>
                        <Col className="m-1 p-1" >
                            <Button className='genButton' style={{ width: "10vh" }} variant="primary" onClick={() => props.updateGen(494, 649)} >Gen 5</Button>{' '}
                        </Col>
                        <Col className="m-1 p-1" >
                            <Button className='genButton' style={{ width: "10vh" }} variant="primary" onClick={() => props.updateGen(650, 721)} >Gen 6</Button>{' '}
                        </Col>
                        <Col className="m-1 p-1" >
                            <Button className='genButton' style={{ width: "10vh" }} variant="primary" onClick={() => props.updateGen(722, 809)} >Gen 7</Button>{' '}
                        </Col>
                        <Col className="m-1 p-1" >
                            <Button className='genButton' style={{ width: "10vh" }} variant="primary" onClick={() => props.updateGen(810, 905)} >Gen 8</Button>
                        </Col>
                        {/* <Col className="m-1 p-1">
                            <Button className='genButton' style={{width: "10vh"}} variant="primary" onClick={() => props.updateGen(906, 907)} >Gen 9</Button>
                        </Col> */}
                        <Col className="m-1 p-1" >
                            {/* generates a reset button that resets the filters to display all pokemon when a filter button has been pressed */}
                            {
                                props.id.startId !== 1 || props.id.endId !== 905
                                    ? <Button className='genButton' style={{ width: "10vh" }} variant="primary" onClick={() => props.updateGen(1, 905)} >Reset</Button>
                                    : <></>
                            }
                        </Col>
                    </Row>
                </div>
            <br />
        </>
    )
};

export default GenFilter;