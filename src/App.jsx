import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=daf788f2ab38afabc8b5ea0ee12373da')
      .then((response) => response.json())
      .then((data) => setData(data))
  }, [])

  console.log(data)
  
  return (
    <div className='App'>
        {data?.results.map((movie, index) => (
        <div className='card' key={index}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        </div>
        )
      )
    }
    </div>
  );
}

export default App;
