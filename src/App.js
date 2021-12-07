import { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Movies from './components/movies/Movies';
import MovieDetails from './components/movies/MovieDetails';
import Search from './components/movies/Search';
import Alert from './components/layout/Alert';
import About from './components/layout/About';

import axios from 'axios';
import MovieState from './context/movie/MovieState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [fetchedMovies, setFetchedMovies] = useState([]);

  const [movieDetails, setMovieDetails] = useState({});
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    popularMovies();
  }, []);

  // get popular movies
  const popularMovies = async () => {
    setLoading(true);
    const res = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=6c00af7daea767f0080deeb6bd1f556d&language=en-US&page=1'
    );
    setFetchedMovies(res.data.results);
    // console.log(fetchedMovies);
    setLoading(false);
  };

  // Search Movie with keyword
  const searchMovie = async (query) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=6c00af7daea767f0080deeb6bd1f556d&query=${query}&page=1`
    );
    setFetchedMovies(res.data.results);
    // console.log(query);
    setLoading(false);
  };

  //Get Single Movie Details
  const getMovieDetails = async (id) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=6c00af7daea767f0080deeb6bd1f556d&language=en-US`
    );
    //console.log(res.data);
    setMovieDetails(res.data);
    setLoading(false);
  };

  //Get Movie Cast
  const getMovieCast = async (id) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=6c00af7daea767f0080deeb6bd1f556d&language=en-US`
    );
    console.log(res.data.cast);
    setMovieCast(res.data.cast);
    setLoading(false);
  };
  //setAlert
  const alertSetup = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => setAlert(null), 2000);
  };

  return (
    <MovieState>
      <Router>
        <div className='App'>
          <Header />
          <div className='container'>
            <Alert alert={alert} />
            <Routes>
              <Route
                path='/'
                element={
                  <Fragment>
                    <Search searchMovie={searchMovie} alertSetup={alertSetup} />
                    <Movies
                      loading={loading}
                      fetchedMovies={fetchedMovies}
                      movieDetails={movieDetails}
                    />
                  </Fragment>
                }
              />
              <Route
                path='/movie/:id'
                element={
                  <MovieDetails
                    loading={loading}
                    getMovieDetails={getMovieDetails}
                    movieDetails={movieDetails}
                    getMovieCast={getMovieCast}
                    movieCast={movieCast}
                  />
                }
              />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </MovieState>
  );
}

export default App;
