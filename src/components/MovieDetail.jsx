import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=daf788f2ab38afabc8b5ea0ee12373da&append_to_response=videos,images,credits`)
      .then((response) => response.json())
      .then((data) => setMovie(data));
      window.scrollTo(0, 0)
  }, [id]);
  console.log(movie)

  function formatBudget(budget) {
    if (budget >= 1000000) {
      return `$${(budget / 1000000).toFixed(0)}M`
    } else if (budget >= 1000) {
      return `$${(budget / 1000).toFixed(0)}K`
    } else {
      return `$${budget}`
    }
  }
  
  return (
    <>
    <div>
      {movie ? (
        <div>
          <p>{movie.tagline}</p>  
          <h1>{movie.title}</h1>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <section>
            <ul>
              <li><a href="">Play</a></li>
              <li><span>Release</span>{new Date(movie.release_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</li>
              <li><span>Country</span>{movie.production_countries[0].iso_3166_1}</li>
              <li><span>Length</span>{movie.runtime} min</li>
              <li><span>Budget</span>{formatBudget(movie.budget)}</li>
              <li><span>Rating</span>{movie.vote_average.toFixed(1)}</li>
            </ul>
          </section>
          <section>
            <h2>Description</h2>
            <p>{movie.overview}</p>
          </section>
          <section>
            <h2>Cast</h2>
            <ul>
              {movie.credits.cast.slice(0, 10).map((castMember) => (
                <li key={castMember.id}>
                  <p>{castMember.name}</p>
                  {/* <img src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`} alt={castMember.name} /> */}
                </li>
              ))}
            </ul>
          </section>
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
            <MovieList apiUrl='https://api.themoviedb.org/3/discover/movie?api_key=daf788f2ab38afabc8b5ea0ee12373da&with_genres=16' />
          </div>} 
        />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default MovieDetail;
