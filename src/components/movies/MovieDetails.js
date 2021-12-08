import React, { useEffect, useContext } from 'react';
import { Image, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Cast from './Cast';
import MovieContext from '../../context/movie/movieContext';

const MovieDetails = () => {
  const movieContext = useContext(MovieContext);
  // const { getMovieDetails } = movieContext;

  const { id } = useParams();

  useEffect(() => {
    console.log('useEffect ran');
    movieContext.getMovieDetails(id);
    movieContext.getMovieCasts(id);
  }, []);

  return (
    <div>
      <section className='midContainer'>
        <div className='detailLeft'>
          <Image
            src={
              'https://image.tmdb.org/t/p/original/' +
              movieContext.movieDetails.backdrop_path
            }
            fluid
            alt='movie_picture'
          />
          <p className='voteAverage'>
            Ratings {movieContext.movieDetails.vote_average}
          </p>
        </div>

        <div className='detailRight'>
          <h1>{movieContext.movieDetails.original_title}</h1>
          <h3>{movieContext.movieDetails.tagline}</h3>
          <p>Release_Date: {movieContext.movieDetails.release_date}</p>
          <p>
            Genres:{` `}
            {movieContext.movieDetails.genres &&
              movieContext.movieDetails.genres.map((genre) => (
                <Badge bg='secondary' key={genre.id}>
                  {genre.name}
                </Badge>
              ))}
            {/* genre.name).join(', ')} */}
          </p>
          <p>
            <br />
            {movieContext.movieDetails.overview}
          </p>
          <p>
            {movieContext.movieCasts.map((cast) => (
              <Cast cast={cast} key={cast.cast_id} />
            ))}
          </p>
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;
