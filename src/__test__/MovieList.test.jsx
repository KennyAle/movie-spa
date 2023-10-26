import { render, screen } from "@testing-library/react";
import MovieList from "../components/MovieList";
import { BrowserRouter } from "react-router-dom"

const MockMovieList = () => {
    const apiUrl = 'https://api.themoviedb.org/3/trending/movie/week?api_key=daf788f2ab38afabc8b5ea0ee12373da';
    return (
        <BrowserRouter>
            <MovieList apiUrl={apiUrl} />
        </BrowserRouter>
    )
}

describe('MovieList', () => {
  test('should render movie elements', async () => {
    render(<MockMovieList />);
    const movieElement = await screen.findByTestId("movie-element-0");
    expect(movieElement).toBeInTheDocument();
  });
});
