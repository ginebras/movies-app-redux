import React from 'react';
import './MovieCard.scss';
import { Link } from 'react-router-dom';

export default function MovieCard({ movie }) {
  return (
    <div className="card-item">
      <Link to={`/movie/${movie.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{movie.Title}</h4>
              <p>{movie.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
