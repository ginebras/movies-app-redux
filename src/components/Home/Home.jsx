import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  fetchMoviesApi,
  fetchShowsApi,
} from '../../features/redux/movies/movieSlice';

import MovieListing from '../MovieListing/MovieListing';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesApi());
    dispatch(fetchShowsApi());
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}
