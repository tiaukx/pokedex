import { Form, Row, Col, Container } from 'react-bootstrap';

const SearchBar = (props) => {

    return (
        <>
            <br/>
            <div className="d-flex justify-content-center">
                <h4>Search for a Pokémon</h4>
            </div>
            <Container fluid className='d-flex justify-content-center vw-100'>
                <Form onSubmit={props.handleSubmit} >
                    <Row className='m-auto' >
                        <Col md='auto' >
                            <Form.Control placeholder='Name or Number' onChange={props.handleChange} />
                        </Col>
                        {/* <Col>
                            <Button className='rounded-circle' ><i className="fa-solid fa-magnifying-glass"></i></Button>
                        </Col> */}
                    </Row>
                </Form>
            </Container>
        </>
    )
};

export default SearchBar;