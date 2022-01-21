import React from 'react';
import ImageNotFound from '../layout/images/image-not-available-300x300.jpg';

const Cast = ({ castItem }) => {
  const { profile_path } = castItem;
  return (
    <div className='card text-center border-0 px-1 '>
      <img
        style={{ width: '100px', height: '150px' }}
        src={
          profile_path !== null
            ? 'https://image.tmdb.org/t/p/w500/' + castItem.profile_path
            : ImageNotFound
        }
        className='card-img-top rounded-3 mx-auto mt-3 img-poster'
        alt=''
      />
      <div className='card-body '>
        <p className='card-text my-1 fs-6'>{castItem.name}</p>
        <p className='card-text'>
          <p className='text-muted lh-1'>{castItem.character}</p>
        </p>
      </div>
    </div>
  );
};

export default Cast;
