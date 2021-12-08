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
      <div style={movieStyle}>
        {movieContext.fetchedMovies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
};

const movieStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gridGap: '0.5rem',
};

export default Movies;
