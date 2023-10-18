import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

function MovieList({ apiUrl }) {
    const [movieData, setMovieData] = useState(null)

    useEffect(() => {
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => setMovieData(data))
      }, [])
    
      console.log(movieData)
    return (
        <div className="relative flex gap-1 overflow-scroll scroll-smooth snap-x snap-mandatory touch-pan-x z-0">
            {movieData?.results.map((movie) => (
            <div className='relative w-64 h-64 snap-start' key={movie.id}>
            <Link className="w-full h-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0" to={`/movie/${movie.id}`}>
                <img className='w-full aspect-square' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </Link>
            </div>
            ))}
        </div>
    )
}

export default MovieList