import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <Navbar
        className="bg-custom-dark"
        variant="dark"
        sticky="top"
        expand="md"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo}
                style={{ height: "45px", width: "60px" }}
                alt="Logo"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/experiences">
                <Nav.Link>Experiences</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects">
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/publications">
                <Nav.Link>Publications</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/misc">
                <Nav.Link>Misc.</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link disabled>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
