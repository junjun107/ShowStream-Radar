import MovieItem from './MovieItem';
import Spinner from '../layout/Spinner';

const Movies = ({ fetchedMovies, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={movieStyle}>
        {fetchedMovies.map((movie) => (
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
