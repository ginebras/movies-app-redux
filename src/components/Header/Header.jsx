import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  fetchMoviesApi,
  fetchShowsApi,
} from '../../features/redux/movies/movieSlice';

import './Header.scss';

export default function Header() {
  const [program, setProgram] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (program !== '') {
      dispatch(fetchMoviesApi(program));
      dispatch(fetchShowsApi(program));
    }
  }, [program]);

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="logo">Movie App</div>
      </Link>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          placeholder="Enter name of movie or show"
        />
      </div>
      <div className="user-image">
        <i className="bi bi-person-circle"></i>
      </div>
    </div>
  );
}
