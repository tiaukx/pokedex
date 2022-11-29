import { Row, Col, Container } from 'react-bootstrap';

const SearchBar = (props) => {

    return (
        <>
            <br />
            <Container fluid className='d-flex justify-content-center vw-100' style={{fontFamily: "futura"}}>
                <Row className='m-auto' >
                    <Col md='auto' className='m-1 text-light'>
                        <h4>Search <i className="fa-solid fa-magnifying-glass"></i></h4>
                        <input type={'text'} className='search-textbox' placeholder='Name or Number' onChange={props.handleChange} />
                    </Col>
                    {/* <Col md='auto'>
                        <Button className='search-button' ><i className="fa-solid fa-magnifying-glass"></i></Button>
                    </Col> */}
                    <Col md='auto'>
                        <div className='badge bg-warning fs-5 text-wrap m-1' style={{width: "20rem"}}>Search for Pokémon using a name or National Pokédex number</div>
                    </Col>
                </Row>
            </Container>
        </>
    )
};

export default SearchBar;