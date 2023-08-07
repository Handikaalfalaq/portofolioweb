import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css'

function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbars">
      <Container>
        <Navbar.Brand href="#home" className="brand">Handika Al Falaq</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="itemBrand" >About</Nav.Link>
            <Nav.Link href="#deets" className="itemBrand" >Portofolio</Nav.Link>
            <Nav.Link href="#deets" className="itemBrand" >Skills</Nav.Link>
            <Nav.Link href="#deets" className="itemBrand" >Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;