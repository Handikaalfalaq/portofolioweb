import {Container, Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css'
import { useNavigate} from 'react-router-dom';
import { userData } from './assets/data';

function Navbars() {
  const navigate = useNavigate()
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
      <Navbar.Brand className={`itemNavbar ${window.location.pathname === '/' ? 'active' : ''}`} style={{ fontSize: 30}} onClick={(e) => {navigate(`/`) }}>{userData.namaUser}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
          </Nav>

          <Nav>
            <div className={`itemNavbar ${window.location.pathname === '/about' ? 'active' : ''}`} onClick={(e) => { navigate(`/about`) }}>About</div>
            <div className={`itemNavbar ${window.location.pathname === '/portofolio' ? 'active' : ''}`} onClick={(e) => {navigate(`/portofolio`) }} >Portofolio</div>
            <div className={`itemNavbar ${window.location.pathname === '/skills' ? 'active' : ''}`} onClick={(e) => {navigate(`/skills`) }} >Skills</div>
            <div className={`itemNavbar ${window.location.pathname === '/contact' ? 'active' : ''}`} onClick={(e) => {navigate(`/contact`) }} >Contact</div>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbars;