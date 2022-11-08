import { Form, Row, Col, Container, Button } from 'react-bootstrap';

const SearchBar = (props) => {

    return (
        <>
            <br/>
            <Container fluid className='d-flex justify-content-center vw-100'>
                <Form onSubmit={props.handleSubmit} >
                    <Row className='m-auto' >
                        <Col md='auto' >
                            <Form.Control placeholder='Name or Number' onChange={props.handleChange} onSubmit={props.handleSubmit} />
                        </Col>
                        <Col>
                            <Button className='search-button' onClick={props.handleSubmit} ><i className="fa-solid fa-magnifying-glass"></i></Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </>
    )
};

export default SearchBar;