// Import necessary dependencies and components
import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SearchBar from './components/SearchBar';
import GenreMovieList from './components/GenreMovieList';
import { Subtitle } from './styled-components/Subtitle';

// Define the main App component
function App() {
  // Define state variables and initialize them
  const [showSearch, setShowSearch] = useState(true); // State for showing/hiding search
  const [genres, setGenres] = useState([]); // State for storing genre data
  const [showGenres, setShowGenres] = useState(false); // State for showing/hiding genres

  // Function to toggle the visibility of the search bar
  function handleShowSearch() {
    setShowSearch(!showSearch);
  }

  // Fetch genre data from an API when the component mounts
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=daf788f2ab38afabc8b5ea0ee12373da')
      .then((response) => response.json())
      .then((data) => setGenres(data.genres));
  }, []);

  // Function to toggle the visibility of the genres sidebar
  function toggleGenres() {
    setShowGenres(!showGenres);
  }

  return (
    <Router>
      <nav>
        <ul className='flex justify-between'>
          <li>
            <button onClick={toggleGenres}>Genres</button> {/* Button to show/hide genres */}
          </li>
          <li>
            <Link to="/">Home</Link> {/* Link to the home page */}
          </li>
          <li>
            {showSearch && <SearchBar handleShowSearch={handleShowSearch} />} {/* Conditionally render the search bar */}
          </li>
        </ul>
        <aside className={`aside ${showGenres ? '' : 'hidden'}`}>
          {/* Sidebar for genres, shown when showGenres is true */}
          <ul>
            {genres.map((genre) => (
              <li key={genre.id}>
                <Link to={`/genre/${genre.id}`}>{genre.name}</Link> {/* Link to genre pages */}
              </li>
            ))}
          </ul>
        </aside>
      </nav>
      <Routes>
        <Route
          path="/"
          element={
            <div className='flex flex-col 2xl:container 2xl:mx-auto 2xl:px-0 py-3 gap-5 px-10'>
              <article>
                <Subtitle>Trending this week</Subtitle>
                <MovieList apiUrl='https://api.themoviedb.org/3/trending/movie/week?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
              </article>
              <article>
                <Subtitle>Current Releases</Subtitle>
                <MovieList apiUrl='https://api.themoviedb.org/3/movie/now_playing?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
              </article>
              <article>
                <Subtitle>Top Picks</Subtitle>
                <MovieList apiUrl='https://api.themoviedb.org/3/movie/popular?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
              </article>
              <article>
                <Subtitle>Upcoming releases</Subtitle>
                <MovieList apiUrl='https://api.themoviedb.org/3/movie/upcoming?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
              </article>
              <article>
                <Subtitle>Top Rated</Subtitle>
                <MovieList apiUrl='https://api.themoviedb.org/3/movie/top_rated?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
              </article>
            </div>
          }
        />
        <Route path="/genre/:id" element={<GenreMovieList />} />
        <Route path="/movie/:id/*" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
