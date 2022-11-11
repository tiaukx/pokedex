import { Form, Row, Col, Container, Button } from 'react-bootstrap';

const SearchBar = (props) => {

    return (
        <>
            <br/>
            <Container fluid className='d-flex justify-content-center vw-100'>
                    <Row className='m-auto' >
                        <Col md='auto' >
                            <input type={'text'} className='search-textbox' placeholder='Name or Number' onChange={props.handleChange} onSubmit={props.handleSubmit} />
                        </Col>
                        <Col>
                            <Button className='search-button' onClick={() => props.handleSubmit} ><i className="fa-solid fa-magnifying-glass"></i></Button>
                        </Col>
                    </Row>
            </Container>
        </>
    )
};

export default SearchBar;