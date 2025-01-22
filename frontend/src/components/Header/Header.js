import React from 'react'
import { Container, Nav, Navbar, NavDropdown, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../actions/userActions';


export const Header = ({setSearch}) => {
  const customStyles = {
    color: '#FFA500',
    fontWeight: 'bold',
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  }

  return (
    <Navbar bg ="primary" expand="lg" variant="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand style={customStyles}>
          <Link to='/'>Notes-Taker</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='m-auto'>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          </Nav>
          <Nav
            className="d-flex justify-content-end"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/mynotes" style={customStyles}>My Notes</Nav.Link>
            {userInfo ? (
            <NavDropdown title={<span style={customStyles} > {userInfo ? userInfo.name : 'Profile'}</span>} id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler} href="#action5">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
              <Nav.Link href="/login" style={customStyles}>Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
