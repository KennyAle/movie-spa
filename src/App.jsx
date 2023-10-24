import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';

import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SearchBar from './components/SearchBar';

function App() {
  const [showSearch, setShowSearch] = useState(true);
  const [genres, setGenres] = useState([]);

  function handleShowSearch() {
    setShowSearch(!showSearch);
  }

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=daf788f2ab38afabc8b5ea0ee12373da')
      .then((response) => response.json())
      .then((data) => setGenres(data.genres));
  }, []);

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      {showSearch && <SearchBar handleShowSearch={handleShowSearch} />}
      {/* <aside>
        <ul>
          {genres.map((genre) => (
            <li key={genre.id}>
              <Link to={`/genre/${genre.id}`}>{genre.name}</Link>
            </li>
          ))}
        </ul>
      </aside> */}
      <Routes>
        <Route
          path="/"
          element={
            <div className='2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10'>
              <MovieList apiUrl='https://api.themoviedb.org/3/trending/movie/week?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
              <MovieList apiUrl='https://api.themoviedb.org/3/movie/now_playing?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
              <MovieList apiUrl='https://api.themoviedb.org/3/movie/popular?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
              <MovieList apiUrl='https://api.themoviedb.org/3/movie/upcoming?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
              <MovieList apiUrl='https://api.themoviedb.org/3/movie/top_rated?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
            </div>
          }
        />
        <Route path="/genre/:id" element={<GenreMovieList />} />
        <Route path="/movie/:id/*" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

function GenreMovieList() {
  const { id } = useParams();
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=daf788f2ab38afabc8b5ea0ee12373da&with_genres=${id}`;
  return <MovieList apiUrl={apiUrl} />;
}

export default App;
