import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <i className="bi bi-person-circle"></i>
      </div>
    </div>
  );
}
