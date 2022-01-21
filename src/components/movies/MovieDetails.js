import React, { useEffect, useContext } from 'react';
import { Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Cast from './Cast';
import MovieContext from '../../context/movie/movieContext';
import ImageNotFound from '../layout/images/image-not-available-300x300.jpg';
import './MovieDetails.css';

const MovieDetails = () => {
  const movieContext = useContext(MovieContext);
  const { getMovieDetails, getMovieCasts, movieDetails, movieCasts } =
    movieContext;
  const {
    backdrop_path,
    original_title,
    tagline,
    vote_average,
    genres,
    release_date,
    overview,
    poster_path,
  } = movieDetails;

  const { id } = useParams();
  useEffect(() => {
    // console.log('useEffect ran');
    getMovieDetails(id);
    getMovieCasts(id);
  }, []);

  const movieBackdropUrl = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
  const moviePosterUrl = `https://image.tmdb.org/t/p/original/${poster_path}`;
  return (
    <section>
      <div
        className='container-lg my-3 moviePosterContainer'
        style={{
          backgroundImage: `url('${movieBackdropUrl}')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <div className='row my-5 g-0 align-items-center  justify-content-around'>
          <div className='detailLeft col-lg-4 '>
            <img
              src={moviePosterUrl}
              className='rounded mx-auto d-block py-5'
              alt=''
              style={{ width: '300px' }}
            />
          </div>

          <div className='detailRight col-lg-6 text-light'>
            <h2 className='fw-bold'>
              {original_title}
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
            <p>
              <br />
              <h3 className='fw-bold'>Overview:</h3>
              <p className='lh-sm'>{overview}</p>
            </p>
          </div>
        </div>
      </div>

      {/* cast list */}
      <div className='container-lg'>
        <h3 className='my-5'>{movieCasts.length < 1 ? '' : 'Top cast'}</h3>
        <div className='row my-5 g-0 align-items-center justify-content-around'>
          {movieCasts.map((castItem) => (
            <div className='col-sm-6 col-md-4 col-lg-2 '>
              <Cast castItem={castItem} key={id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieDetails;
