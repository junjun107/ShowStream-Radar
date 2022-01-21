import ImageNotFound from '../layout/images/image-not-available-300x300.jpg';

const Cast = ({ castItem }) => {
  const { profile_path } = castItem;
  return (
    <div className='card text-center border-0 px-0 '>
      <img
        style={{ width: '100px', height: '150px' }}
        src={
          profile_path !== null
            ? 'https://image.tmdb.org/t/p/w500/' + castItem.profile_path
            : ImageNotFound
        }
        className='card-img-top rounded-3 mx-auto mt-3'
        alt=''
      />
      <div className='card-body'>
        <h6 className='card-text my-1'>{castItem.name}</h6>
        <p className='card-text'>
          <small className='text-muted'>{castItem.character}</small>
        </p>
      </div>
    </div>
  );
};

export default Cast;
