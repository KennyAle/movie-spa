import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function SearchBar({handleShowSearch}) {
    const [movieData, setMovieData] = useState(null); // Initialize movie data state
    const [searchValue, setSearchValue] = useState(''); // Initialize search input value state
    const navigate = useNavigate(); // Get the navigate function from React Router

    const renderMovies = (e) => {
        e.preventDefault() // Prevent form submission (page reload)

        // Fetch movie data from the API based on the search input
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=daf788f2ab38afabc8b5ea0ee12373da&query=${searchValue}`)
          .then((response) => response.json())
          .then((data) => {setMovieData(data) // Update movie data state with the fetched data
          window.scrollTo(0, 0) // Scroll to the top of the page
          navigate(`search-results/${searchValue}`) // Navigate to the search results page
    })
}
    
    return (
        <>
            <form onSubmit={renderMovies}>
                <input type="text" onChange={e => setSearchValue(e.target.value)} />
                <input type="submit" value="Search" />
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