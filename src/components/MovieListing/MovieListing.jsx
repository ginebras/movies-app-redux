import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  getAllMovies,
  getAllShows,
} from '../../features/redux/movies/movieSlice';

import MovieSlider from '../SliderMovies/MovieSlider';

import './MovieListing.scss';

export default function MovieListing() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = [];

  renderMovies = movies.Response === 'True' ? movies.Search : [];

  renderShows = shows.Response === 'True' ? shows.Search : [];

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <MovieSlider shows={renderMovies} />
      </div>
      <div className="shows-list">
        <h2>Shows</h2>
        <MovieSlider shows={renderShows} />
      </div>
    </div>
  );
}
