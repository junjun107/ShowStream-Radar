import { useContext, useEffect } from 'react';
import MovieItem from './MovieItem';
import Spinner from '../layout/Spinner';
import MovieContext from '../../context/movie/movieContext';

const Movies = () => {
  const movieContext = useContext(MovieContext);

  useEffect(() => {
    movieContext.popularMovies();
  }, []);

  if (movieContext.loading) {
    return <Spinner />;
  } else {
    return (
      <div className='container-lg my-2'>
        <div class='text-start'>
          <h2>Popular Movies</h2>
        </div>
        <div className='row g-4 justify-content-start'>
          {movieContext.fetchedMovies.map((movie) => (
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

// const movieStyle = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(5, 1fr)',
//   gridGap: '0.5rem',
// };

export default Movies;
