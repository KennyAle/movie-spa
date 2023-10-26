import { useParams } from 'react-router-dom';
import MovieList from '../components/MovieList';

// Functional component to display a list of movies based on a specific genre
function GenreMovieList() {
    const { id } = useParams();
    // Define the API URL to fetch movies based on the genre ID
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=daf788f2ab38afabc8b5ea0ee12373da&with_genres=${id}`;
    // Render the MovieList component with the specified API URL
    return <MovieList apiUrl={apiUrl} />;
}

export default GenreMovieList;
