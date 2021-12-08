import {
  GET_MOVIES,
  SET_LOADING,
  SEARCH_MOVIES,
  GET_MOVIEDETAILS,
  GET_MOVIECASTS,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_MOVIES:
      return { ...state, fetchedMovies: action.payload, loading: false };
    case SEARCH_MOVIES:
      return { ...state, fetchedMovies: action.payload, loading: false };
    case GET_MOVIEDETAILS:
      return { ...state, movieDetails: action.payload, loading: false };
    case GET_MOVIECASTS:
      return { ...state, movieCasts: action.payload, loading: false };
    default:
      return state;
  }
};
