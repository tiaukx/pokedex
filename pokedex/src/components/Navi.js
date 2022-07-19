import { Nav, Navbar, Container } from 'react-bootstrap';

const Navi = () => {
    return (
        <Navbar variant="dark" bg="danger" expand="lg" className='justify-content-center' >
            <Navbar.Brand href='./'>Pokédex</Navbar.Brand>
                <Nav justify variant="tabs" className='justify-content-center' defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link href='./Search'>Search</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='./Favourites'>Favourites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='./Favourites' disabled>Link 3</Nav.Link>
                    </Nav.Item>
                </Nav>
        </Navbar>
    )
};

export default Navi;

// Pokédex