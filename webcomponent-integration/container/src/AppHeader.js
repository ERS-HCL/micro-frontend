import React from 'react';
import { NavLink } from 'react-router-dom';

const AppHeader = () => (
  <header>
    <nav>
      <ol className="center-column">
        <li>
          <NavLink activeClassName='active' to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/music">Music</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ol>
    </nav>
  </header>
);

export default AppHeader;
