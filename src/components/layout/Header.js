import { useContext, useState } from 'react';
import MovieContext from '../../context/movie/movieContext';
import AlertContext from '../../context/alert/alertContext';

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
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-3'>
      <div className='container-fluid'>
        <a className='navbar-brand ms-2' href='/'>
          <span className='text-info fw-bold'>
            <i className='bi bi-film mx-2' />
            Moive App
          </span>
        </a>

        {/* toggle button for mobile nav */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* navbar links  */}
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li class='nav-item dropdown ms-3'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Movies
              </a>
              <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <a class='dropdown-item' href='#'>
                    Popular
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Now Playing
                  </a>
                </li>
              </ul>
            </li>

            <li class='nav-item dropdown ms-3 d-md-inline'>
              <a
                class='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Shows
              </a>
              <ul class='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <a class='dropdown-item' href='#'>
                    Popular
                  </a>
                </li>
                <li>
                  <a class='dropdown-item' href='#'>
                    Top Rrated
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* Search box */}
          <form onSubmit={onSubmitHandler}>
            <div className='input-group ms-3'>
              <input
                className='form-control'
                type='text'
                name='query'
                placeholder='Search...'
                value={query}
                onChange={onChangeHandler}
              />
              <span className='input-group-append me-4'>
                <button
                  className='btn btn-outline-secondary bg-white 
                border'
                  type='submit'
                  value='Search'
                >
                  <i className='fa fa-search'></i>
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
