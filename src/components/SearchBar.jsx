import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SearchBar({handleShowSearch}) {
    const [movieData, setMovieData] = useState(null)
    const [searchValue, setSearchValue] = useState('')
    const navigate = useNavigate()

    const renderMovies = (e) => {
        e.preventDefault()

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=daf788f2ab38afabc8b5ea0ee12373da&query=${searchValue}`)
          .then((response) => response.json())
          .then((data) => {setMovieData(data)
          window.scrollTo(0, 0)
          navigate(`search-results/${searchValue}`)
    })
}
    
    return (
        <>
            <form onSubmit={renderMovies}>
                <input type="text" onChange={e => setSearchValue(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
            <div className="flex flex-wrap">
            {movieData?.results.map((movie) => (
                <div onClick={handleShowSearch} className="" key={movie.id}>
                <Link to={`/movie/${movie.id}`}>
                    <img className="w-96" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </Link>
                </div>
            ))}
            </div>
    </>
    )
}

export default SearchBar