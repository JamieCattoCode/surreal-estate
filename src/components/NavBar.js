import React from 'react';
import '../styles/navbar.css';

const NavBar = () => (
  <div className="navbar">
    <img
      alt="Surreal Estate Logo"
      src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
    />
    <ul className="navbar-list">
      <li className="navbar-list-item">View Properties</li>
      <li className="navbar-list-item">Add a Property</li>
    </ul>
  </div>
);

export default NavBar;
