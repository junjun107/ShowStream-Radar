import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import MovieContext from '../../context/movie/movieContext';
import ShowContext from '../../context/show/showContext';
import AlertContext from '../../context/alert/alertContext';

const Header = () => {
  const movieContext = useContext(MovieContext);
  const showContext = useContext(ShowContext);
  const alertContext = useContext(AlertContext);

  const navigate = useNavigate();

  const { searchMovie } = movieContext;
  const { searchShows } = showContext;
  const { setAlert } = alertContext;

  const [query, setQuery] = useState('');

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    // // console.log(query);
    if (query === '') {
      setAlert('Search query cannot be empty', 'danger');
    } else {
      searchMovie(query);
      searchShows(query);
      setQuery('');
      navigate(`/search/${query}`);
    }
  };
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark py-3'>
      <div className='container-fluid'>
        <a className='navbar-brand ms-2' href='/'>
          <span className='text-info fw-bold'>
            <i className='bi bi-film mx-2' />
            Moive DB
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
          <ul className='navbar-nav ms-4 me-auto mb-2 mb-lg-0'>
            <li className='nav-item mx-2'>
              <Link
                to='/movies'
                className='nav-link active text-secondary font-weight-bold'
                aria-current='page'
              >
                Movies
              </Link>
            </li>
            <li className='nav-item mx-2'>
              <Link
                to='/shows'
                className='nav-link active text-secondary font-weight-bold'
                aria-current='page'
              >
                Shows
              </Link>
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
