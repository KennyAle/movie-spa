import { render, screen } from "@testing-library/react";
import MovieList from "../components/MovieList";
import { BrowserRouter } from "react-router-dom"

// Mock component that includes MovieList with a predefined API URL
const MockMovieList = () => {
    const apiUrl = 'https://api.themoviedb.org/3/trending/movie/week?api_key=daf788f2ab38afabc8b5ea0ee12373da';
    return (
        <BrowserRouter>
            <MovieList apiUrl={apiUrl} />
        </BrowserRouter>
    )
}

describe('MovieList', () => {
  // Test to check if movie elements are rendered
  test('should render movie elements', async () => {
    // Render the MockMovieList component
    render(<MockMovieList />);
    // Use the `findByTestId` function to find the movie element with a specific test ID
    const movieElement = await screen.findByTestId("movie-element-0");
    // Check if the movie element is in the document
    expect(movieElement).toBeInTheDocument();
  });
});
