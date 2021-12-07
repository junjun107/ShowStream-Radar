import spinnerImg from './spinner.gif';

const Spinner = () => (
  <img
    src={spinnerImg}
    alt='loading img'
    style={{ width: '200px', margin: 'auto', display: 'block' }}
  />
);

export default Spinner;
