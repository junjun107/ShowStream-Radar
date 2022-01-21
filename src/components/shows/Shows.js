import { useContext, useEffect } from 'react';
import ShowContext from '../../context/show/showContext';
import ShowItem from './ShowItem';
import Spinner from '../layout/Spinner';

const Shows = () => {
  const showContext = useContext(ShowContext);
  const { getPopularShows, fetchedShows } = showContext;

  useEffect(() => {
    getPopularShows();
  }, []);

  return (
    <div className='container-lg my-2'>
      <div className='text-start'>
        <h2>Shows</h2>
      </div>

      <div className='row g-4 justify-content-start'>
        {fetchedShows.map((show) => (
          <div
            key={show.id}
            className='col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2'
          >
            <ShowItem show={show} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shows;
