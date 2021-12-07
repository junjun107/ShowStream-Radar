import React, { useState } from 'react';

const Search = ({ searchMovie, alertSetup }) => {
  const [query, setQuery] = useState('');

  const onChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(query);
    if (query === '') {
      alertSetup('Search query cannot be empty', 'danger');
    } else {
      searchMovie(query);
      setQuery('');
    }
  };
  return (
    <div>
      <form className='form mb-3' onSubmit={onSubmitHandler}>
        <input
          type='text'
          name='query'
          placeholder='Search...'
          value={query}
          onChange={onChangeHandler}
        />
        <input
          className='btn btn-outline-secondary'
          type='submit'
          value='Search'
        />
      </form>
    </div>
  );
};

export default Search;
