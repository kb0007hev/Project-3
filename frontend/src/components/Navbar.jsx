import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">About US</Link>
        </li>
        <li>
          <Link to="/profile">Events</Link>
        </li>
        <li>
          <Link to="/profile">Calendar</Link>
        </li>
        <li>
          <Link to="/register">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;