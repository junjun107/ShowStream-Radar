import { useReducer } from 'react';
import axios from 'axios';
import MovieContext from './movieContext';
import MovieReducer from './movieReducer';
import {
  GET_MOVIES,
  SET_LOADING,
  SEARCH_MOVIES,
  GET_MOVIEDETAILS,
  GET_MOVIECASTS,
  SET_ALERT,
  REMOVE_ALERT,
} from '../types';

//initial state
const MovieState = (props) => {
  const initialState = {
    fetchedMovies: [],
    movieDetails: {},
    movieCasts: [],
    loading: false,
    alert: null,
  };

  const [state, dispatch] = useReducer(MovieReducer, initialState);

  //Set Loaing
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };

  // get popular movies p1 & p2
  const popularMovies = async () => {
    setLoading();
    const resultOne = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    );
    const resultTwo = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=2`
    );
    const res = resultOne.data.results.concat(resultTwo.data.results);
    // const res = resultOne.data.results;
    // console.log(res);
    dispatch({
      type: GET_MOVIES,
      payload: res,
    });
  };

  // Search Movie with keyword
  const searchMovie = async (query) => {
    setLoading();
    const resultOne = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=6c00af7daea767f0080deeb6bd1f556d&query=${query}&page=1`
    );
    const resultTwo = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=6c00af7daea767f0080deeb6bd1f556d&query=${query}&page=2`
    );
    const res = resultOne.data.results.concat(resultTwo.data.results);
    // console.log(res.data);
    dispatch({
      type: SEARCH_MOVIES,
      payload: res,
    });
  };
  //Get a Movie Details
  const getMovieDetails = async (id) => {
    setLoading();
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6c00af7daea767f0080deeb6bd1f556d&language=en-US`
    );
    // console.log(res.data);
    dispatch({ type: GET_MOVIEDETAILS, payload: res.data });
  };

  //Get Movie Cast
  const getMovieCasts = async (id) => {
    setLoading();
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=6c00af7daea767f0080deeb6bd1f556d&language=en-US`
    );
    const castMembers = res.data.cast;
    const topFiveCasts = castMembers.slice(0, 6);
    console.log(topFiveCasts);
    dispatch({
      type: GET_MOVIECASTS,
      payload: topFiveCasts,
    });
  };

  return (
    <MovieContext.Provider
      value={{
        fetchedMovies: state.fetchedMovies,
        movieDetails: state.movieDetails,
        movieCasts: state.movieCasts,
        loading: state.loading,
        alert: state.alert,
        popularMovies,
        searchMovie,
        getMovieDetails,
        getMovieCasts,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
};
export default MovieState;
