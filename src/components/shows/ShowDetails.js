import React, { useEffect, useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Cast from './Cast';
import ShowContext from '../../context/show/showContext';

const ShowDetails = () => {
  const showContext = useContext(ShowContext);

  const { showDetails, getShowDetails, getShowCasts, showCasts } = showContext;

  const {
    backdrop_path,
    name,
    tagline,
    vote_average,
    genres,
    release_date,
    overview,
    poster_path,
  } = showDetails;

  const { id } = useParams();

  useEffect(() => {
    console.log('useEffect ran');
    getShowDetails(id);
    getShowCasts(id);
  }, []);

  const showBackdropUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  const showPosterUrl = `https://image.tmdb.org/t/p/original/${poster_path}`;

  return (
    // <section>
    //   <div>{console.log(showDetails.name)}</div>
    // </section>
    <section>
      <div>{console.log(showDetails.name)}</div>
      <div
        className='container-lg my-3 moviePosterContainer'
        style={{
          backgroundImage: `url('${showBackdropUrl}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className='row my-5 g-0 align-items-center  justify-content-around'>
          <div className='detailLeft col-lg-4 '>
            <img
              src={showPosterUrl}
              className='rounded mx-auto d-block py-5'
              alt='poster'
              style={{ width: '300px' }}
            />
          </div>

          <div className='detailRight col-lg-6 text-light'>
            <h2 className='fw-bold'>
              {name}
              {/* <span className='fw-normal h5 ps-2'>
                ({movieContext.movieDetails.release_date.slice(0, -6)})
              </span> */}
            </h2>

            <h4 className='fst-italic fw-light'>{tagline}</h4>
            <p className='voteAverage'>Score: {vote_average}</p>
            <p>Release Date: {release_date}</p>

            <p>
              Genres:{` `}
              {genres &&
                genres.map((genre) => (
                  <Badge pill bg='info' key={genre.id} className='mx-1'>
                    {genre.name}
                  </Badge>
                ))}
            </p>
            <div>
              <br />
              <h3 className='fw-bold'>Overview:</h3>
              <p className='lh-sm'>{overview}</p>
            </div>
          </div>
        </div>
      </div>

      {/* cast list */}
      <div className='container-lg'>
        <h3 className='my-3'>Top cast</h3>
        <div className='row my-3 g-0 align-items-center'>
          {showCasts.map((castItem) => (
            <div className='col-sm-6 col-md-4 col-lg-2' key={castItem.id}>
              <Cast castItem={castItem} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowDetails;