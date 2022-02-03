import { useContext, useEffect } from 'react';
import ShowContext from '../../context/show/showContext';
import ShowItem from './ShowItem';
import Spinner from '../layout/Spinner';

const Shows = () => {
  const showContext = useContext(ShowContext);
  const { getPopularShows, fetchedShows, loading } = showContext;

  useEffect(() => {
    getPopularShows();
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='container-lg my-2'>
        <div className='text-start py-3'>
          <h4 className='pt-5 pb-4'>
            <i className='bi bi-film mx-2 text-info' />
            <strong>Popular Shows</strong>
          </h4>
        </div>

        <div className='row g-4 justify-content-start'>
          {fetchedShows.length === 0 ? (
            <h4 className='text-muted px-2'>
              {' '}
              <i className='bi bi-emoji-frown px-3'></i>No results found
            </h4>
          ) : (
            fetchedShows.map((show) => (
              <div
                key={show.id}
                className='col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2'
              >
                <ShowItem show={show} />
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
};

export default Shows;
