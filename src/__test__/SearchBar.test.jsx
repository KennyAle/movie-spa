import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

// A helper component to wrap the SearchBar within a BrowserRouter
function MockSearchBar() {
  const [showSearch, setShowSearch] = useState(true);
  
  function handleShowSearch() {
    setShowSearch(!showSearch);
  }

  return (
    <BrowserRouter>
      <SearchBar handleShowSearch={handleShowSearch} />
    </BrowserRouter>
  );
}

describe('SearchBar', () => {
  // Test that the search input and submit button are rendered
  it('renders the search input and submit button', () => {
    render(<MockSearchBar />);
    const input = screen.getByRole('textbox'); // Find the search input
    const submitButton = screen.getByRole('button', { name: 'Search' }); // Find the submit button

    expect(input).toBeInTheDocument(); // Ensure the search input is rendered
    expect(submitButton).toBeInTheDocument(); // Ensure the submit button is rendered
  });

  // Test that submitting the search form updates the input value
  it('submits the search form and updates the input value', () => {
    render(<MockSearchBar />);
    const input = screen.getByRole('textbox'); // Find the search input
    const submitButton = screen.getByRole('button', { name: 'Search' }); // Find the submit button

    // Simulate user input and submit the form
    fireEvent.change(input, { target: { value: 'Avengers' } }); // Set the input value to 'Avengers'
    fireEvent.click(submitButton); // Click the submit button

    // Expect the input value to be updated to 'Avengers'
    expect(input).toHaveValue('Avengers');
  });
});
