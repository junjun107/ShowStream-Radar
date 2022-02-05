import { useContext, useEffect } from 'react';
import MovieItem from './MovieItem';
import Spinner from '../layout/Spinner';
import MovieContext from '../../context/movie/movieContext';

const Movies = () => {
  const movieContext = useContext(MovieContext);
  const { popularMovies, getPopularMovies, loading } = movieContext;

  useEffect(() => {
    getPopularMovies();
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='container-lg my-2'>
        <div className='text-start py-3'>
          <span className='h4'>
            <i className='bi bi-film mx-2 text-info' />
            Popular Movies
          </span>
        </div>
        <div className='row g-4 justify-content-start'>
          {popularMovies.map((movie) => (
            <div
              key={movie.id}
              id='cardItem'
              className='col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2'
            >
              <MovieItem movie={movie} />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Movies;
