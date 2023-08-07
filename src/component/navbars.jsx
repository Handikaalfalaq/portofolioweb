import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css'
import { useNavigate} from 'react-router-dom';

function Navbars() {
  const navigate = useNavigate()
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
      <Navbar.Brand className="itemNavbar" style={{ fontSize: 30}} onClick={(e) => {navigate(`/`) }}>Handika Al Falaq</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
          </Nav>

          <Nav>
            <div className="itemNavbar" onClick={(e) => {navigate(`/about`) }}>About</div>
            <div className="itemNavbar" onClick={(e) => {navigate(`/portofolio`) }} >Portofolio</div>
            <div className="itemNavbar" onClick={(e) => {navigate(`/skills`) }} >Skills</div>
            <div className="itemNavbar" onClick={(e) => {navigate(`/contact`) }} >Contact</div>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;