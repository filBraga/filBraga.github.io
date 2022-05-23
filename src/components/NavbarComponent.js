import '../App.css';
import 'bootstrap/dist/css/bootstrap.css'
import logo from '../imgs/logo.svg'

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NavbarComponent = () => {
  return(
    <div className='App'>
      <Navbar bg="dark" variant="dark"
        fixed="top" expand="sm" collapseOnSelect>

        <Container>
        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact-me">Contact Me</Nav.Link>
            {/* <NavDropdown title="Products">
              <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">Coffee</NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">Chocolate</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>

            </Container>
      </Navbar>
    </div>
  )
}
export default NavbarComponent
