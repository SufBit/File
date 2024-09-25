import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Form } from 'react-bootstrap'

export const Header = () => {
  const customStyles = {
    color: '#FFA500',
    fontWeight: 'bold',
  };
  return (
    <Navbar bg ="primary" expand="lg" variant="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={customStyles}>Notes-Taker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='m-auto'>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav
            className="d-flex justify-content-end"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={customStyles}>My Notes</Nav.Link>
            <NavDropdown title={<span style={customStyles}>Sufyan Arshad</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
