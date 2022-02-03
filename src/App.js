import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './components/layout/Home';
import Movies from './components/movies/Movies';
import SearchResults from './components/movies/SearchResults';
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
import './App.scss';

function App() {
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
                  <Route path='/search/:query' element={<SearchResults />} />
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
