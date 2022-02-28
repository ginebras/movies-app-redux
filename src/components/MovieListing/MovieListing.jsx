import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getAllMovies,
  getAllShows,
} from '../../features/redux/movies/movieSlice';

import MovieCard from '../MovieCard/MovieCard';

import './MovieListing.scss';

export default function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = '';

  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h2>{movies.Error}</h2>
      </div>
    );

  renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h2>{movies.Error}</h2>
      </div>
    );

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="shows-list">
        <h2>Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
}
