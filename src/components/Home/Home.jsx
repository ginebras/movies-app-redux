import React from 'react';

import MovieListing from '../MovieListing/MovieListing';

import './home.css';

export default function Home() {
  return (
    <div className="container-home">
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}
