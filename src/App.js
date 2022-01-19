import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
import Movies from './components/movies/Movies';
import MovieDetails from './components/movies/MovieDetails';
import Shows from './components/shows/Shows';
import ShowDetails from './components/shows/ShowDetails';
import NotFound from './components/layout/NotFound';
import Alert from './components/layout/Alert';
import About from './components/layout/About';
import MovieState from './context/movie/MovieState';
import ShowState from './context/show/ShowState';
import AlertState from './context/alert/AlertState';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [fetchedMovies, setFetchedMovies] = useState([]);
  // const [movieDetails, setMovieDetails] = useState({});
  // const [movieCast, setMovieCast] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [alert, setAlert] = useState(null);

  // // get popular movies
  // const popularMovies = async () => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     'https://api.themoviedb.org/3/movie/popular?api_key=6c00af7daea767f0080deeb6bd1f556d&language=en-US&page=1'
  //   );
  //   setFetchedMovies(res.data.results);
  //   // console.log(fetchedMovies);
  //   setLoading(false);
  // };

  // // Search Movie with keyword
  // const searchMovie = async (query) => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.themoviedb.org/3/search/movie?api_key=6c00af7daea767f0080deeb6bd1f556d&query=${query}&page=1`
  //   );
  //   setFetchedMovies(res.data.results);
  //   // console.log(query);
  //   setLoading(false);
  // };

  // //Get Single Movie Details
  // const getMovieDetails = async (id) => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.themoviedb.org/3/movie/${id}?api_key=6c00af7daea767f0080deeb6bd1f556d&language=en-US`
  //   );
  //   //console.log(res.data);
  //   setMovieDetails(res.data);
  //   setLoading(false);
  // };

  // //Get Movie Cast
  // const getMovieCast = async (id) => {
  //   setLoading(true);
  //   const res = await axios.get(
  //     `https://api.themoviedb.org/3/movie/${id}/credits?api_key=6c00af7daea767f0080deeb6bd1f556d&language=en-US`
  //   );
  //   console.log(res.data.cast);
  //   setMovieCast(res.data.cast);
  //   setLoading(false);
  // };

  // //setAlert
  // const alertSetup = (msg, type) => {
  //   setAlert({
  //     msg: msg,
  //     type: type,
  //   });
  //   setTimeout(() => setAlert(null), 2000);
  // };

  return (
    <ShowState>
      <MovieState>
        <AlertState>
          <Router>
            <div className='App'>
              <Header />
              <div className='container-fluid p-5'>
                <Alert />
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/shows' element={<Shows />} />
                  <Route path='/show/:id' element={<ShowDetails />} />
                  <Route path='/movies' element={<Movies />} />
                  <Route path='/movie/:id' element={<MovieDetails />} />
                  <Route path='/about' element={<About />} />
                  <Route path='*' element={<NotFound />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </Router>
        </AlertState>
      </MovieState>
    </ShowState>
  );
}

export default App;
