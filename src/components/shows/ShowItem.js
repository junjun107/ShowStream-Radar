import React from 'react';
import ImageNotFound from '../layout/images/image-not-available-300x300.jpg';
import { Link } from 'react-router-dom';

const ShowItem = ({ show }) => {
  const { poster_path } = show;
  const posterAPI = 'https://image.tmdb.org/t/p/original/';
  return (
    <div className='card bg-light h-100 border-0'>
      <Link to={`/show/${show.id}`}>
        <img
          className='card-img-top'
          width={'300px'}
          variant='top'
          src={poster_path !== null ? posterAPI + poster_path : ImageNotFound}
          alt='poster'
        />
      </Link>

      <div className='card-body text-center'>
        <h5 className='card-title fw-normal'>{show.name}</h5>
        <div className='card-text text-muted'>
          Ratings {''}
          <span className='badge rounded-pill bg-primary'>
            <i class='glyphicon glyphicon-star'></i>
            {show.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShowItem;
