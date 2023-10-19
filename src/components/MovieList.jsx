import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';

function MovieList({ apiUrl }) {
    const [movieData, setMovieData] = useState(null)
    const scrollContainerRef = useRef(null)

    const scrollToStart = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: 'auto' })
        }
    }

    useEffect(() => {
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => setMovieData(data))
          window.scrollTo(0, 0)
      }, [apiUrl])

      scrollToStart()
    
    return (
        <div ref={scrollContainerRef} className="flex overflow-scroll snap-x gap-x-10">
            {movieData?.results.map((movie) => (
            <div className="snap-start" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
                <img className="w-96" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </Link>
            </div>
            ))}
        </div>
    )
}

export default MovieList