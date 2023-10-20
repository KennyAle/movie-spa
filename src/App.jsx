import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SearchBar from './components/SearchBar';


function App() {
  
  const [showSearch, setShowSearch] = useState(true)

  function handleShowSearch() {
    setShowSearch(!showSearch)
  }

  return (
    <Router>
      {showSearch && <SearchBar handleShowSearch={handleShowSearch} />}
      <Routes>
        <Route path="/" element={
          <div className='2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10'>
            <MovieList apiUrl='https://api.themoviedb.org/3/trending/movie/week?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
            <MovieList apiUrl='https://api.themoviedb.org/3/movie/now_playing?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
            <MovieList apiUrl='https://api.themoviedb.org/3/movie/popular?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
            <MovieList apiUrl='https://api.themoviedb.org/3/movie/upcoming?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
            <MovieList apiUrl='https://api.themoviedb.org/3/movie/top_rated?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
            <MovieList apiUrl='https://api.themoviedb.org/3/discover/movie?api_key=daf788f2ab38afabc8b5ea0ee12373da&with_genres=16' />
          </div>} 
        />
        <Route path="/movie/:id/*" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
