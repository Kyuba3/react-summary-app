import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
      <Navbar bg="primary" variant="dark" className="rounded justify-content-between">
        <Container>
          <Navbar.Brand as={NavLink} to='/'>
            Waiter.app
          </Navbar.Brand>
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