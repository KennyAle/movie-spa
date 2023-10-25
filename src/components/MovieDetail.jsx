import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';

/*Styled Components*/
import { Tagline } from '../styled-components/Tagline';
import { Title } from '../styled-components/Title';
import { Genres } from '../styled-components/Genres';
import { Highlights } from '../styled-components/Highlights';
import { Subtitle } from '../styled-components/Subtitle';
import { Cast } from '../styled-components/Cast';
import { Overview } from '../styled-components/Overview';
import { BannerDetail } from '../styled-components/BannerDetail';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [backgroundImageUrl, setBackgroundImageUrl] = useState(null);


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=daf788f2ab38afabc8b5ea0ee12373da&append_to_response=videos,images,credits`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data)
        if (data.images && data.images.backdrops.length > 0) {
          const url = `https://image.tmdb.org/t/p/w500${data.images.backdrops[0].file_path}`;
          setBackgroundImageUrl(url);
        }
      });
      window.scrollTo(0, 0)
  }, [id]);

  movie && console.log(movie);

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
    <main>
      {movie ? (
        <section>
          <BannerDetail style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url(${backgroundImageUrl})` }}>
            <Tagline>"{movie.tagline}"</Tagline>  
            <Title>{movie.title}</Title>
            <Genres>
              {movie.genres.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </Genres>
            <Highlights>
              <li><a href="">Play</a></li>
              <li><span>Release</span>{new Date(movie.release_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</li>
              <li><span>Country</span>{movie.production_countries && movie.production_countries.length > 0
                ? movie.production_countries[0].iso_3166_1 : "N/A"}</li>
              <li><span>Length</span>{movie.runtime} min</li>
              <li><span>Budget</span>{formatBudget(movie.budget)}</li>
              <li><span>Rating</span>{movie.vote_average.toFixed(1)}</li>
            </Highlights>
          </BannerDetail>
          <Overview>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <section>
              <Subtitle>Description</Subtitle>
              <p>{movie.overview}</p>
              <Subtitle>Cast</Subtitle>
              <Cast>
                {movie.credits.cast.slice(0, 10).map((castMember) => (
                  <li key={castMember.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${castMember.profile_path}`} alt={castMember.name} />
                    <p>{castMember.name}</p>
                  </li>
                ))}
              </Cast>
            </section>
          </Overview>
          <iframe width="560" height="315" 
          src={
            movie.videos && movie.videos.results && movie.videos.results.length > 0
              ? `https://www.youtube.com/embed/${movie.videos.results[movie.videos.results.length - 1].key}`
              : ''}
            title={movie.title} 
            allowFullScreen="1"
            controls="0" 
            rel="0"
            loop="1"/>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </main>
      <Routes>
        <Route path="/" element={
          <section className='flex flex-col gap-5 py-9'>
            <article key={id}>
              <Subtitle>Similar Movies</Subtitle>
              <MovieList apiUrl={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=daf788f2ab38afabc8b5ea0ee12373da`} />
            </article>
            {movie && movie.genres.map((genre) => (
            <article key={genre.id}>
              <Subtitle>{genre.name}</Subtitle>
              <MovieList apiUrl={`https://api.themoviedb.org/3/discover/movie?api_key=daf788f2ab38afabc8b5ea0ee12373da&with_genres=${genre.id}`} />
            </article>
            ))}
          </section>} 
        />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </>
  );
}

export default MovieDetail;
