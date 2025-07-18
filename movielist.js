import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('/api/movies')
      .then(res => res.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="grid-container">
      {movies.map(movie => (
        <Link to={`/movie/${movie.id}`} className="movie-card" key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.tagline}</p>
          <strong>Rating: {movie.vote_average}/10</strong>
        </Link>
      ))}
    </div>
  );