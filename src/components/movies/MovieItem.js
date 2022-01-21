import './MovieItem.css';

import { Link } from 'react-router-dom';
import ImageNotFound from '../layout/images/image-not-available-300x300.jpg';

const MovieItem = ({ movie }) => {
  const { poster_path } = movie;
  const posterAPI = 'https://image.tmdb.org/t/p/original/';
  return (
    <div className='card poster-card bg-light h-100 border-0 '>
      <Link to={`/movie/${movie.id}`}>
        <img
          className='card-img-top py-2'
          width={'300px'}
          variant='top'
          src={poster_path !== null ? posterAPI + poster_path : ImageNotFound}
          alt='poster'
        />
      </Link>

      <div className='card-body text-center'>
        <h5 className='card-title fw-normal'>{movie.title}</h5>
        <div className='card-text text-muted'>
          Ratings {''}
          <span className='badge rounded-pill bg-primary'>
            <i class='glyphicon glyphicon-star'></i>
            {movie.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
