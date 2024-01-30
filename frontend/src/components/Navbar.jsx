import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/aboutus" className="navbar-link">About US</Link>
        </li>
        <li className="navbar-item">
          <Link to="/events" className="navbar-link">Events</Link>
        </li>
        <li className="navbar-item">
          <Link to="/calendar" className="navbar-link">Calendar</Link>
        </li>
        <li className="navbar-item">
          <Link to="/login" className="navbar-link">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;