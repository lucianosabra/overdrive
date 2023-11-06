import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://developerportaldev.blob.core.windows.net/media/Default/images/newLogos/OverDrive_Logo_1866x271_w.png"
            width="150"
            height="40"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#autos">Autos</Nav.Link>
            <NavDropdown title="Nosotros" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                ¿Quienes somos?
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Contacto</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#registrarse">Inicio de sesión</Nav.Link>
            <Nav.Link eventKey={2} href="#registrarse">
              Registrarse
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
