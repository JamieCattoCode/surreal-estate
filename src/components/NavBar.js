import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const NavBar = () => (
  <div className="navbar">
    <img
      alt="Surreal Estate Logo"
      src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
    />
    <ul className="navbar-list">
      <li className="navbar-list-item"><Link to="/">View Properties</Link></li>
      <li className="navbar-list-item"><Link to="add-property">Add a Property</Link></li>
    </ul>
  </div>
);

export default NavBar;
