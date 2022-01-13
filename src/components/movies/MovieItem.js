import React from 'react';

import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <div className='card bg-light h-100 border-0'>
      <Link to={`/movie/${movie.id}`}>
        <img
          className='card-img-top'
          width={'300px'}
          variant='top'
          src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}
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
