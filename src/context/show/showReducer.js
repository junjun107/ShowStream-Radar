import {
  GET_SHOWS,
  GET_SHOWDETAILS,
  GET_SHOWCASTS,
  SET_LOADING,
  SEARCH_SHOWS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case GET_SHOWS:
      return { ...state, fetchedShows: action.payload, loading: false };
    case GET_SHOWDETAILS:
      return { ...state, showDetails: action.payload, loading: false };
    case GET_SHOWCASTS:
      return { ...state, showCasts: action.payload, loading: false };
    case SEARCH_SHOWS:
      return { ...state, showSearchResults: action.payload, loading: false };
    default:
      return state;
  }
};
