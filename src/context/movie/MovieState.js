import { Reducer } from 'react';
import axios from 'axios';
import MovieContext from './movieContext';
import movieReducer from './movieReducer';
import {
  GET_MOVIES,
  SET_LOADING,
  SEARCH_MOVIES,
  GET_MOVIEDETAILS,
  GET_MOVIECASTS,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

const MovieState = (props) => {
  const initialStates = {
    fetchedMovies: [],
    movieDetails: {},
    movieCast: [],
    loading: false,
    alert: null,
  };
};

const [state, dispatch] = useReducer(movieReducer, initialState);

return (
  <MovieContext.Provider
    value={{
      fetchedMovies: state.fetchedMovies,
      movieDetails: state.movieDetails,
      movieCast: state.movieCast,
      loading: state.loading,
      alert: state.alert,
    }}
  >
    {props.children}
  </MovieContext.Provider>
);
export default MovieState;
