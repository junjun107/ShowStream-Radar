import React from 'react';

const Cast = ({ castItem }) => {
  return (
    <div className='card text-center border-0 px-0 '>
      <img
        style={{ width: '100px', height: '150px' }}
        src={'https://image.tmdb.org/t/p/w500/' + castItem.profile_path}
        className='card-img-top rounded-3 mx-auto mt-3'
        alt='...'
      />
      <div className='card-body'>
        <h6 className='card-text my-1'>{castItem.name}</h6>
        <p className='card-text'>
          <small className='text-muted'>{castItem.character}</small>
        </p>
      </div>
    </div>
  );
};

export default Cast;
