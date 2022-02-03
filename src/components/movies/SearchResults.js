import { useContext, useEffect } from 'react';
import MovieContext from '../../context/movie/movieContext';
import ShowContext from '../../context/show/showContext';
import MovieItem from './MovieItem';
import ShowItem from '../shows/ShowItem';
import Spinner from '../layout/Spinner';

const SearchResult = () => {
  const movieContext = useContext(MovieContext);
  const showContext = useContext(ShowContext);
  // const { movieSearchResults, loading } = movieContext;
  // const { showSearchResults, loading } = showContext;

  return (
    <div className='container-lg my-2'>
      <div className='text-start pb-3'>
        <h2 className='font-weight-bold '>Movies</h2>
      </div>
      {movieContext.loading ? (
        <Spinner />
      ) : (
        <div className='row g-4 justify-content-start'>
          {movieContext.movieSearchResults.length === 0 ? (
            <h4 className='text-muted px-2'>
              <i className='bi bi-emoji-frown px-3'></i>No results found
            </h4>
          ) : (
            movieContext.movieSearchResults.map((movie) => (
              <div
                key={movie.id}
                id='cardItem'
                className='col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2'
              >
                <MovieItem movie={movie} />
              </div>
            ))
          )}
        </div>
      )}

      <div className='text-start my-5'>
        <h2 className='font-weight-bold '>Shows</h2>
      </div>
      {showContext.loading ? (
        <Spinner />
      ) : (
        <div className='row g-4 justify-content-start'>
          {showContext.showSearchResults.length === 0 ? (
            <h4 className='text-muted px-2'>
              {' '}
              <i className='bi bi-emoji-frown px-3'></i>No results found
            </h4>
          ) : (
            showContext.showSearchResults.map((show) => (
              <div
                key={show.id}
                id='cardItem'
                className='col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2'
              >
                <ShowItem show={show} />
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
