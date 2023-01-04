import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
      <Navbar bg="primary" variant="dark" className="rounded">
        <Container>
            <Navbar.Brand>Waiter.app</Navbar.Brand>
            <Nav>
                <Nav.Link as={NavLink} to='/'>
                    Home
                </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;