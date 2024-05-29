import './Focalnav.css'
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'

export default function Focalnav() {

  return (
    <>
      <Navbar expand='lg' className="bg-white px-3 shadow" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#" className='focal-navbar-brand text-decoration-none text-black-50'><img className='mb-2 me-2 me-lg-4' src="./imgs/logo.svg" />Digital marketing agency</Navbar.Brand>
          <Navbar.Toggle aria-controls='offcanvasNavbar-expand-lg' />
          <Navbar.Offcanvas className='sidebar'
            id='offcanvasNavbar-expand-lg'
            aria-labelledby='offcanvasNavbarLabel-expand-lg'
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel-expand-lg'>
                <img src="./imgs/logo.svg" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#" className='nav-link me-lg-3'>Services</Nav.Link>
                <Nav.Link href="#" className='nav-link me-lg-3'>Portfolio</Nav.Link>
                <Nav.Link href="#" className='nav-link me-lg-3'>Clients & Partners</Nav.Link>
                <NavDropdown className='me-lg-3'
                  title="About Us"
                  id='offcanvasNavbarDropdown-expand-lg'>
                  <NavDropdown.Item className='nav-link ps-2' href="#">Who & Why</NavDropdown.Item>
                  <NavDropdown.Item className='nav-link ps-2' href="#">Internship</NavDropdown.Item>
                  <NavDropdown.Item className='nav-link ps-2' href="#">Achievement</NavDropdown.Item>
                  <NavDropdown.Item className='nav-link ps-2' href="#">Search for ID</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className='nav-link' href="#">Let's Talk</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}
