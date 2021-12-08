import React from 'react';
import { Button, Card, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieItem = ({ movie }) => {
  return (
    <div>
      <Card style={{ width: '15rem' }}>
        <Link to={`/movie/${movie.id}`}>
          <Card.Img
            variant='top'
            src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}
          />
        </Link>

        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            Ratings {''}
            <Badge pill bg='primary'>
              <span
                className='glyphicon glyphicon-star'
                aria-hidden='true'
              ></span>
              {movie.vote_average}
            </Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieItem;
