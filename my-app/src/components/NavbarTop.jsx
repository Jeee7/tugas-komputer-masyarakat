import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'
import '../components/HomeStyling.css'

function NavbarTop() {
  return (
   
    <Navbar bg="myBg" expand="lg">
      <Container>
      <Navbar.Brand> <Link to="/" className='brand-1'>NZ</Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" >
        <Nav className="ms-auto nav-item-1">
          <NavDropdown title="Menu" id="basic-nav-dropdown" alignRight > 
            <NavDropdown.Item as={Link} to="/Modul" >Modul Pembelajaran</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/Content1" >Materi</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="https://instagram.com/nz_photography9?igshid=MzNlNGNkZWQ4Mg==">Tentang Saya</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Container>  
  </Navbar>
        
  );
}

export default NavbarTop;