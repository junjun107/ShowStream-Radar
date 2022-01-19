import React, { Fragment } from 'react';
import Movies from '../movies/Movies';
import Shows from '../shows/Shows';

const Home = () => (
  <Fragment>
    <Movies />
    <Shows />
  </Fragment>
);

export default Home;
