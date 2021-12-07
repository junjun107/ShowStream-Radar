import React from 'react';
import { Card } from 'react-bootstrap';

const Cast = ({ profile_path, name }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant='top'
        src={'https://image.tmdb.org/t/p/w500/' + profile_path}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Cast;
