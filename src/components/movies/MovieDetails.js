import React, { useEffect } from 'react';
import { Image, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Cast from './Cast';

const MovieDetails = ({
  movieDetails,
  getMovieDetails,
  getMovieCast,
  movieCast,
  loading,
}) => {
  const { id } = useParams();

  useEffect(() => {
    console.log('useEffect ran');
    getMovieDetails(id);
    getMovieCast(id);
  }, []);
  return (
    <div>
      <section className='midContainer'>
        <div className='detailLeft'>
          <Image
            src={
              'https://image.tmdb.org/t/p/original/' +
              movieDetails.backdrop_path
            }
            fluid
            alt='movie_picture'
          />
          <p className='voteAverage'>Ratings - {movieDetails.vote_average}</p>
        </div>

        <div className='detailRight'>
          <h1>{movieDetails.original_title}</h1>
          <h3>{movieDetails.tagline}</h3>
          <p>Release_Date: {movieDetails.release_date}</p>
          <p>
            Genres:{` `}
            {movieDetails.genres &&
              movieDetails.genres.map((genre) => (
                <Badge bg='secondary' key={genre.id}>
                  {genre.name}
                </Badge>
              ))}
            {/* genre.name).join(', ')} */}
          </p>
          <p>
            <br />
            {movieDetails.overview}
          </p>
          <p>
            {movieCast.map((cast) => (
              <Cast cast={cast} key={cast.cast_id} />
            ))}
          </p>
        </div>
      </section>
    </div>
  );
};

export default MovieDetails;
