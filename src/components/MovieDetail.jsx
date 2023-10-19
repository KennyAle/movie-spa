import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=daf788f2ab38afabc8b5ea0ee12373da`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
      window.scrollTo(0, 0)
  }, [id]);
  console.log(movie)
  return (
    <>
    <div>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
      <Routes>
        <Route path="/" element={
          <div>
            <MovieList apiUrl={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=daf788f2ab38afabc8b5ea0ee12373da`} />
            <MovieList apiUrl='https://api.themoviedb.org/3/movie/now_playing?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
            <MovieList apiUrl='https://api.themoviedb.org/3/movie/popular?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
            <MovieList apiUrl='https://api.themoviedb.org/3/movie/upcoming?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
            <MovieList apiUrl='https://api.themoviedb.org/3/movie/top_rated?api_key=daf788f2ab38afabc8b5ea0ee12373da' />
            <MovieList apiUrl='https://api.themoviedb.org/3/discover/movie?api_key=daf788f2ab38afabc8b5ea0ee12373da&with_genres=16' />
          </div>} 
        />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default MovieDetail;
