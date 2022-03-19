import React, { useState } from 'react';

import MovieCard from '../MovieCard/MovieCard';

import './MovieSlider.css';

export default function MovieSlider({ shows }) {
  var [index, setIndex] = useState(0);
  var limitIndex = 0;

  const handleRight = () => {
    const newIndex = index < 6 ? (index += 1) : 0;
    setIndex(newIndex);
  };

  const handleLeft = () => {
    const newIndex = index < 1 ? 6 : (index -= 1);
    setIndex(newIndex);
  };

  return (
    <div className="container-slider-movies">
      <div className="icon-container" style={{ left: 5 }} onClick={handleLeft}>
        <i class="bi bi-arrow-left-circle-fill"></i>
      </div>

      <div
        className="slider-container"
        style={{ transform: `translateX(${index * -280}px)` }}
      >
        {shows?.map((show, index) => (
          <MovieCard key={index} movie={show} />
        ))}
      </div>

      <div
        className="icon-container"
        style={{ right: 5 }}
        onClick={handleRight}
      >
        <i class="bi bi-arrow-right-circle-fill"></i>
      </div>
    </div>
  );
}
