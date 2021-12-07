import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const Header = () => {
  return (
    <div>
      <Navbar bg='dark' variant={'dark'} expand='lg'>
        <Container fluid>
          <Navbar.Brand href='/'>
            <i className='fas fa-star' />
            Movie App
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href='#home'>Shows</Nav.Link>
              <Nav.Link href='/about'>About</Nav.Link>
              {/* <NavDropdown title='Link' id='navbarScrollingDropdown'>
                <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action4'>
                  Another action
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>

            <Form className='d-flex'>
              <FormControl
                type='search'
                placeholder='Search...'
                className='me-2'
                aria-label='Search'
              />
              <Button variant='outline-light'>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
