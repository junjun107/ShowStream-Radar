import { useEffect, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MovieContext from '../../context/movie/movieContext';
import AlertContext from '../../context/alert/alertContext';

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
  const movieContext = useContext(MovieContext);
  const alertContext = useContext(AlertContext);
  const { searchMovie } = movieContext;
  const { setAlert } = alertContext;

  const [query, setQuery] = useState('');

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(query);
    if (query === '') {
      setAlert('Search query cannot be empty', 'danger');
    } else {
      searchMovie(query);
      setQuery('');
    }
  };
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

            <Form className='d-flex' onSubmit={onSubmitHandler}>
              <input
                type='text'
                name='query'
                placeholder='Search...'
                value={query}
                onChange={onChangeHandler}
              />
              <input
                className='btn btn-outline-secondary'
                type='submit'
                value='Search'
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
